const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require('@apollo/server/standalone')

async function init() {
  const typeDefs = `
    scalar Date

    type Book {
      title: String
      author: String
    }

    type Query {
      books: [Book]
      now: Date
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
    },
    now() {
      return new Date()
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

