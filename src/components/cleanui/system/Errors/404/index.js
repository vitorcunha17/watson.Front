import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div className="container pl-5 pr-5 pt-5 pb-5 mb-auto text-dark font-size-32">
      <div className="font-weight-bold mb-3">Página não encontrada</div>
      <div className="text-gray-6 font-size-24">
        Essa página está depreciada, apagada ou não existe.
      </div>
      <div className="font-weight-bold font-size-70 mb-1">404 —</div>
      <Link to="/" className="btn btn-outline-primary width-100">
        Voltar
      </Link>
    </div>
  )
}

export default Error404
