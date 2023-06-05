import React, { useState, useTransition } from "react"
/**
 * useTransition hook is used to manage the state of a component that is changing frequently.
 * It allows us to defer the rendering of a component until the state is stable.
 * It takes two arguments:
 *  1. the state that is changing frequently and needs to be deferred.
 *  2. the config object that has a timeout property.
 * It returns an array with two elements:
 *  1. the state that is changing frequently.
 *  2. a function to set the state.
 * ------------------------------------------------------------------------------------------------
 * USE CASES:
 * 1. When we have a huge list of items and we want to render them on the screen.
 * 2. When we have a form with a lot of input fields and we want to render them on the screen.
 * ------------------------------------------------------------------------------------------------
 * In the following example, we have a huge list of items and we want to render them on the screen.
 * We have a text input field that is used to filter the list.
 * We are using the useTransition hook to defer the rendering of the list until the state is stable.
 * We are also using the useTransition hook to defer the rendering of the input field until the state is stable.
 * ------------------------------------------------------------------------------------------------
 * NOTE: In a class component, we can use the unstable_deferredUpdates method to defer the rendering of a component.
 * NOTE: In a class component, we can use the useDeferredValue method to defer the rendering of a component.
 * NOTE: In a functional component, we use the useTransition hook, on the other hand, in a class component,
 * we use the startTransition method.
 * ------------------------------------------------------------------------------------------------
 */

const LIST_LENGTH = 20000

function HugeList() {
  const [input, setInput] = useState("")
  const [list, setList] = useState([])
  
  const handleInputChange = (e) => {
    setInput(e.target.value)
    const newList = []
    for (let i = 0; i < LIST_LENGTH; i++) {
        newList.push(e.target.value)
    }
    setList(newList)
  }


  return (
    <div>
        <input type="text" value={input} onChange={handleInputChange} />
        {list && list.map((item, index) => {
            return <div key={index}>{item}</div>
        })}
    </div>
  )
}

export default HugeList
