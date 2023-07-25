const { ApolloServer } = require("@apollo/server")
const { startStandaloneServer } = require('@apollo/server/standalone')

const usersMock = [
  {
    id: 'id-1',
    name: 'John Doe',
    email: 'john@doe.com',
    age: 20,
    profile_id: 'id-1'
  },
  {
    id: 'id-2',
    name: 'Anne Doe',
    email: 'anne2023@doe.com',
    age: 31,
    profile_id: 'id-2'
  },
]

const profilesMock = [
  {
    id: 'id-1',
    name: 'Comum'
  },
  {
    id: 'id-2',
    name: 'Administrador'
  },
]

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
      profile: Profile
    }

    type Profile {
      id: ID!
      name: String!
    }

    type Query {
      books: [Book]
      now: Date
      loggedUser: User
      featuredProduct: Product
      numbers: [Int!]!
      users: [User]
      user(id: ID): User
      profiles: [Profile]
      profile(id: ID): Profile
    }
`

const resolvers = {
  Product: {
    discountPrice(parent) {
      return parent.price - parent.discount
    }
  },
  User: {
    profile(parent) {
      const profilesEncountered = profilesMock.filter(profile=> profile.id === parent.profile_id)

      return profilesEncountered[0] ?? null
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
        name: 'Vitor Frota'
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
    },
    users() {
      return usersMock
    },
    user(_, args) {
      const usersEncountered = usersMock.filter(user=> user.id == args.id)

      return usersEncountered[0] ?? null
    },
    profiles() {
      return profilesMock
    },
    profile(_, args) {
      const profilesEncountered = profilesMock.filter(profile=> profile.id === args.id)

      return profilesEncountered[0] ?? null
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

