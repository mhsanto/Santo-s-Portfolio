import React, { useState } from "react";
import styled from "styled-components";
const NavContainer = styled.div`
  position: absolute;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  width: 100vw;
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuItems = styled.ul`
  position: relative;
  list-style: none;
  height: ${(props) => props.theme.navHeight};
  background-color: ${(props) => props.theme.body};
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  padding: 0 10rem;
  font-size: 1.4rem;
`;
const ListItem = styled.li`
  font-size: 1.7rem;
  background-color: rgb(155, 155, 155);
  list-style: none;
  color: ${(props) => props.theme.fontmd};
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 75% 100%, 25% 100%);
  padding: 0 5rem;
`;
const MenuBtns = styled.li`
  color: ${(props) => props.theme.bodyRgba};
`;
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer click={click}>
      <MenuItems>
        <ListItem onClick={() => setClick(!click)}>Menu</ListItem>
        <MenuBtns>Home</MenuBtns>
        <MenuBtns>Home</MenuBtns>
        <MenuBtns>Home</MenuBtns>
        <MenuBtns>Home</MenuBtns>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
