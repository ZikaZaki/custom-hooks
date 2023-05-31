import React, { useState, useRef } from "react"
import ConfirmationModal from "./ConfirmationModal"
// import CustomInput from "./CustomInput"

function ParentContainer() {
  const [open, setOpen] = useState(false)
  const modalRef = useRef()

  return (
    <>
      <button onClick={() => setOpen(true)}>Open</button>
      <button>Focus Close</button>
      <button>Focus Confirm</button>
      <button>Focus Deny</button>
      <ConfirmationModal
        ref={modalRef}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  )
}

export default ParentContainer
