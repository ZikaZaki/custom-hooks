import React, { forwardRef, useImperativeHandle, useState } from "react"
/**
----------------------------------------------------------------------------------------------------------------
* useImperativeHandle is a React hook that allows you to expose certain functions to parent components.
*  It accepts two arguments: a reference to the component, and a function that returns an object containing 
*  the functions that you want to expose. In this case, we want to expose the openModal function, so we
*  pass a reference to the function to the second argument.
*  The first argument to useImperativeHandle is a reference to the component. In this case, we want to
*  pass a reference to the Modal component.
*  The second argument is a function that returns an object containing the functions that we want to expose.
----------------------------------------------------------------------------------------------------------------
 */
function Modal(props, ref) {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true)
  }))

  console.log("Modal Rendered")

  if(!modalState) return null

  return (
    <div className="modal">
        <p>This is my modal!</p>
        <button onClick={() => setModalState(false)}>Close</button>
    </div>
  )
}

export default forwardRef(Modal)
