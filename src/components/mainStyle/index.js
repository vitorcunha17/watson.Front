import styled, { css } from 'styled-components'
import { Button, Input } from 'antd'

export const ButtonDefault = styled(Button)`
  ${props =>
    props.green &&
    css`
    border-color: #8EC643 !important;
    background-color: #8EC643 !important;
    color: #fff !important;
  `}
`

export const InputDefault = styled(Input)`
  background-color: #6eaed8 !important;
  border: 0.5px solid #fff !important;
  border-radius: 5px !important;
`

export const Spans = styled.span`
  color: #fff;
  font-size: 17px;
`

export const Logo = styled.div`
  text-align: center;
  ${props =>
    props.logoLogin &&
    css`
    margin-top: 25%;
    margin-bottom: 15%;
  `}
  ${props =>
    props.logoRecoverPass &&
    css`
    margin-top: 25%;
    margin-bottom: 10%;
  `}
  ${props =>
    props.logoRegister &&
    css`
    margin-top: 7%;
    margin-bottom: 5%;
  `}
`