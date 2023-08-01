const db = require('../config/db')

db('users')
.where({ id: 1 })
.delete()
.then(r=> console.log(r))
.finally(()=> db.destroy())