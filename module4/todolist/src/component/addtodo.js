import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function AddTodo({ addTodo }) {

  const [task, setTask] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {

    event.preventDefault();

    const newTodo = {
      id: Date.now(),
      task: task,
      completed: false
    };

    addTodo(newTodo);

    navigate("/");
  };

  return (
    <div>

      <h1>To-Do List Application</h1>

      <h2>Add Todo</h2>

      <form onSubmit={handleSubmit}>

        <label>
          Task Name
        </label>

        <br />

        <input
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Enter your task"
          required
        />

        <br />
        <br />

        <button type="submit">
          Add Todo
        </button>

      </form>

    </div>
  );
}

export default AddTodo;