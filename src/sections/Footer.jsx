import { motion } from "framer-motion";
import React from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import styled from "styled-components";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background-color: #000000;
  color: #f2ff91;
  font-family: "Roboto";
  text-transform: uppercase;
`;
const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 4.5rem;
    @media (max-width: 48em) {
      font-size: 1.4rem;
    }
  }
`;
const Span = styled.span`
  font-size: 1.2rem;
  border: 1px solid;
  padding: 1rem 2rem;
  border-radius: 30px;
  margin-top: 1rem;
  @media (max-width: 48em) {
    font-size: 1rem;
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;
const FooterLinks = styled(motion.div)`
  width: 80vw;
  @media (max-width: 48em) {
    width: 90vw;
  }
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 2rem;
    margin-top: 4rem;
    padding: 1.4rem 1rem;
    border-top: 1px solid white;
    border-bottom: 1px solid white;
    list-style: none;
    font-size: 1.6rem;
    @media (max-width: 48em) {
      justify-content: center;
    }
    li {
      cursor: pointer;
      transition: all 0.4s ease;
      padding: 1rem;
      &:hover {
        transform: scale(1.1);
      }
    }
    @media (max-width: 48em) {
      padding: 1rem;
      font-size: ${(props) => props.theme.fontmd};
    }
  }
`;
const Link = styled.a`
  position: absolute;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  left: 1rem;
  top: 1rem;
  border-bottom: 2px solid;
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;
const Link2 = styled.a`
  position: absolute;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  right: 1rem;
  border-bottom: 2px solid;
  top: 1rem;
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;
const Link3 = styled.a`
  position: absolute;
  bottom: 2.5rem;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  border-bottom: 2px solid;
  left: 1rem;
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;
const Link4 = styled.a`
  position: absolute;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  bottom: 2.5rem;
  border-bottom: 2px solid;
  right: 1rem;
  @media (max-width: 48em) {
    font-size: 1rem;
  }
`;
const Copyright = styled.span`
  padding: 0.5rem 0;
  margin: 0 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 0;
    text-align: center;
  }
  p {
    font-size: 1.2rem;

    @media (max-width: 48em) {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontmd};
  }
`;
const Footer = () => {
  const { scroll } = useLocomotiveScroll();
  const handleScroll = (id) => {
    let elem = document.querySelector(id);
    scroll.scrollTo(elem, {
      offset: "-100",
      duration: "2000",
      easing: [0.2, 0.0, 0.35, 1.0],
    });
  };
  return (
    <Section id="footer">
      <LogoContainer>
        <Link href="https://github.com/mhsanto" target="_blank">
          GitHub
        </Link>
        <Link2 href="https://www.instLink2gram.com/mhsanto92/" target="_blank">
          Instagram
        </Link2>
        <Link3 href="https://www.facebook.com/mhsanto072" target="_blank">
          Facebook
        </Link3>
        <Link4 href="mailto: nicesanto92@gmail.com" target="_blank">
          Email
        </Link4>
        <h2 data-scroll data-scroll-speed="2">
          Let's talk about your project
        </h2>
        <Span>
          <a
            href="https://www.facebook.com/messages/t/100004883266236"
            target="_blank"
          >
            Get in touch
          </a>
        </Span>
      </LogoContainer>
      <FooterLinks
        initial={{ y: "-400px" }}
        whileInView={{ y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5 }}
      >
        <ul>
          <li onClick={() => handleScroll("#home")}>Home</li>
          <li onClick={() => handleScroll(".about")}>About Me</li>
          <li onClick={() => handleScroll("#projects")}>Projects</li>
          <li onClick={() => handleScroll("#extra")}>Extra</li>
          <li onClick={() => handleScroll("#skills")}>Skills</li>
        </ul>
        <Copyright>
          <p>&copy;Mahmodul Hasan Santo.All Rights Reserved</p>
        </Copyright>
      </FooterLinks>
    </Section>
  );
};

export default Footer;
