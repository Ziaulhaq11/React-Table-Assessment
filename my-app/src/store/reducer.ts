import Employee from '../model'
import { ADD_EMPLOYEE, FETCH_EMPLOYEE } from './action'

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
  }
  return state;
}

