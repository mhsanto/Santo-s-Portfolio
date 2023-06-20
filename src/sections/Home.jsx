import React from "react";
import styled from "styled-components";
import CoverImage from "../components/CoverImage";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";

const Home = () => {
  const Section = styled.section`
    position: relative;
    min-height: 100vh;
    overflow: hidden;
  `;
  return (
    <Section id="home">
      <CoverImage />
      <Logo />
      <Navbar />
    </Section>
  );
};

export default Home;
