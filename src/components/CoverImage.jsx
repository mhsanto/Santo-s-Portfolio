import React from "react";
import videl from "../assets/Svgs/1670796076gravure-dragon-ball-videl-u-need-me-3.svg";
import styled from "styled-components";
import { motion } from "framer-motion";

const CoverImage = () => {
  const ImageContainer = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    background-color: #131313;

    img {
      height: 100%;
      @media (max-width: 40em) {
        width: 60%;
        position: absolute;
        top: 12rem;
        transform: none !important;
      }
    }
  `;
  const DarkOverlay = styled.div`
    position: absolute;
    inset: 0;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.1);
  `;
  const Title = styled(motion.div)`
    position: absolute;
    inset: 0;
    z-index: 5;
    display: flex;
    flex-direction: column;
    color: white;
    justify-content: center;
    align-items: center;
    div {
      display: flex;
    }
    h1 {
      font-size: 6.6rem;
      text-shadow: 1px 1px 1px #202020;
      @media (max-width: 64em) {
        font-size: ${(props) => props.theme.fontxxl};
      }
      @media (max-width: 30em) {
        font-size: calc(1rem + 7vw);
        object-position: center;
      }
    }
    h2 {
      text-align: center;
      font-family: "Kaushan Script";
      text-shadow: 1px 1px 1px #202020;
      font-size: 2rem;
      color: crimson;
      @media (max-width: 30em) {
        font-size: calc(1rem + 2.2vw);
        object-position: center;
      }
    }
  `;
  const HeaderTwo = styled.span`
    font-size: 1.82rem;
    position: absolute;
    top: 5rem;
    left: 25rem;
    background-color: #202020;
    width: 14rem;
    height: 5rem;
    padding: 1rem 1rem;
    clip-path: polygon(
      0% 0%,
      100% 0%,
      100% 75%,
      38% 75%,
      9% 100%,
      26% 75%,
      0% 75%
    );
    @media (max-width: 40em) {
      font-size: 1rem;
      width: 8rem;
      height: 4rem;
      top: 25rem;
      left: 12rem;
    }
  `;
  const container = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,

      transition: {
        delayChildren: 1,
        staggerChildren: 0.3,
      },
    },
  };
  const item = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  };
  return (
    <ImageContainer>
      <DarkOverlay />
      <Title variants={container} initial="hidden" animate="visible">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            Fro
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="4"
          >
            nt
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            End
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
            style={{ fontFamily: "Kaushan Script" }}
          >
            De
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
            style={{ fontFamily: "Kaushan Script" }}
          >
            ve
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
            style={{ fontFamily: "Kaushan Script" }}
          >
            Loper
          </motion.h1>
        </div>
        <motion.h2 variants={item} data-scroll data-scroll-speed="4">
          Mahmodul Hasan Santo
        </motion.h2>
      </Title>
      <img data-scroll data-scroll-speed="2" src={videl} alt="" />
      <HeaderTwo>Why Not Fullstack</HeaderTwo>
      {/* <video src={Image} autoPlay loop muted /> */}
    </ImageContainer>
  );
};

export default CoverImage;
