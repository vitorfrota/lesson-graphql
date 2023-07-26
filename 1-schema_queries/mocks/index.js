const usersMock = [
  {
    id: 'id-1',
    name: 'John Doe',
    email: 'john@doe.com',
    age: 20,
    profile_id: 'id-1',
    status: 'ACTIVE'
  },
  {
    id: 'id-2',
    name: 'Anne Doe',
    email: 'anne2023@doe.com',
    age: 31,
    profile_id: 'id-2',
    status: 'BLOCKED'
  },
]

const profilesMock = [
  {
    id: 'id-1',
    name: 'Comum'
  },
  {
    id: 'id-2',
    name: 'Administrador'
  },
]

module.exports = { usersMock, profilesMock }