import { useLocation } from "react-router-dom"
import EmployeeForm from "../../components/EmployeeForm"
import '../../components/styles.css'

const EditEmployee:React.FC = () => {
  const employee:any = useLocation().state
  return (
      <div className="form-container">
      <h1>Edit the Employee</h1>
        <EmployeeForm id={employee.id} name={employee.name} email={employee.email} address={employee.address} />
      </div>
  )
}


export default EditEmployee