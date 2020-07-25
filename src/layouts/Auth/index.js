import React from 'react'
import { Layout } from 'antd'
import { WatsonStyle } from './styles'

const AuthLayout = ({
  children,
}) => {

  return (
    <Layout style={{ background: '#f0f2f5' }}>
      <WatsonStyle>{children}</WatsonStyle>
    </Layout>
  )
}

export default AuthLayout
