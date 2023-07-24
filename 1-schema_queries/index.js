const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require('@apollo/server/standalone')

async function init() {
  const typeDefs = `
    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
    }
`

const resolvers = {
  Query: {
    books() {
      return [
        {
          author: 'Vitor',
          title: 'Primeiro teste'
        }
    ]
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const { url } = await startStandaloneServer(server)

console.log(`Executando em ${url}`)
}

init()

