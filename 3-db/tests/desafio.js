const db = require('../config/db')

async function saveOrUpdateUser(user) {
  const userExists = db('users').where({ email: user.email })

  if(userExists) {
    db('users').where({ id: userExists.id }).update(user)

    return userExists
  }

  const newUser = await db('users').insert(user)

  return newUser
}

async function saveOrUpdateProfile(profile) {
  const profileExists = db('profiles').where({ name: profile.name })

  if(profileExists) {
    db('profiles').where({ id: profileExists.id }).update(profile)

    return profileExists
  }

  const newProfile = await db('profiles').insert(profile)

  return newProfile
}

async function addProfilesToUser(userId, profiles) {
  const currentUser = db('users').where({ id: userId })

  if(!currentUser) throw 'User not found!'

  for(profile of profiles) {
    db('users_profiles').insert({ userId, profileId: profile.id })
  }
}

async function execute() {
  const user = await saveOrUpdateUser({
    name: 'Vitor Hugo',
    email: 'v@v.com',
    password: '123123123'
  })

  console.log(user)

  const profileOne = await saveOrUpdateProfile({ name: 'atendente', description: 'Para atendimento'})
  const profileTwo = await saveOrUpdateProfile({ name: 'supervisor', description: 'Para supervisao'})

  console.log(profileOne)
  console.log(profileTwo)

  await addProfilesToUser(user.id, [profileOne, profileTwo])
}

execute()