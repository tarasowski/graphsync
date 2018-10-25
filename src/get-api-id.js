
module.exports = async (graphqlApi, name) => {
    const params = {
        maxResults: 0,
    }
    const apis = await graphqlApi.listGraphqlApis(params).promise()
    const apiPoperties = apis.graphqlApis.filter(element => element.name === name)
    const [{ ...data }] = apiPoperties
    return data
}