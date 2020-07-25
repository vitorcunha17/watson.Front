import api from './api'

export const getComments = () => {
  return api.get('/comment')
}

export const saveComments = (value) => {
  return api.post("/comment", {
      comment: value
  })
}