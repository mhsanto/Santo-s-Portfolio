import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Container = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 100%;
  z-index: 5;
  color: white;
  a {
    display: flex;
    align-items: flex-end;
  }
  svg {
    width: 4rem;
    height: auto;
    stroke-linecap: round;
    stroke-linejoin: round;
    g {
      path {
        stroke: #fff;
      }
    }
  }
`;
const Title = styled(motion.span)`
  font-size: 1.4rem;
  padding-bottom: 0.5rem;
`;
const svgVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};
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
      delay: 2,
      ease: "easeInOut",
    },
  },
};
const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="none"
        >
          <g></g>
          <g>
            <motion.path
              variants={svgVariants}
              initial="hidden"
              animate="visible"
              d="M12,17.27L18.18,21l-1.64-7.03L22,9.24l-7.19-0.61L12,2L9.19,8.63L2,9.24l5.46,4.73L5.82,21L12,17.27z"
            />
          </g>
        </svg>
        <Title variants={textVariants} initial="hidden" animate="visible">
          SANTO
        </Title>
      </Link>
    </Container>
  );
};

export default Logo;
