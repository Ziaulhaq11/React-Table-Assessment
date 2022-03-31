import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee, deleteEmployee, fetchEmployee } from "../../store/action";
import './styles.css'

const Home: React.FC = () => {
  const stateData = useSelector((st: any) => st.employees)
  const dispatch = useDispatch()
  console.log(stateData)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchEmployee())
  }, [])

  return (
    <div className="main">
      <div className="sub-main">
        <div className="header">
          <h1>Employees List</h1>
          <button className="add" onClick={() => navigate('/add')}>Add Employee</button>
        </div>
      <div className="header-2">
        <table id="members">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stateData.map((member: any) => {
              return (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.address}</td>
                  <td>
                    <span className="actions edit" onClick={() => navigate('/edit', {
                      state: {
                        id: member.id,
                        name: member.name,
                        email: member.email,
                        address : member.address
                      }
                    })}>Edit</span>
                    <span className="actions delete" onClick={() => dispatch(deleteEmployee(member.id))}>Delete</span>
                  </td>
                </tr>
              )
            })}

          </tbody>
        </table>
        </div>
        </div>
    </div>
  )
}

export default Home;