import React, { useState } from "react"
import useLogger from "../hooks/useLogger"
/**
 * useDebugValue Hook is 
 */
function Test() {
  const [name, setName] = useState("")
  useLogger(name)

  return (
    <div>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)} 
        />
    </div>
  )
}

export default Test
