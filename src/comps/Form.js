import { useState } from "react";
const TextInputField = () => {
  const [userInput, setUserInput] = useState("");

  const submitValue = () => {
    const inputText = userInput;
    alert(inputText);
  };

  const inputStyle = {
    width: "480px",
    padding: "10px",
    fontFamily: "Noto Serif",
    fontSize: "1.5rem",
    textTransform: "uppercase",
  };

  return (
    <form onSubmit={submitValue}>
      <input
        type="text"
        onChange={(e) => setUserInput(e.target.value)}
        style={inputStyle}
      ></input>
    </form>
  );
};

export default TextInputField;
