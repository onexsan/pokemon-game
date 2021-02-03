import React from 'react';
import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

const MenuHeader = () => {

  const [isActive, setActive] = useState(null);

  const handleActive = () => {
    setActive(prevState => !prevState);
  }

  return (
    <>
      <Menu isOpen={isActive} ></Menu>
      <Navbar isOpen={isActive} onChangeActive={handleActive}></Navbar>
    </>
  )
}

export default MenuHeader;