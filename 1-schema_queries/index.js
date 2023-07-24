const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require('@apollo/server/standalone')

async function init() {
  const typeDefs = `
    scalar Date

    type Book {
      title: String
      author: String
    }

    type User {
      id: ID!
      name: String!
      email: String!
      age: Int
      salary: Float
      isAdmin: Boolean
    }

    type Query {
      books: [Book]
      now: Date
      loggedUser: User
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
    },
    loggedUser() {
      return {
        age: 25,
        isAdmin: true,
        name: 'Vitor Frota'
      }
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

