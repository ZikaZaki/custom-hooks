import React, { useState } from "react"

function CounterTwo() {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(prevCount => prevCount + 1)
  }
  const decrement = () => {
    setCount(prevCount => prevCount - 1)
  }
  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h2>Count Two: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default CounterTwo
