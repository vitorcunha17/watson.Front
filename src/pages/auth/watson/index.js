import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import Watson from 'components/cleanui/system/Auth/Watson'

const SystemWatson = () => {
  useEffect(() => {
    localStorage.removeItem('token')
  })
  return (
    <>
      <Helmet title="Watson" />
      <Watson />
    </>
  )
}

export default SystemWatson
