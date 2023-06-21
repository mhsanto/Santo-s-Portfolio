import { motion } from "framer-motion";
import gsap from "gsap";
import img1 from "../assets/Images/ecommerce.png";
import img2 from "../assets/Images/hunt.png";
import img3 from "../assets/Images/portfolio.png";
import img4 from "../assets/Images/reactPortfolio.png";
import img5 from "../assets/Images/socialSiteImg.png";
import React, { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
const Section = styled.section`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
`;
const Title = styled.h1`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: calc(5em - 1vw);

  font-weight: 00;
  text-shadow: 1px 1px 1px #202020;
  font-family: var(--river-font);
  font-size: 6rem;
  color: white;
  z-index: 8;
  @media (max-width: 64em) {
    font-size: calc(5rem-1vw);
    left: 0;
    top: 0;
  }
  @media (max-width: 48em) {
    font-size: 3rem;
  }
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 20%;
  }
`;
const Flex = styled.div`
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 2rem;
  color: ${(props) => props.theme.text};
  font-size: 0.95rem;
  h3 {
    font-weight: 300;
  }
  @media (max-width: 64em) {
    h3 {
      font-size: ${(props) => props.theme.fontmd};
    }
    a {
      display: none;
    }
  }
  @media (max-width: 48em) {
    width: 40%;
    h3 {
      display: none;
    }
  }
`;
const Tag = styled(motion.a)`
  border: 1px solid white;
  padding: 0.4rem 0.9rem;
  display: inline-block;
  margin: 0.5rem 0 0 0;
  text-transform: uppercase;
  border-radius: 20px;
  font-size: 0.8rem;
  transition: 0.3s ease;
`;
const Right = styled.div`
  position: absolute;
  background-color: #566270;
  /* width: 65%; */
  left: 35%;
  padding-left: 30%;
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  h1 {
    width: 5rem;
    margin: 0 2rem;
  }
  @media (max-width: 64em) {
    left: 20%;
  }
`;
const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  a {
    color: white;
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 500;
    text-align: center;
  }
  @media (max-width: 48em) {
    width: 15rem;
  }
`;
const ImageHover = styled(motion.div)`
  height: 30rem;
  overflow: hidden;
  border: 1px solid rgb(255, 121, 79);
`;
const Img = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  transition: 1s ease;
`;
const Project = ({ img, href, title = "" }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0)" }}
      transition={{ duration: 0.05 }}
      viewport={{ once: false, amount: "all" }}
    >
      <ImageHover>
        <Img whileHover={{ translate: "0 -55%" }} src={img} alt={title} />
      </ImageHover>
      <a href={href} target="_blank">
        {title}
      </a>
    </Item>
  );
};
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const horizontalRef = useRef(null);
  useLayoutEffect(() => {
    let scrollingElement = horizontalRef.current;
    let pinWrapWidth = scrollingElement.offsetWidth;
    let element = ref.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scrub: true,
          pin: true,
          scroller: ".App",
          //   markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,",
      });
      t1.to(scrollingElement, {
        scrollTrigger: {
          trigger: scrollingElement,
          start: "top top",
          end: pinWrapWidth,
          scrub: true,
          scroller: ".App",
          //   markers: true,
        },
        x: -pinWrapWidth,
        ease: "none,",
      });
      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  });
  return (
    <Section ref={ref} id="projects">
      <Title data-scroll data-scroll-speed="-1">
        Selected Works
      </Title>
      <Left>
        <Flex>
          <div data-scroll>
            <h3>1. Concept E-Commerce Site Using BootStrap</h3>
            <Tag
              whileHover={{
                backgroundColor: "white",
                color: "#202020",
                fontWeight: "700",
              }}
              href="https://mhsanto.github.io/E-commerce-website/"
              target="_blank"
            >
              View Live Demo
            </Tag>
          </div>
          <div data-scroll>
            <h3>2. PSD to HTML Converted Site (not responsive)</h3>
            <Tag
              whileHover={{
                backgroundColor: "white",
                color: "#202020",
                fontWeight: "700",
              }}
              href="https://sajjadul011.github.io/Hunt-Potfolio/"
              target="_blank"
            >
              View Live Demo
            </Tag>
          </div>
          <div data-scroll>
            <h3>3. Responsive Portfolio Site Using HTML & CSS</h3>
            <Tag
              whileHover={{
                backgroundColor: "white",
                color: "#202020",
                fontWeight: "700",
              }}
              href="https://mhsanto.github.io/portFolioTesting/"
              target="_blank"
            >
              View Live Demo
            </Tag>
          </div>
          <div data-scroll>
            <h3>4. Responsive Portfolio Using React</h3>
            <Tag
              whileHover={{
                backgroundColor: "white",
                color: "#202020",
                fontWeight: "700",
              }}
              href="https://santo-react-portfolio.netlify.app/"
            >
              View Live Demo
            </Tag>
          </div>
          <div data-scroll>
            <h3>
              5. Responsive Concept Social Media Site Using HTML,CSS &
              Javascript
            </h3>
            <Tag
              whileHover={{
                backgroundColor: "white",
                color: "#202020",
                fontWeight: "700",
              }}
              href="https://mhsanto.github.io/mySocialMedia/"
              target="_blank"
            >
              View Live Demo
            </Tag>
          </div>
        </Flex>
      </Left>
      <Right ref={horizontalRef}>
        <Project
          img={img1}
          title="view my work"
          href="https://mhsanto.github.io/E-commerce-website/"
        />
        <Project
          img={img2}
          title="view my work"
          href="https://sajjadul011.github.io/Hunt-Potfolio/"
        />
        <Project
          img={img3}
          title="view my work"
          href="https://mhsanto.github.io/portFolioTesting/"
        />
        <Project
          img={img4}
          title="view my work"
          href="https://santo-react-portfolio.netlify.app/"
        />
        <Project
          img={img5}
          title="view my work"
          href="https://mhsanto.github.io/mySocialMedia/"
        />
      </Right>
    </Section>
  );
};

export default Projects;
