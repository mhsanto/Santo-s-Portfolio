import styled from "styled-components";
import { motion } from "framer-motion";

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
`;
const Img = styled(motion.img)`
  width: 100%;
  object-fit: cover;
  transition: 1s ease;
`;

export default Project;
