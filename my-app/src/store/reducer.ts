import Employee from '../model'
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, FETCH_EMPLOYEE } from './action'

interface stateInterface {
  employees: Employee[]
}

const initialState:stateInterface = {
  employees : []
}

export default (state = initialState, action:any) => {
  switch (action.type) {
    case FETCH_EMPLOYEE:
      return {
        ...state,
        employees : action.data
      }
    case ADD_EMPLOYEE:  
      return {
        ...state,
        employees : state.employees.concat(action.data)
      }
    case EDIT_EMPLOYEE:
      let copy = [...state.employees]
      copy.map((emp:any) => {
        if (emp.id === action.data.id) {
          emp.name = action.data.name
          emp.email = action.data.email
          emp.address = action.data.address
        }
      })
      
      return {
        employees : copy
      }
    case DELETE_EMPLOYEE:
      return {
        employees: state.employees.filter((employee:any) => employee.id !== action.id )
      };
  }
  return state;
}

