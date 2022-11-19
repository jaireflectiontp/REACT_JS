import React from 'react';
import '../../SCSS/HeaderCSS/button.scss';

const Button = (props) => {
  return (
    <>
      <button type='button' class={`btn btn-${props.variation}`}>{props.label}</button>
    </>
  )
}

export default Button
