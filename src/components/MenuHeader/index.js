import React from 'react';
import { useState } from 'react';
import Menu from '../Menu';
import Navbar from '../Navbar';

const MenuHeader = ({ bgActive }) => {

  const [isActive, setActive] = useState(null);

  const handleActive = () => {
    setActive(prevState => !prevState);
  }

  return (
    <>
      <Menu isOpen={isActive} onChangeActive={handleActive}></Menu>
      <Navbar isOpen={isActive} bgActive={bgActive} onChangeActive={handleActive}></Navbar>
    </>
  )
}

export default MenuHeader;