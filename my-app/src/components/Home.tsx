import axios from "axios";
import { useState, useEffect } from "react";
import './styles.css'

const Home: React.FC = () => {
  const [data, setData] = useState<any>([])
  useEffect(() => {
    axios.get('http://localhost:3004/employees')
      .then(response => setData(response.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="main">
      <div className="sub-main">
        <div className="header">
          <h1>Employees List</h1>
          <button className="add">Add Employee</button>
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

            {data.map((member: any) => {
              return (
                <tr key={member.id}>
                  <td>{member.name}</td>
                  <td>{member.email}</td>
                  <td>{member.address}</td>
                  <td>
                    <span className="actions edit">Edit</span>
                    <span className="actions delete">Delete</span>
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