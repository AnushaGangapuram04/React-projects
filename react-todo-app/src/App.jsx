import { useState } from 'react'
import './App.css'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList';

function App() {
  const [task, setTask] = useState(""); 
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const deleteTodo = (index) => {
    const updated = todos.filter((todo, i) => i !== index);
    setTodos(updated);
  };

  return (
    <>
      <h1>Todo Application</h1>
      <TodoInput task={task} setTask={setTask} addTodo={addTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
