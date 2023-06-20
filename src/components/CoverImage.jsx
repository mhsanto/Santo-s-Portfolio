import "@fontsource/poppins";

import CV from "../assets/Images/CV.png";
import cv from "../assets/Images/CV.pdf";

import styled from "styled-components";
import { motion } from "framer-motion";
import useRunAnimation from "../customHook/useRunAnimation";
const ImageContainer = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
`;

const Title = styled(motion.div)`
  position: absolute;
  inset: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-wrap: wrap;
  }
  h1 {
    font-size: clamp(5.63rem, calc(3.59rem + 5.18vw), 6.56rem);
    @media (max-width: 64em) {
      font-size: calc(8vw + 1rem);
    }
    @media (max-width: 30em) {
      font-size: calc(1rem + 7vw);
      object-position: center;
    }
  }
  h2 {
    font-size: 2.1rem;
    letter-spacing: -1px;
    text-transform: capitalize;
    font-weight: 700;
    @media (max-width: 48em) {
      font-size: 1.8rem;
    }
    @media (max-width: 30em) {
      font-size: calc(1rem + 2.2vw);
      object-position: center;
      margin-top: -0.1rem;
      letter-spacing: 1px;
      font-weight: 500;
    }
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

const CoverImage = () => {
  const animeRef = useRunAnimation();

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cv;
    link.download = "MH CV";
    link.click();
  };

  return (
    <>
      <ImageContainer>
        <Title variants={container} initial="hidden" animate="visible">
          <div>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
              style={{ color: "#4FB23F" }}
            >
              M
            </motion.h1>
            <motion.h1
              style={{ fontWeight: 200 }}
              variants={item}
              data-scroll
              data-scroll-delay="0.1"
              data-scroll-speed="4"
            >
              E
            </motion.h1>
            <motion.h1
              style={{
                fontFamily: "Kaushan Script",
                paddingRight: "1rem",
                color: "#00D9FF",
              }}
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              R
            </motion.h1>
            <motion.h1
              style={{ paddingRight: "1.5rem", color: "#026E00" }}
              variants={item}
              data-scroll
              data-scroll-delay="0.07"
              data-scroll-speed="4"
            >
              N
            </motion.h1>

            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
            >
              Sta
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.08"
              data-scroll-speed="4"
            >
              ck
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.04"
              data-scroll-speed="4"
            >
              Dev<span style={{ marginLeft: "-1vw" }}>.</span>
            </motion.h1>
          </div>
          <motion.h2 variants={item} data-scroll data-scroll-speed="2">
            Mahmodul Hasan Santo
          </motion.h2>
        </Title>
        <Img ref={animeRef}>
          <img
            onClick={handleDownload}
            src={CV}
            alt="CV"
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          />
        </Img>
      </ImageContainer>
    </>
  );
};
const Img = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 5;

  & > * {
    box-shadow: 0 2px 8px;
    width: clamp(20vw, 22vw, 24vw);
    max-width: 100%;
    border-radius: 5px;
    cursor: pointer;
  }
  @media (max-width: 1392px) {
    display: none;
  }
`;

export default CoverImage;
