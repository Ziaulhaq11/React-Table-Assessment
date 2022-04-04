import axios from "axios"
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const FETCH_EMPLOYEE = "FETCH_EMPLOYEE"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"
export const FETCH = "FETCH"
export const EDIT_EMPLOYEE = "EDIT_EMPLOYEE"
export const LOADING = 'LOADING'


export const start = () => ({
  type : 'START'
})

export const add = (user: any) => ({
  type: 'ADD',
  user
})

export const edit = (user: any) => ({
  type: 'EDIT',
  user
})

export const delet = (id: any) => ({
  type: 'DELETE',
  id
})

export function* fetchEmployee () {
 
    try {
      yield put({type: LOADING, loading: true })
      const response: {} = yield call(axios, 'http://localhost:3004/employees');
      console.log(response)
      yield put({type : FETCH, data : response})
      console.log('action')
    } catch (err) {
      throw err;
    }
}


export function* addEmployee(action:any) {
  let {id,...user} = action.user
  console.log(user)
    try {

      const response: {} = yield call(axios.post, 'http://localhost:3004/employees',{
        ...user
      })
      yield put({type : ADD_EMPLOYEE, data : response})
    }
    catch (err) {
      throw err;
    }
}

export function* editEmployee(action: any) {
  let {id,...user} = action.user
    try {
      const response:{} = yield call(axios.patch, `http://localhost:3004/employees/${id}`, {
        ...user
      })
      yield put({type : EDIT_EMPLOYEE, data : response})
    } catch (err) {
      throw err;
    }
}

export function* deleteEmployee(action: any) {
  let id = action.id
    try {
      const response:{} = yield call(axios.delete, `http://localhost:3004/employees/${id}`)
      yield put({ type: DELETE_EMPLOYEE, id: id})
    }
    catch (err) {
      console.log(err)
      throw err;
    }
}

export function* watcherSaga() {
  yield takeLatest('START', fetchEmployee);
  yield takeLatest('ADD', addEmployee)
  yield takeLatest('EDIT', editEmployee)
  yield takeLatest('DELETE', deleteEmployee)
}
