import styled from "styled-components";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const CoverImage = () => {
  const ImageContainer = styled.section`
    height: 100vh;
    width: 100%;
    position: relative;
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
    .title_name {
      display: flex;
      @media (max-width: 25em) {
        flex-wrap: wrap;
        justify-content: center;
        margin: 0;
        padding: 0;
      }
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
        font-size: clamp(1.75rem, calc(1.38rem + 1.24vw), 2.5rem);
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
        <div className="title_name">
          <div style={{ display: "flex" }}>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.13"
              data-scroll-speed="4"
            >
              F
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.1"
              data-scroll-speed="4"
            >
              r
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              o
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.09"
              data-scroll-speed="4"
            >
              n
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.06"
              data-scroll-speed="4"
            >
              t
            </motion.h1>
            <motion.h1
              variants={item}
              data-scroll
              data-scroll-delay="0.08"
              data-scroll-speed="4"
            >
              end
            </motion.h1>
          </div>
          &nbsp; &nbsp;
          <motion.h1
            variants={item}
            data-scroll
            data-scroll-delay="0.04"
            data-scroll-speed="4"
          >
            Developer
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
