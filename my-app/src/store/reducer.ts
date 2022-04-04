import Employee from '../model'
import { ADD_EMPLOYEE, DELETE_EMPLOYEE, EDIT_EMPLOYEE, FETCH, FETCH_EMPLOYEE, LOADING } from './action'

interface stateInterface {
  employees: Employee[],
  loading : boolean
}

const initialState:stateInterface = {
  employees: [],
  loading : false
}

export default (state = initialState, action: any) => {
  console.log(state)

  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading : true
      }

    case FETCH:
      console.log(state)
      return {
        ...state,
        employees: action.data.data,
        loading : false
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
        ...state,
        employees : copy
      }
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter((employee:any) => employee.id !== action.id )
      };
  }
  return state;
}



