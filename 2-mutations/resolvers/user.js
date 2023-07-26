const { profiles } = require('../db')

module.exports = {
  profile(parent) {
    const profilesEncountered = profiles.filter(profile=> profile.id === parent.profile_id)

    return profilesEncountered[0] ?? null
  }
}