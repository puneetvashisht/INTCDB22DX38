import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import ViewCounter from "./ViewCounter";

function App() {
  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      {show && <Counter counter={counter} />}
      <button onClick={() => setShow(!show)}> {show ? "Hide" : "Show"} </button>
      <button onClick={incrementCounter}> Increment </button>
    </div>
  );
}

export default App;
