const yamlParser = require('js-yaml')
const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const readFileAsync = promisify(fs.readFile)


const parseYaml = (file, parser) => {
    return parser.safeLoad(file)
}

const isGraphQLApi = (type) => {
    return type === 'AWS::AppSync::GraphQLApi'
}

const getAppSyncApiName = ({ Resources }) => {
    for (const resource in Resources) {
        const type = Resources[resource].Type
        if (isGraphQLApi(type)) {
            return Resources[resource].Properties.Name
        }
    }
}

const getApiName = (templatePath) => {
    return readFileAsync(templatePath, { encoding: 'utf8' })
        .then(data => parseYaml(data, yamlParser))
        .then(getAppSyncApiName)
        .then(apiName => apiName)
        .catch(err => console.log(err))
}

module.exports = getApiName


module.exports.getRegion = () => {
    const region = process.argv.filter(element => element.includes('region'))
    if (region.length === 0) throw 'Please provide as command line argument the Amazon region e.g. "-- region=xx-xxx-x"'
    const extractRegionName = region[0].split('=')[1]
    return extractRegionName
}

