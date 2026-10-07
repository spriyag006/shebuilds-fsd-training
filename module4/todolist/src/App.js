import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoList from './component/todo';
import AddTodo from './component/addtodo';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    { id: 1, task: "Learn React", completed: false },
    { id: 2, task: "Practice JavaScript", completed: true }
  ]);

  
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  
  const toggleTodo = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id
        ? { ...todo, completed: !todo.completed }
        : todo
    );

    setTodos(updatedTodos);
  };

  return (
    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route
            path="/"
            element={
              <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
              />
            }
          />

          <Route
            path="/addtodo"
            element={<AddTodo addTodo={addTodo} />}
          />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;