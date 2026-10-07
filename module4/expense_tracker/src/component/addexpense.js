import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddExpense({ addExpense }) {

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();


  const handleSubmit = (event) => {

    event.preventDefault();


    const newExpense = {

      id: Date.now(),

      title: title,

      amount: Number(amount),

      category: category

    };


    addExpense(newExpense);


    // Clear the form
    setTitle("");
    setAmount("");
    setCategory("");


    // Go to Expense List
    navigate("/");

  };


  return (
    <div>

      <h1>Expense Tracker</h1>

      <h2>Add Expense</h2>


      <form onSubmit={handleSubmit}>

        {/* Expense Name */}

        <label>
          Expense Name
        </label>

        <br />

        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter expense name"
          required
        />

        <br />
        <br />


        {/* Amount */}

        <label>
          Amount
        </label>

        <br />

        <input
          type="number"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          placeholder="Enter amount"
          required
        />

        <br />
        <br />


        {/* Category */}

        <label>
          Category
        </label>

        <br />

        <select
          value={category}
          onChange={(event) => setCategory(event.target.value)}
          required
        >

          <option value="">
            Select Category
          </option>

          <option value="Food">
            Food
          </option>

          <option value="Travel">
            Travel
          </option>

          <option value="Shopping">
            Shopping
          </option>

          <option value="Education">
            Education
          </option>

          <option value="Bills">
            Bills
          </option>

          <option value="Other">
            Other
          </option>

        </select>

        <br />
        <br />


        <button type="submit">
          Add Expense
        </button>

      </form>


      <br />

      <button onClick={() => navigate("/")}>
        View Expenses
      </button>


      <br />
      <br />

      <button onClick={() => navigate("/summary")}>
        View Summary
      </button>

    </div>
  );
}

export default AddExpense;