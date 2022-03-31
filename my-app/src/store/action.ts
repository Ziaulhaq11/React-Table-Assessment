import axios from "axios"
import { response } from "express"
export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const FETCH_EMPLOYEE = "FETCH_EMPLOYEE"


export const fetchEmployee = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get('http://localhost:3004/employees')
      dispatch({type : FETCH_EMPLOYEE, data : response.data})
    } catch(err) {
      throw err;
    }
    
  }
}

export const addEmployee = () => {
  return async (dispatch: any) => {
    try {
      let body = {
        "name": "alj",
        "email": "alj@email.com",
        "address": "house no ;"
      }
      const response = await axios.post('http://localhost:3004/employees',{
        ...body
      })
      console.log(response)
      dispatch({type : ADD_EMPLOYEE, data : response.data})
    }
    catch (err) {
      throw err;
    }
  }
}