const { profilesMock } = require('../mocks')

module.exports = {
  profile(parent) {
    const profilesEncountered = profilesMock.filter(profile=> profile.id === parent.profile_id)

    return profilesEncountered[0] ?? null
  }
}