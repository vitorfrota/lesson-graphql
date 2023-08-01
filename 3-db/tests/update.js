const db = require('../config/db')

const newUser = {
  name: 'Vitor',
  email: 'v@v.com',
  password: '123456'
}

async function update() {
  const { quantity } = await db('users').count('* as quantity').first()

  if(quantity == 0) {
    await db('users').insert(newUser)
  }

  const { id } = await db('users').select('id').first()

  await db('users').where({ id }).update({
    name: 'Vitor Frota'
  })

  return await db('users').where({ id })
}

update().then(r=> console.log(r)).catch(e=> console.log(e))