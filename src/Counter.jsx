import React from 'react'
import "./counter.css"
import { useState } from 'react'

const nav = () => {
  const [count, setCount] = useState(0);

  function plus(){
    setCount(count+1);
  }

  function minus(){
    setCount(count-1);
  }

  function reset(){
    setCount(0)
  }

  return (
    <div className='container'>
      <h1>My Counter App</h1>
      <div className="box">
        <div className="count-show">
          <h1 className='display'>Count no. : {count}</h1>
        </div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default nav
