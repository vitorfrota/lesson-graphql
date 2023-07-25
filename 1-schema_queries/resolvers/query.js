const { usersMock, profilesMock } = require('../mocks')

module.exports = {
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