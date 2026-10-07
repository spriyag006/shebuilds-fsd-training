import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddEmployee({ addEmployee }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    const newEmployee = {
      id: Date.now(),
      name: name,
      email: email,
      phone: phone,
      department: department,
      designation: designation
    };

    addEmployee(newEmployee);

    navigate("/");
  };

  return (
    <div>

      <h1>Employee Management System</h1>

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        <label>Employee Name</label>
        <br />

        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <br /><br />

        <label>Email</label>
        <br />

        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <br /><br />

        <label>Phone</label>
        <br />

        <input
          type="text"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
        />

        <br /><br />

        <label>Department</label>
        <br />

        <input
          type="text"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          required
        />

        <br /><br />

        <label>Designation</label>
        <br />

        <input
          type="text"
          value={designation}
          onChange={(event) => setDesignation(event.target.value)}
          required
        />

        <br /><br />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default AddEmployee;