import "./App.css";
import { useState } from "react";
import List from "./comps/List";
import Title from "./comps/Title";
import Form from "./comps/Form";

function App() {
  //const [toDoList, setToDoList] = useState("");
  const toDoList = ["Eat", "Drink", "Sleep"];

  return (
    <div className="App">
      <Title />
      <Form />
      <List toDoList={toDoList} />
    </div>
  );
}

export default App;
