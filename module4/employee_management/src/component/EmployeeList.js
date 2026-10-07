import { useNavigate } from 'react-router-dom';

function EmployeeList({ employees, deleteEmployee }) {

  const navigate = useNavigate();

  const showAddEmployee = () => {
    navigate("/addemployee");
  };

  const showSearch = () => {
    navigate("/search");
  };

  const updateEmployee = (id) => {
    navigate(`/updateemployee/${id}`);
  };

  return (
    <div>

      <h1>Employee Management System</h1>

      <h2>Employee List</h2>

      <table border="1">

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((employee) => (

            <tr key={employee.id}>

              <td>{employee.name}</td>

              <td>{employee.email}</td>

              <td>{employee.phone}</td>

              <td>{employee.department}</td>

              <td>{employee.designation}</td>

              <td>

                <button
                  onClick={() => updateEmployee(employee.id)}
                >
                  Update
                </button>

                <button
                  onClick={() => deleteEmployee(employee.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

      <br />

      <button onClick={showAddEmployee}>
        Add Employee
      </button>

      <button onClick={showSearch}>
        Search Employee
      </button>

    </div>
  );
}

export default EmployeeList;