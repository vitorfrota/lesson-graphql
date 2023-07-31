const { profiles, generateId } = require('../db')

module.exports = {
  createProfile(_, { data }) {
    const profileEncountered = profiles.some(({ name })=> name === data.name)

    if(profileEncountered) throw new Error('Perfil já cadastrado')

    const newProfile = {
      id: generateId(),
      ...data
    }

    profiles.push(newProfile)

    return newProfile
  },
  deleteProfile(_, { id }) {
    const profilesFiltered = profiles.filter(profile=> profile.id !== id)

    profiles.push(profilesFiltered)
  },
  updateProfile(_, args) {
    const profileEncounteredIndex = profiles.findIndex(({ id })=> id === args.id)

    if(profileEncounteredIndex < 0) return null

    const updatedProfile = {
      ...profiles[profileEncounteredIndex],
      ...args
    }

    return updatedProfile
  }
}