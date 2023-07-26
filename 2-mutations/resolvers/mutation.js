const { users, generateId } = require('../db')

module.exports = {
  createUser(_, args) {
    const userEncountered = users.some(user=> user.email === args.email)

    if(userEncountered) throw new Error('E-mail cadastrado')

    const newUser = {
      id: generateId(),
      profile_id: 'id-1',
      status: 'ACTIVE',
      ...args
    }

    users.push(newUser)

    return newUser
  }
}