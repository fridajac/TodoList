import "./App.css";
import List from "./comps/List";
import Title from "./comps/Title";
import Form from "./comps/Form";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodos = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <Title />
      <Form addTodos={addTodos} />
      <List todos={todos} />
    </div>
  );
}

export default App;
