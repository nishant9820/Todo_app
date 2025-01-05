import { useState } from "react";
import "./App.css";

function App() {
  // State for new todo (string)
  const [newTodo, setNewTodo] = useState<string>("");

  // State for todos (array of strings)
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear input after adding
    }
  };

  const removeTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>To-Do App</h1>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new todo"
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <div className="todo-list">
        {todos.length === 0 ? (
          <p>No todos yet</p>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                {todo}
                <button onClick={() => removeTodo(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
