import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addEmployee, deleteEmployee, fetchEmployee } from "../../store/action";
import './styles.css'

const Home: React.FC = () => {
  const stateData = useSelector((st: any) => st.employees)
  const loading = useSelector((st: any) => st.loading)

  const dispatch = useDispatch()
  console.log(stateData)
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(fetchEmployee())
  }, [])

  return (
    <div className="main">
      {loading ? <h1>Loading....</h1> : (
        <div className="sub-main">
          <div className="header">
            <h1>Employees List</h1>
            <button className="add" onClick={() => navigate('/add')}>Add Employee</button>
          </div>
          <div className="header-2">
            <table className="members">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {stateData.map(({ id, name, email, address }: any) => {

                  return (
                    <tr key={id}>
                      <td>{name}</td>
                      <td>{email}</td>
                      <td>{address}</td>
                      <td>
                        <span className="actions edit" onClick={() => navigate('/edit', {

                          state: {
                            id: id,
                            name: name,
                            email: email,
                            address: address
                          }
                        })}>Edit</span>
                        <span className="actions delete" onClick={() => dispatch(deleteEmployee(id))}>Delete</span>
                      </td>
                    </tr>
                  )
                })}

              </tbody>
            </table>
          </div>
        </div>
      )}
      
    </div>
  )
}

export default Home;