import { useMemo, useDeferredValue, useEffect } from "react"

function List({ input }) {
  const LIST_LENGTH = 20000
  const deferredInput = useDeferredValue(input)
  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < LIST_LENGTH; i++) {
      l.push(<div key={i}>{deferredInput}</div>)
    }
    return l
  }, [deferredInput])

  useEffect(() => {
    console.log(`Input: ${input}\nDeferredInput: ${deferredInput}`)
  }, [input, deferredInput])

  return list
}

export default List
