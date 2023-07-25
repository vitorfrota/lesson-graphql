const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require('@apollo/server/standalone')

async function init() {
  const typeDefs = `
    scalar Date

    type Book {
      title: String
      author: String
    }

    type Product {
      discountPrice: Float
      name: String!
      price: Float!
      discount: Float
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
      featuredProduct: Product
      numbers: [Int!]!
    }
`

const resolvers = {
  Product: {
    discountPrice(parent) {
      return parent.price - parent.discount
    }
  },
  User: {
    name(parent) {
      return parent.full_name
    }
  },
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
        full_name: 'Vitor Frota'
      }
    },
    featuredProduct() {
      return {
        name: 'Iphone 15 256gb gold edition',
        price: 15000,
        discount: 5000
      }
    },
    numbers() {
      const ascNumbers = (a,b) => a - b

      return Array(6).fill(0).map(()=> parseInt(Math.random() * 60 + 1)).sort(ascNumbers)
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

