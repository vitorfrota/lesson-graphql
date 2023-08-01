const db = require('../config/db')

db('profiles')
.select('id', 'name')
.limit(1)
.then(response=> console.log(response))
.catch(err => console.log(err))
.finally(()=> db.destroy())