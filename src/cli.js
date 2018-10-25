const parseYaml = require('./parse')
const getApiId = require('./get-api-id')
const loadSchema = require('./load-schema')
const updateSchema = require('./update-schema')


module.exports.syncSchema = async (graphqlApi, templatePath, schemaPath, readFileAsync) => {
    try {
        const apiName = await parseYaml(templatePath)
        const { apiId } = await getApiId(graphqlApi, apiName)
        const schema = await loadSchema(readFileAsync, schemaPath)
        await updateSchema(graphqlApi, apiId, schema)
        return 'success'
    } catch (err) {
        console.log(err)
        throw err
    }
}
