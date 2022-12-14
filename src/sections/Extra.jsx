import React from "react";
import styled from "styled-components";
const Section = styled.section`
  min-height: 100vh;
  width: 80vw;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-inline: auto;
`;
const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
const BannerContainer = styled.h1`
  font-size: 5rem;
  font-family: "Kaushan Script";
  color: white;
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem;
  }
`;
const Extra = () => {
  return (
    <Section>
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
