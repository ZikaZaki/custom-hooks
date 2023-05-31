import React, { useState, useRef } from "react"

function ParentContainer() {
  const [value, setValue] = useState("red")
  const inputRef = useRef()

  return (
    <div>ParentContainer</div>
  )
}

export default ParentContainer
