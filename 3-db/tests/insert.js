const db = require('../config/db')

const newProfile = {
  name: `root-${Math.random()}`,
  description: 'Super user'
}

db('profiles').insert(newProfile)
.then(response=> console.log(response))
.catch(err => console.log(err))