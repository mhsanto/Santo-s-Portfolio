import React, { useState } from "react";
import styled from "styled-components";
import "./eyeMove.js";
import { useLocomotiveScroll } from "react-locomotive-scroll";

import { motion } from "framer-motion";
const NavContainer = styled(motion.div)`
  position: absolute;
  top: ${(props) => (props.click ? "0" : `-${props.theme.navHeight}`)};
  width: 100vw;
  z-index: 6;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 40em) {
    top: ${(props) => (props.click ? "0" : `calc(-50vh - 4rem)`)};
  }
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
  @media (max-width: 40em) {
    flex-direction: column;
    padding: 2rem 0;
    height: 50vh;
  }
`;
const ListItem = styled(motion.li)`
  font-size: 1.2rem;
  color: black;
  font-weight: 700;
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
  padding: 0.4rem 5rem;
  @media (max-width: 40em) {
    width: 3rem;
    height: 2.2rem;
    font-size: 1.2rem;
    color: black;
    font-weight: 700;
  }
`;
const MenuBtns = styled(motion.li)`
  color: ${(props) => props.theme.bodyRgba};
  font-size: 1.2rem;
  cursor: pointer;
  text-transform: uppercase;
`;
const Navbar = () => {
  const [click, setClick] = useState(false);

  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    setClick(!click);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.2, 0.0, 0.35, 1.0],
    });
  };
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
          <span className="ball"></span>
          MENU
        </ListItem>
        <MenuBtns
          onClick={() => handleScroll(".about")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          About Me
        </MenuBtns>
        <MenuBtns
          onClick={() => handleScroll("#projects")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Projects
        </MenuBtns>
        <MenuBtns
          onClick={() => handleScroll("#extra")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Skills
        </MenuBtns>
        <MenuBtns
          onClick={() => handleScroll("#skills")}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9, y: 0 }}
        >
          Extra
        </MenuBtns>
        <MenuBtns
          onClick={() => handleScroll("#footer")}
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
