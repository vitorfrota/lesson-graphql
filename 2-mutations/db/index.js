let id = 1

const generateId = () => {
  return id++
}

const users = [
  {
    id: generateId(),
    name: 'John Doe',
    email: 'john@doe.com',
    age: 20,
    profile_id: 'id-1',
    status: 'ACTIVE'
  },
  {
    id: generateId(),
    name: 'Anne Doe',
    email: 'anne2023@doe.com',
    age: 31,
    profile_id: 'id-2',
    status: 'BLOCKED'
  },
]

const profiles = [
  {
    id: 'id-1',
    name: 'Comum'
  },
  {
    id: 'id-2',
    name: 'Administrador'
  },
]

module.exports = { users, profiles, generateId }