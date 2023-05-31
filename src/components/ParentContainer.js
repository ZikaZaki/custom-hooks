import React, { useState, useRef } from "react"
import CustomInput from "./CustomInput"

function ParentContainer() {
  const [value, setValue] = useState("red")
  const inputRef = useRef()

  return (
    <>
      <CustomInput
        ref={inputRef}
        value={value}
        onChange={e => setValue(e.target.value)} 
      />
      <br />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
      <button onClick={() => inputRef.current.alertHi()}>Alert</button>
    </>
  )
}

export default ParentContainer
