import { useNavigate } from 'react-router-dom';

function ExpenseList({ expenses, deleteExpense }) {

  const navigate = useNavigate();


  const showAddExpense = () => {

    navigate("/addexpense");

  };


  const showSummary = () => {

    navigate("/summary");

  };


  return (
    <div>

      <h1>Expense Tracker</h1>

      <h2>Expense History</h2>


      <table>

        <thead>

          <tr>

            <th>Expense</th>

            <th>Amount</th>

            <th>Category</th>

            <th>Action</th>

          </tr>

        </thead>


        <tbody>

          {expenses.map((expense) => (

            <tr key={expense.id}>

              <td>
                {expense.title}
              </td>

              <td>
                ₹{expense.amount}
              </td>

              <td>
                {expense.category}
              </td>

              <td>

                <button
                  onClick={() => deleteExpense(expense.id)}
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>


      <br />


      <button onClick={showAddExpense}>
        Add Expense
      </button>


      <br />
      <br />


      <button onClick={showSummary}>
        View Summary
      </button>

    </div>
  );
}

export default ExpenseList;