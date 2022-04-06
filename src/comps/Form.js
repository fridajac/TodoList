import { useState } from "react";
const TextInputField = ({ addTodos }) => {
  const [userInput, setUserInput] = useState("");

  const inputStyle = {
    width: "480px",
    padding: "10px",
    fontFamily: "Noto Serif",
    fontSize: "1rem",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!userInput) return;
    addTodos(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={userInput}
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        style={inputStyle}
        placeholder="Enter new task here"
      ></input>
    </form>
  );
};

export default TextInputField;
