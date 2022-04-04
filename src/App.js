import "./App.css";
import List from "./comps/List";
import Title from "./comps/Title";
import TextInputField from "./comps/TextInputField";

function App() {
  return (
    <div className="App">
      <Title />
      <TextInputField />
      <List name="Frida" />
    </div>
  );
}

export default App;
