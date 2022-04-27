import logo from "./logo.svg";
import "./App.css";
import DecklistComp from "./DecklistComp";
import TestJSONParser from "./TestJSONParser";
function App() {
  return (
    <div className="App">
      <TestJSONParser file={"./test2.json"} />
    </div>
  );
}

export default App;
