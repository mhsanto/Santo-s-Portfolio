import React, { useState } from "react";
import styled from "styled-components";
import "./eyeMove.js";
import { motion } from "framer-motion";
const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  width: 100vw;
  z-index: 6;

  display: flex;
  justify-content: center;
  align-items: center;
`;
const MenuItems = styled(motion.ul)`
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
const ListItem = styled(motion.li)`
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
  padding: 0.1rem 5rem;
`;
const MenuBtns = styled(motion.li)`
  color: ${(props) => props.theme.bodyRgba};
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
`;
const Navbar = () => {
  const [click, setClick] = useState(false);
  return (
    <NavContainer
      click={click}
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <MenuItems
        drag="y"
        dragConstraints={{ top: 0, bottom: 70 }}
        dragElastic={0.05}
        dragSnapToOrigin
      >
        <ListItem className="eye" onClick={() => setClick(!click)}>
          <span class="ball"></span>
          Pull
        </ListItem>
        <MenuBtns
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Home
        </MenuBtns>
        <MenuBtns
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About Me
        </MenuBtns>
        <MenuBtns
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Projects
        </MenuBtns>
        <MenuBtns
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Contact Me
        </MenuBtns>
      </MenuItems>
    </NavContainer>
  );
};

export default Navbar;
