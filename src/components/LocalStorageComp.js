import { useLocalStorage } from "../hooks/useStorage"

export default function LocalStorageComp() {
  const [firstName, setFirstName, removeFirstName] = useLocalStorage("firstName", function() {return "ZikaZaki"})
  const [lastName, setLastName, removeLastName] = useLocalStorage("lastName", "Ali")

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
