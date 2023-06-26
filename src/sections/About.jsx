import React from "react";
import styled from "styled-components";
import cv from "../assets/Images/CV.pdf";
import img2 from "../assets/Images/me.jpg";
import img3 from "../assets/Images/santo.jpg";
import { motion } from "framer-motion";

const About = () => {
  const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 90vw;
    display: flex;
    margin: 0 auto;
    @media (max-width: 48em) {
      width: 90vw;
    }
    @media (max-width: 30em) {
      width: 100vw;
    }
  `;
  const Title = styled.h1`
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 7rem;
    font-weight: 700;
    font-family: var(--river-font);
    z-index: 6;
    @media (max-width: 64em) {
      font-size: calc(5em - 1vw);
      left: 0;
      top: 0;
    }
    @media (max-width: 48em) {
      font-size: 2.5rem;
    }
  `;
  const Left = styled.div`
    font-size: 1.2rem;
    width: 50%;
    position: relative;
    z-index: 5;
    margin-top: 16%;
    text-transform: capitalize;
    @media (max-width: 64em) {
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) !important;
      margin: 0 auto;
      padding: 2rem;
      font-weight: 600;
      backdrop-filter: blur(2px);
      background-color: rgb(255, 255, 255, 0.3);
      border-radius: 20px;
    }
    @media (max-width: 48em) {
      font-size: 1rem;
    }
    @media (max-width: 30em) {
      width: 70%;
    }
  `;
  const Right = styled.div`
    width: 50%;
    position: relative;
    img {
      width: 100%;
      height: auto;
    }
    .small-img-1 {
      position: absolute;
      right: 47%;
      bottom: 15%;
      width: 40%;
    }
    .small-img-2 {
      position: absolute;
      left: 59%;
      bottom: 30%;
      width: 40%;
    }
    @media (max-width: 64em) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        object-fit: cover;
      }
      .small-img-1 {
        width: 30%;
        left: 5%;
        height: auto;
        bottom: 10%;
      }
      .small-img-2 {
        width: 30%;
        height: auto;
        left: 60%;
        bottom: 20%;
      }
    }
  `;
  const CV = styled(motion.a)`
    color: black;
    font-size: 1rem;
    border: 1px solid;
    display: inline-block;
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
    border-radius: 15px;
    text-transform: uppercase;
    letter-spacing: 2px;
  `;
  return (
    <Section id="fixed-text" className="about">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll>
        My full name is Mahmodul Hasan Santo.I am a passionate designer based in
        Dhaka,Bangladesh.I am enthusiastic about learning,working hard and
        solving problems with a clean and functional design.
        <br />
        <br />
        I'm a Frontend developer who loves to help people get their dreams up
        and running on the internet. I love to see people succeed with their
        projects—whether they're just getting started or they've been working on
        them for years
        <br />
        <CV
          whileHover={{
            border: "2px solid",
            letterSpacing: "0px",
            fontWeight: "600",
          }}
          href={cv}
          download
        >
          View My CV
        </CV>
      </Left>
      <Right>
        <img
          src={img2}
          data-scroll
          data-scroll-speed="5"
          className="small-img-1"
          alt="My image"
        />
        <img
          src={img3}
          data-scroll
          data-scroll-speed="-2"
          className="small-img-2"
          alt="My image"
        />
      </Right>
    </Section>
  );
};

export default About;
