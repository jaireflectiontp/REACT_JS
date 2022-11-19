import React from 'react';
import '../SCSS/mixin.scss';
import '../SCSS/HeaderCSS/header.scss';
import Left_Header from './Left-Head/Left_Header';
import Right_Header from './Right-Head/Right_Header';

const Header = () => {
  


  return (
    <>
      <header>
        <Left_Header/>
        <Right_Header />
      </header>
    </>
  )
}

export default Header
