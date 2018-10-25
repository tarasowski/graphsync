const { getRegion } = require('./parse')
const { syncSchema } = require('./cli')
const AWS = require('aws-sdk')
const appsync = new AWS.AppSync({ region: getRegion() })
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)

const templatePath = path.join(__dirname, '../', '../', '../', 'template.yaml')
const schemaPath = path.join(__dirname, '../', '../', '../', '/templates/schema.graphql')



syncSchema(appsync, templatePath, schemaPath, readFileAsync)
    .then(response => console.log(response))
    .catch(err => console.log(err))