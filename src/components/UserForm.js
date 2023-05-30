import React, { useState } from "react"

function UserForm() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const submitHandler = e => {
    e.preventDefault()
    console.log(firstName, lastName)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default UserForm
