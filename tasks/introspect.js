const { graphql, buildSchema  }  = require('graphql')

module.exports = async ({ query, schema }, { success, error }) => {
  try {
    const data = await graphql({ schema: buildSchema(schema), source: query })
    return success({ data: JSON.stringify(data) })
  } catch (err) {
    return error({ error: err.message })
  }
}