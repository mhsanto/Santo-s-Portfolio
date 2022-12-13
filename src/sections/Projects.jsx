import { motion } from "framer-motion";
import gsap from "gsap";
import img1 from "../assets/Images/1.webp";
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
  font-size: 7.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 1px #202020;
  font-family: "Kaushan Script";
  color: crimson;
  z-index: 8;
`;
const Left = styled.div`
  width: 35%;
  background-color: ${(props) => props.theme.body};
  min-height: 100vh;
  z-index: 5;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
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
  background-color: rgb(50, 103, 95);
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
`;
const Item = styled(motion.div)`
  display: inline-block;
  width: 20rem;
  margin-right: 6rem;
  cursor: pointer;
  img {
    width: 100%;
    height: auto;
  }
  h1 {
    font-weight: 500;
    text-align: center;
  }
`;
const Project = ({ img, title = `` }) => {
  return (
    <Item
      initial={{ filter: "grayscale(100%)" }}
      whileInView={{ filter: "grayscale(0)" }}
      transition={{ duration: 0.05 }}
      viewport={{ once: false, amount: "all" }}
    >
      <img src={img} alt={title} />
      <h1>{title}</h1>
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
    return () => {};
  });
  return (
    <Section ref={ref}>
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
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
        <Project img={img1} title="view my work" />
      </Right>
    </Section>
  );
};

export default Projects;
