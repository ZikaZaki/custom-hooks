import React, { useState } from "react"

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
