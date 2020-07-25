import React from 'react'
import { Helmet } from 'react-helmet'
import Error404 from 'components/cleanui/system/Errors/404'

const System404 = () => {
  return (
    <>
      <Helmet title="Erro 404" />
      <Error404 />
    </>
  )
}

export default System404
