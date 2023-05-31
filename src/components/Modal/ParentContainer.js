import React, { useRef } from "react"

function ParentContainer() {
  const modalRef = useRef()

  const handleOpenModal = () => {
    modalRef.current.openModal()
  }

  console.log("Parent Container Rendered")

  return (
    <div>
      <p>Parent Component</p>
    </div>
  )
}

export default ParentContainer
