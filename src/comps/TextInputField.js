import { useState } from "react";
const TextInputField = () => {
  const [text, setText] = useState("");

  const submitValue = () => {
    const inputText = text;
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
        onChange={(e) => setText(e.target.value)}
        style={inputStyle}
      ></input>
    </form>
  );
};

export default TextInputField;
