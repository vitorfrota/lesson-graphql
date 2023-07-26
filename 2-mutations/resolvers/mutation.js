const { users, generateId } = require('../db')

module.exports = {
  createUser(_, { data }) {
    const userEncountered = users.some(user=> user.email === data.email)

    if(userEncountered) throw new Error('E-mail cadastrado')

    const newUser = {
      id: generateId(),
      profile_id: 'id-1',
      status: 'ACTIVE',
      ...data
    }

    users.push(newUser)

    return newUser
  },
  deleteUser(_, { id }) {
    const usersFiltered = users.filter(user=> user.id !== id)

    users.push(usersFiltered)
  },
  updateUser(_, args) {
    const userEncounteredIndex = users.findIndex(user=> user.id === args.id)

    if(userEncounteredIndex < 0) return null

    const updatedUser = {
      ...users[userEncounteredIndex],
      ...args
    }

    return updatedUser
  }
}