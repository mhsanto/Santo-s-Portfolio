import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 2rem;
  width: 100%;
  z-index: 5;
  color: white;
  a {
    display: flex;
    align-items: flex-end;
  }
`;
const Title = styled(motion.span)`
  font-size: 1.8rem;
  padding-bottom: 0.5rem;
  @media (max-width: 40em) {
    font-size: 1.31rem;
  }
`;

const textVariants = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: -5,
    pathLength: 1,
    transition: {
      duration: 0.8,
      delay: 2,
      ease: "easeInOut",
    },
  },
};
const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <Title variants={textVariants} initial="hidden" animate="visible">
          SANTO
        </Title>
      </Link>
    </Container>
  );
};

export default Logo;
