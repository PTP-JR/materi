import { useState } from "react";

function Counter() {
  // dari pada buat yg ini
  // let count = 0
  
  // mending seperti ini
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <h3 style={{display: "inline"}}>{count}</h3>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default Counter