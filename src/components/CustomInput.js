import React, { useImperativeHandle } from "react"

function CustomInput({ style, ...props }, ref) {
  useImperativeHandle(ref, () => {
    console.log("from useImperativeHandle", ref)
    return { alertHi: () => alert("Hi!") }
  }, [])

  return (
    <input
    //   ref={ref} <-- no need for ref anymore when using useImperativeHandle hook
      {...props}
      style={{
        border: "none",
        backgroundColor: "lightpink",
        padding: ".25em",
        borderBottom: ".1em solid black",
        borderTopRightRadius: ".25em",
        borderTopLeftRadius: ".25em",
        ...style,
      }}
    />
  )
}

export default React.forwardRef(CustomInput)
