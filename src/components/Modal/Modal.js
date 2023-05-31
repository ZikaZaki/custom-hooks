import React, { forwardRef, useImperativeHandle, useState } from "react"

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
