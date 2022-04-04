const TextInputField = () => {
  const inputStyle = {
    width: "480px",
    padding: "10px",
    fontFamily: "Noto Serif",
    fontSize: "1.5rem",
  };
  const handleSubmit = (e) => {
    alert("Submitted: " + e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" style={inputStyle}></input>
    </form>
  );
};

export default TextInputField;
