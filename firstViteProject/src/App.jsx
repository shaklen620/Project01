import { useState } from 'react';

import './App.css';

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20){
      setCounter(counter + 1);
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1);
    }
  }
  return (
    <>
      <h1>My First Vite App</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={addValue}
      >Update count value</button>

      <button onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
