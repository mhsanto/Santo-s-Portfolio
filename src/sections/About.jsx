import React from "react";
import styled from "styled-components";
import cv from "../assets/Images/Santo-CV.pdf";
import img1 from "../assets/Images/1.webp";
import img2 from "../assets/Images/2.webp";
import img3 from "../assets/Images/3.webp";
import { motion } from "framer-motion";

const Home = () => {
  const Section = styled.section`
    position: relative;
    min-height: 100vh;
    width: 90vw;
    display: flex;
    margin: 0 auto;
  `;
  const Title = styled.h1`
    position: absolute;
    top: 1rem;
    left: 1rem;
    font-size: 10rem;
    font-weight: 300;
    font-family: "Kaushan Script";
    z-index: 4;
  `;
  const Left = styled.div`
    font-size: 1.2rem;
    line-height: 1.5;
    width: 50%;
    position: relative;
    z-index: 5;
    margin-top: 20%;
    text-transform: capitalize;
    overflow: hidden;
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
      right: 95%;
      bottom: 15%;
      width: 40%;
    }
    .small-img-2 {
      position: absolute;
      left: 80%;
      bottom: 30%;
      width: 40%;
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
    <Section id="fixed-text">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About Me
      </Title>
      <Left data-scroll data-scroll-sticky data-scroll-target="#fixed-text">
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
        <img src={img1} alt="My image" />
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

export default Home;
