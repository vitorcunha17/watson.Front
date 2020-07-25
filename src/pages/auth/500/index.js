import React from 'react'
import { Helmet } from 'react-helmet'
import Error500 from 'components/cleanui/system/Errors/500'

const System500 = () => {
  return (
    <>
      <Helmet title="Erro 500" />
      <Error500 />
    </>
  )
}

export default System500
