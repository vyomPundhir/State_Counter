import React, {useState} from "react";
import "./App.css";
// Never upadte any variable from the state directly.
function App(){

  const [count, setCount] = useState(0);
  return(
    <div>
      <header>
        <h1>Counter app using State/hooks.</h1>
      </header>
      <h2>Current value of count is {count}</h2>
      <button onClick={() => setCount(0)}>Reset Counter</button>
      <button onClick={() => setCount(count+1)}>Increase Counter</button>
      <button onClick={() => setCount(count-1)}>Decrease Counter</button>
    </div>
  )
}

export default App;

// (count >= 10 ? "" : setCount(count+1))
// (count <= 0 ? "" : setCount(count-1))