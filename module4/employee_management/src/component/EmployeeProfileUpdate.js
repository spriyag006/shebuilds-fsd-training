import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function EmployeeProfileUpdate({ employees, updateEmployee }) {

  const { id } = useParams();

  const employee = employees.find(
    employee => employee.id.toString() === id
  );

  const navigate = useNavigate();

  const [name, setName] = useState(employee ? employee.name : "");
  const [email, setEmail] = useState(employee ? employee.email : "");
  const [phone, setPhone] = useState(employee ? employee.phone : "");
  const [department, setDepartment] = useState(
    employee ? employee.department : ""
  );
  const [designation, setDesignation] = useState(
    employee ? employee.designation : ""
  );

  if (!employee) {
    return <h2>Employee Not Found</h2>;
  }

  const handleSubmit = (event) => {

    event.preventDefault();

    const updatedEmployee = {
      id: employee.id,
      name: name,
      email: email,
      phone: phone,
      department: department,
      designation: designation
    };

    updateEmployee(updatedEmployee);

    navigate("/");
  };

  return (
    <div>

      <h1>Employee Management System</h1>

      <h2>Update Employee Profile</h2>

      <form onSubmit={handleSubmit}>

        <label>Employee Name</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <br /><br />

        <label>Email</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <br /><br />

        <label>Phone</label>
        <br />

        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />

        <br /><br />

        <label>Department</label>
        <br />

        <input
          type="text"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
        />

        <br /><br />

        <label>Designation</label>
        <br />

        <input
          type="text"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
        />

        <br /><br />

        <button type="submit">
          Update Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeProfileUpdate;