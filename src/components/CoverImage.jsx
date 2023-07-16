import styled from "styled-components";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const CoverImage = () => {
  const ImageContainer = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
    background-image: linear-gradient(
      to bottom in oklab,
      oklch(70% 0.5 340) -10% -10%,
      oklch(90% 0.5 200) 141% 141%
    );
    color: #fff;
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
    }
    h1 {
      font-size: clamp(2.5rem, calc(1.22rem + 5.94vw), 6.6rem);
      @media (max-width: 30em) {
        object-position: center;
      }
    }
    h2 {
      text-align: center;
      font-family: var(--kaushan-font);
      text-shadow: 1px 1px 1px #202020;
      font-size: clamp(1.75rem, calc(1.38rem + 1.24vw), 2.5rem);
      font-weight: 400;
      @media (max-width: 30em) {
        font-size: calc(1rem + 2.2vw);
        object-position: center;
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
  return (
    <ImageContainer>
      <ParticlesBackground />
      <Title variants={container} initial="hidden" animate="visible">
        <div>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.13"
            data-scroll-speed="4"
          >
            M
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.1"
            data-scroll-speed="4"
          >
            E
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            R
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.09"
            data-scroll-speed="4"
          >
            N
          </motion.h1>
          &nbsp; &nbsp;
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.06"
            data-scroll-speed="4"
          >
            St
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.08"
            data-scroll-speed="4"
          >
            ack
          </motion.h1>
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            Dev.
          </motion.h1>
        </div>
        <motion.h2 variants={item} data-scroll data-scroll-speed="4">
          Mahmodul Hasan Santo
        </motion.h2>
      </Title>
    </ImageContainer>
  );
};

export default CoverImage;
