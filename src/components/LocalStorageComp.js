import { useState } from "react"
import { useLocalStorage } from "../hooks/useStorage"

export default function LocalStorageComp() {
  const [firstName, setFirstName] = useLocalStorage("firstName", "ZikaZaki")
  const [lastName, setLastName] = useState("Ali")

  return (
    <div>
        First Name:{" "}
        <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <br />
        Last Name:{" "}
        <input type="text" value={lastName} onChange={e => setLastName(e.target.value)} />
    </div>
  )
}
