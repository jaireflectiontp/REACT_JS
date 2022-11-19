import React from 'react'

const Input = (props) => {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} className="inpt" />
    </>
  )
}

export default Input
