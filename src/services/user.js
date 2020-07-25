import api from './api'


export const getUsers = () => {
  return api.get('users')
}

export const updateMyProfile = (name, email, password) => {
  return api.post('/update_my_profile', {
      name,
      email, 
      password
  })
}
