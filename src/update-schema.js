module.exports = (graphqlApi, apiId, schema) => {
    const params = {
        apiId,
        definition: Buffer.from(schema)
    }

    return graphqlApi.startSchemaCreation(params).promise()
}