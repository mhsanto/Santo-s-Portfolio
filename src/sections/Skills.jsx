import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import styled from "styled-components";
import Html from "../assets/Images/bigHtml.png";
import CSS from "../assets/Images/CssBigImg.png";
import Bootstrap from "../assets/Images/bootstrap.png";
import Javascript from "../assets/Images/javascriptBIg.png";
import ReactJs from "../assets/Images/ReactBig.png";
import SAAS from "../assets/Images/sass-1.svg";
import GSAP from "../assets/Images/gsap-greensock.svg";
import Materialui from "../assets/Images/Materialui.png";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
`;
const Overlay = styled.div`
  position: absolute;
  width: 27vw;
  height: 90vh;
  top: 50%;
  left: 50%;
  border: 3px solid #323232;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 0 5vw #fff;
  z-index: 6;
  @media (max-width: 70em) {
    width: 40vw;
    height: 80vh;
  }
  @media (max-width: 64em) {
    width: 50vw;
    box-shadow: 0 0 0 60vw ${(props) => props.theme.text};
  }
  @media (max-width: 48em) {
    width: 60vw;
  }
  @media (max-width: 30em) {
    width: 80vw;
    height: 60vh;
  }
`;
const Title = styled.h1`
  position: absolute;
  top: 1rem;
  left: 5%;
  font-size: 7.5rem;
  font-weight: 300;
  text-shadow: 1px 1px 1px #202020;
  font-family: "Kaushan Script";
  color: #323232;
  z-index: 8;
  @media (max-width: 64em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 48em) {
    font-size: 4.5rem;
  }
`;
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 17vw;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 30vw;
  }
  @media (max-width: 48em) {
    width: 40vw;
  }
  @media (max-width: 30em) {
    width: 60vw;
  }
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  img {
    width: 90%;
    z-index: 4;
    height: auto;
  }
  h2 {
    text-align: center;
  }
`;
const Project = ({ img, title = "" }) => {
  return (
    <Item>
      <img src={img} alt={title} />
      <h2>{title}</h2>
    </Item>
  );
};
const Skills = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  const ScrollingRef = useRef(null);
  useLayoutEffect(() => {
    let scrollingElement = ScrollingRef.current;
    let element = ref.current;
    let t1 = gsap.timeline();
    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: "bottom+=100% top-=100%",
          scrub: true,
          pin: true,
          scroller: ".App",
        },
        ease: "none,",
      });
      t1.fromTo(
        scrollingElement,
        {
          y: "0",
        },
        {
          y: "-100%",
          scrollTrigger: {
            trigger: scrollingElement,
            start: "top top",
            end: "bottom top",
            scrub: true,
            scroller: ".App",
          },
        }
      );
      ScrollTrigger.refresh();
    }, 1000);
    return () => {
      t1.kill();
      ScrollTrigger.kill();
    };
  }, []);
  return (
    <Section ref={ref} id="skills">
      <Overlay />
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        Skills
      </Title>
      <Container ref={ScrollingRef}>
        <Project img={Html} title="Hyper Text Markup Language" />
        <Project img={CSS} title="Cascading Style Sheet" />
        <Project img={Bootstrap} title="BootStrap" />
        <Project img={Javascript} title="Javascript ES5,ES6" />
        <Project img={ReactJs} title="REACT 17" />
        <Project img={SAAS} title="SASS 17" />
        <Project img={GSAP} title="GSAP 17" />
        <Project img={Materialui} title="Material UI" />
      </Container>
    </Section>
  );
};

export default Skills;
