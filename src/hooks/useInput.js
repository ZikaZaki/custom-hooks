import { useState } from "react"

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)
  const reset = () => {
    setValue(initialValue)
  }
  const bind = {
    value, // shorthand syntax
    onChange: e => {
      setValue(e.target.value)
    }
  }

  return [value, bind, reset]
}

export default useInput
