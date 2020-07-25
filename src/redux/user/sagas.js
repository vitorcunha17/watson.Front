import { all, takeEvery, put, call, takeLatest } from 'redux-saga/effects'
import { notification } from 'antd'
import { history } from 'index'
import { login, forgotPassword, resetPassword, myProfile } from 'services/auth'
import actions from './actions'

export function* LOGIN({ payload }) {
  const { email, password } = payload
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  try {
    const response = yield call(login, email, password)
    if (response.status === 200) {
      yield history.push('/dashboard/')
      notification.success({ message: 'Login feito com sucesso!' })
      yield put({
        type: 'menu/GET_DATA',
        payload: {
          type: response.data.user.roles[0].slug
        },
      })
      yield localStorage.setItem('token', response.data.token)
      yield put({
        type: 'user/SET_STATE',
        payload: {
          authorized: true,
          email: response.data.user.email,
          role: response.data.user.roles[0].slug
        }
      })
    }
  } catch (e) {
    notification.error({ message: e.message })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOAD_CURRENT_ACCOUNT() {
  try {
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: true
      },
    })
    const token = yield localStorage.getItem('token')
    const response = yield call(myProfile)

    yield put({
      type: 'user/SET_STATE',
      payload: {
        authorized: !!token,
        email: response.data.email,
        id: response.data.secure_id,
        loading: false
      },
    })
    const userType = response.data.roles[0]
    yield put({
      type: 'menu/GET_DATA',
      payload: {
        type: userType
      },
    })
  } catch (e) {
    yield localStorage.removeItem('token')
    yield put({
      type: 'user/SET_STATE',
      payload: {
        loading: false
      },
    })
  }
}

export function* FORGET_PASSWORD({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  try {
    const response = yield call(forgotPassword, payload.email)
    if (response.status === 200) {
      notification.success({ message: 'Acesse o link enviado em seu email para alteção de senha!' })
      yield history.push('/auth/login')
    }
  } catch (e) {
    notification.error({ message: e.message })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* RESET_PASSWORD({ payload }) {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: true,
    },
  })
  try {
    const response = yield call(resetPassword, payload)
    if (response.status === 200) {
      notification.success({ message: 'Senha atualizada com sucesso!' })
    }
  } catch (e) {
    notification.error({ message: e.message })
  }
  yield put({
    type: 'user/SET_STATE',
    payload: {
      loading: false,
    },
  })
}

export function* LOGOUT() {
  yield put({
    type: 'user/SET_STATE',
    payload: {
      id: '',
      name: '',
      role: '',
      email: '',
      avatar: '',
      authorized: false,
      loading: false,
    },
  })
  localStorage.clear()
}

export default function* rootSaga() {
  yield all([
    takeLatest(actions.LOGIN, LOGIN),
    takeLatest(actions.FORGET_PASSWORD, FORGET_PASSWORD),
    takeLatest(actions.LOAD_CURRENT_ACCOUNT, LOAD_CURRENT_ACCOUNT),
    takeEvery(actions.LOGOUT, LOGOUT),
    LOAD_CURRENT_ACCOUNT(), // run once on app load to check user auth
  ])
}
