import { useMemo, useDeferredValue, useEffect } from "react"
/**
 * useDeferredValue is a new React hook that allows you to defer the update of a value until the next render.
 * It accepts two arguments: the value to defer and an optional configuration object.
 * The configuration object has a timeout property that allows you to specify the maximum amount of time
 * React should wait before updating the deferred value.
 * USE CASES:
 */

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
