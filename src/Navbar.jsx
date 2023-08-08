import React from 'react'
import "./nav.css"
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
      <div className="box">
        <div className="count-show">
          <h1>Count no. : {count}</h1>
        </div>
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default nav
