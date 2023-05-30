import React from "react"
import useInput from "../hooks/useInput"

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("")
  const [lastName, bindLastName, resetLastName] = useInput("")

  const submitHandler = e => {
    e.preventDefault()
    alert(`Hi, ${firstName} ${lastName}!`)
    resetFirstName()
    resetLastName()
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            {...bindFirstName}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            {...bindLastName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm
