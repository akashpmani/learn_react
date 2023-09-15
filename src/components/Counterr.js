import React, { useState } from 'react'

export default function Counterr() {
    const [count,setCount] = useState(() => {
        return 10;
    })
    function decrementCount(){
        setCount(preCount => Math.max(0,preCount-1))
    }
    function incrementCount(){
        setCount(preCount => Math.min(20,preCount+1))
    }
  return (
    <div>
       <div>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </div>
    </div>
  )
}
