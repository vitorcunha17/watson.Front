import api from './api'

export const getComments = () => {
  return api.get('/comment')
}

export const login = (email, password) => {
  return api.post('/oauth/token', {
    email,
    password
  })
}

export const registerProfessional = (values) => {
  return api.post('users', {
    name: values.name,
    email: values.email,
    password: values.password,
    type_document: values.type_document,
    document: values.document,
    phone: values.phone,
    profile: "professional",
    category_id: values.category_id,
    address: {
      zipcode: values.zipcode,
      street: values.street,
      number: values.number,
      complement: values.complement,
      district: values.district,
      city: values.city,
      state: values.state
    },
  })
}

export const forgotPassword = (email) => {
  return api.post('forgot-password', {
    email
  })
}

export const resetPassword = (data) => {
  return api.post('reset-password', {
    data
  })
}

export const myProfile = () => {
  return api.get('/profile')
}

export const getCategories = () => {
  return api.get('/category')
}