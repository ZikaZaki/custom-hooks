import { useMemo, useDeferredValue } from "react"

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

  return list
}

export default List
