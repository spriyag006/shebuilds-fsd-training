import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmployeeSearch({ employees }) {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>

      <h1>Employee Management System</h1>

      <h2>Search Employee</h2>

      <input
        type="text"
        placeholder="Enter employee name"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      <br /><br />

      <table border="1">

        <thead>

          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
          </tr>

        </thead>

        <tbody>

          {filteredEmployees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.department}</td>
              <td>{employee.designation}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <button onClick={() => navigate("/")}>
        Back to Employee List
      </button>

    </div>
  );
}

export default EmployeeSearch;