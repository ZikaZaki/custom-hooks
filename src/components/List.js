import { useMemo } from "react"

function List({ input }) {
  const LIST_LENGTH = 20000
  const list = useMemo(() => {
    const l = []
    for (let i = 0; i < LIST_LENGTH; i++) {
      l.push(<div key={i}>{input}</div>)
    }
    return l
  }, [input])

  return list
}

export default List
