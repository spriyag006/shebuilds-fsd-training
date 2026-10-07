import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import EmployeeProfileUpdate from './components/EmployeeProfileUpdate';
import EmployeeSearch from './components/EmployeeSearch';
import { useState } from "react";

function App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Arun",
      email: "arun@gmail.com",
      phone: "9876543210",
      department: "IT",
      designation: "Developer"
    },
    {
      id: 2,
      name: "Priya",
      email: "priya@gmail.com",
      phone: "9876543211",
      department: "HR",
      designation: "HR Executive"
    }
  ]);

  const addEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(employee => employee.id !== id)
    );
  };

  const updateEmployee = (updatedEmployee) => {
    setEmployees(
      employees.map(employee =>
        employee.id === updatedEmployee.id
          ? updatedEmployee
          : employee
      )
    );
  };

  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={
              <EmployeeList
                employees={employees}
                deleteEmployee={deleteEmployee}
              />
            }
          />

          <Route
            path="/addemployee"
            element={
              <AddEmployee
                addEmployee={addEmployee}
              />
            }
          />

          <Route
            path="/updateemployee/:id"
            element={
              <EmployeeProfileUpdate
                employees={employees}
                updateEmployee={updateEmployee}
              />
            }
          />

          <Route
            path="/search"
            element={
              <EmployeeSearch
                employees={employees}
              />
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;