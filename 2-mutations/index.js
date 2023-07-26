const { createServer } = require("http")
const { createYoga, createSchema } = require('graphql-yoga')
const { loadFiles } = require('@graphql-tools/load-files')

async function init() {
  const schema = createSchema({
    typeDefs: await loadFiles('./schema/*.graphql'),
    resolvers: await loadFiles('./resolvers/index.js')
  })

  const yoga = createYoga({ schema, landingPage: false, graphqlEndpoint: '/' })

  const server = createServer(yoga)

  server.listen(4000, () => {
    console.log(`Executando em 'http://localhost:4000`)
  })
}

init()

