import { all, put, call, takeEvery } from 'redux-saga/effects'
import getMenuAdminData from 'services/menu_admin.service'
import getMenuProfessionalData from 'services/menu_professional.service'
import getMenuClientData from 'services/menu_client.service'
import actions from './actions'

export function* GET_DATA({ payload }) {
  const { type } = payload
  let menuData = []

  if (type === 'client') {
    menuData = yield call(getMenuClientData)
  } else if (type === 'professional') {
    menuData = yield call(getMenuProfessionalData)
  } else {
    menuData = yield call(getMenuAdminData)
  }

  yield put({
    type: 'menu/SET_STATE',
    payload: {
      menuData,
    },
  })
}

export default function* rootSaga() {
  yield all([
    takeEvery(actions.GET_DATA, GET_DATA),
  ])
}
