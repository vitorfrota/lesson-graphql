const { users, profiles } = require('../db')

module.exports = {
  users() {
    return users
  },
  user(_, args) {
    const usersEncountered = users.filter(user=> user.id == args.id)

    return usersEncountered[0] ?? null
  },
  profiles() {
    return profiles
  },
  profile(_, args) {
    const profilesEncountered = profiles.filter(profile=> profile.id === args.id)

    return profilesEncountered[0] ?? null
  }
}