import React, { useRef } from "react"
import Modal from "./Modal"

function ParentContainer() {
  const modalRef = useRef()

  const handleOpenModal = () => {
    modalRef.current.openModal()
  }

  console.log("Parent Container Rendered")

  return (
    <div>
      <p>Parent Component</p>
      <Modal ref={modalRef} />
      <button onClick={handleOpenModal}>Open</button>
    </div>
  )
}

export default ParentContainer
