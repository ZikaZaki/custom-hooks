import { useLocalStorage } from "../hooks/useStorage"

export default function LocalStorageComp() {
  const [name, setName, removeName] = useSessionStorage("name", function() {return "Zack Ali"})
  const [age, setAge, removeAge] = useLocalStorage("age", "24")

  return (
    <div>
        <div>name: {name} - age: {age}</div>
        <button onClick={() => setName("Zack")}>Set Name</button>
        <button onClick={removeName}>Remove Name</button>
        <button onClick={() => setAge("28")}>Set Age</button>
        <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}
