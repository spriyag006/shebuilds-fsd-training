import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Summary from './component/summary';
import ExpenseList from './component/expenselist';
import AddExpense from './component/addexpense';

function App() {

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Food",
      amount: 250,
      category: "Food"
    },
    {
      id: 2,
      title: "Bus Ticket",
      amount: 100,
      category: "Travel"
    }
  ]);


  // Add Expense
  const addExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };


  // Delete Expense
  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      expense => expense.id !== id
    );

    setExpenses(updatedExpenses);
  };


  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          {/* Expense List Page */}
          <Route
            path="/"
            element={
              <ExpenseList
                expenses={expenses}
                deleteExpense={deleteExpense}
              />
            }
          />


          {/* Add Expense Page */}
          <Route
            path="/addexpense"
            element={
              <AddExpense
                addExpense={addExpense}
              />
            }
          />


          {/* Summary Page */}
          <Route
            path="/summary"
            element={
              <Summary
                expenses={expenses}
              />
            }
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;