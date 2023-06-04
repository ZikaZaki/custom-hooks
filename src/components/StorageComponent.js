import React from "react"
import { useSessionStorage, useLocalStorage } from "../hooks/useStorage"

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "ZikaZaki")
  const [age, setAge, removeAge] = useLocalStorage("age", "24")

  return (
    <div>
        <div>name: {name} | age: {age}</div>
        <button onClick={() => setName("Zack")}>Set Name</button>
        <button onClick={() => setAge("28")}>Set Age</button>
        <button onClick={removeName}>Remove Name</button>
        <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}
