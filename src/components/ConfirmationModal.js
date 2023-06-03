import React, { useImperativeHandle, useRef } from "react"
/**
 * useImperativeHandle Hook allows you to expose certain functions to parent components
 * ref is passed as second argument to forwardRef function (see below) and is used to access the functions
 * USE CASES:
 * -  focus on a certain element
 * -  trigger animations
 * -  integrate with third-party DOM libraries
 * -  expose imperative API to parent components
 */

function ConfirmationModal({ isOpen, onClose }, ref) {
  const closeRef = useRef()
  const confirmRef = useRef()
  const denyRef = useRef()

  useImperativeHandle(ref, () => {
    return {
      focusCloseBtn: () => closeRef.current.focus(),
      focusConfirmBtn: () => confirmRef.current.focus(),
      focusDenyBtn: () => denyRef.current.focus(),
    }
  })

  if(!isOpen) return null

  return (
    <div className="modal" ref={ref}>
      <button className="close-btn" ref={closeRef} onClick={onClose}>
        &times;
      </button>
      <div className="modal-header">
        <h1>Title</h1>
      </div>
      <div className="modal-body">Do you confirm?</div>
      <div className="modal-footer">
        <button className="confirm-btn" ref={confirmRef} onClick={onClose}>Yes</button>
        <button className="deny-btn" ref={denyRef} onClick={onClose}>No</button>
      </div>
    </div>
  )
}

export default React.forwardRef(ConfirmationModal)
