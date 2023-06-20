import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Container = styled.div`
  position: absolute;
  top: 0;
  padding: 0.5rem 5rem;
  width: 100%;
  z-index: 6;
  @media (max-width: 660px) {
    padding: 0.5rem 1rem;
  }
  a {
    display: flex;
    font-weight: 700;
    align-items: flex-end;
  }
`;
const Title = styled(motion.span)`
  font-size: 1.8rem;
  max-width: 85%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 40em) {
    font-size: 1.51rem;
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
const Link4 = styled.a`
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: -2px;
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 48em) {
    visibility: hidden;
    display: none;
  }
`;

const Logo = () => {
  return (
    <Container>
      <Title variants={textVariants} initial="hidden" animate="visible">
        <Link to="/">
          <span
            style={{
              color: "#026E00",
            }}
          >
            .
          </span>
          santo
        </Link>
        <Link4 href="mailto: santomh27@gmail.com" target="_blank">
          santomh27@gmail.com
        </Link4>
      </Title>
    </Container>
  );
};

export default Logo;
