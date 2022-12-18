import React from "react";
import styled from "styled-components";
const Section = styled.section`
  min-height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
  @media (max-width: 48em) {
    width: 90vw;
  }
`;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 64em) {
    justify-content: center;
  }
`;
const BannerContainer = styled.h1`
  font-size: 5rem;
  font-family: "Kaushan Script";
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;

  @media (max-width: 70em) {
    font-size: ${(props) => props.theme.fontxxl};
  }
  @media (max-width: 64em) {
    margin: 1rem 0;
  }
  @media (max-width: 48em) {
    font-size: 2rem;
    margin: 0.5rem 0;
  }
  @media (max-width: 30em) {
    font-size: 1.5rem;
  }
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem;
  }
`;
const Extra = () => {
  return (
    <Section id="extra">
      <Container id="container">
        <BannerContainer>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#container"
            data-scroll-speed="6"
          >
            SCSS,Shopify,Git & Github
          </span>
        </BannerContainer>
        <BannerContainer>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#container"
            data-scroll-speed="-5"
          >
            Fluent In
          </span>
        </BannerContainer>
        <BannerContainer>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#container"
            data-scroll-speed="4"
          >
            English,Bangla,Hindi,Urdu
          </span>
        </BannerContainer>
        <BannerContainer>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#container"
            data-scroll-speed="8"
          >
            Typing Speed
          </span>
        </BannerContainer>
        <BannerContainer>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-target="#container"
            data-scroll-speed="-7"
          >
            73+ word per minute
          </span>
        </BannerContainer>
      </Container>
    </Section>
  );
};

export default Extra;
