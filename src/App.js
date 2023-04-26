import React, { useState } from 'react'
import "./App.css";


export default function App() {
  const [count, setCount] = useState(0);
  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }
  return (
    <div className='wrapper'>
      <div className='word'>Increment and Decrement</div>
      <div className='container'>
        <button onClick={decreaseHandler} className='design after'>
          -
        </button>

        <div className='content'>
          {count}
        </div>
        <button onClick={increaseHandler} className='design' >
          +
        </button>
      </div>
      <button onClick={resetHandler} className='restart'>
        Restart
      </button>

    </div>
  )
}
