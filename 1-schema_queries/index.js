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
      now: String
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
      return String(new Date())
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

