import axios from "axios"
import { response } from "express"

export const ADD_EMPLOYEE = "ADD_EMPLOYEE"
export const FETCH_EMPLOYEE = "FETCH_EMPLOYEE"
export const DELETE_EMPLOYEE = "DELETE_EMPLOYEE"

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

export const addEmployee = (name: string, email: string, address:string) => {
  return async (dispatch: any) => {
    try {
      let body = {
        name: name,
        email: email,
        address : address
      }
      const response = await axios.post('http://localhost:3004/employees',{
        ...body
      })
      dispatch({type : ADD_EMPLOYEE, data : response.data})
    }
    catch (err) {
      throw err;
    }
  }
}

export const deleteEmployee = (id:number) => {
  return async (dispatch: any) => {
    try {
      const response = await axios.delete(`http://localhost:3004/employees/${id}`)
      dispatch({ type: DELETE_EMPLOYEE, id: id})
    }
    catch (err) {
      console.log(err)
      throw err;
    }
  }
}