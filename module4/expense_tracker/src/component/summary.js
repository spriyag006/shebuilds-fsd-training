import { useNavigate } from 'react-router-dom';

function Summary({ expenses }) {

  const navigate = useNavigate();


  // Calculate total expense
  const totalExpense = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );


  // Number of expenses
  const totalTransactions = expenses.length;


  return (
    <div>

      <h1>Expense Tracker</h1>

      <h2>Summary</h2>


      <h3>
        Total Expenses
      </h3>

      <p>
        ₹{totalExpense}
      </p>


      <h3>
        Total Transactions
      </h3>

      <p>
        {totalTransactions}
      </p>


      <br />


      <button onClick={() => navigate("/")}>
        View Expense History
      </button>


      <br />
      <br />


      <button onClick={() => navigate("/addexpense")}>
        Add Expense
      </button>

    </div>
  );
}

export default Summary;