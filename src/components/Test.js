import React, { useState } from "react"
import useLogger from "../hooks/useLogger"
/**
 * ----------------------------------------------------------------------------------
 * useDebugValue Hook is used to display a label for custom hooks in React DevTools.
 * USE CASES:
 * - Displaying a label for a custom hook
 * - Displaying a label for a custom hook with a custom value
 * - Displaying a label for a custom hook with a custom value and a custom formatter
 * ----------------------------------------------------------------------------------
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
