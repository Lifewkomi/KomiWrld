import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

const container = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
   
      transition: {
        delayChildren: 1,
        staggerChildren: 0.25,
      }
    },
    
  }
const item = {
    hidden: {
      opacity: 0,
    },
  
    visible: {
      opacity: 1,
    },
  }

const Container = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  touch-action: none;
  width: 100vw;
  height: 100vh;
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c6d5c6;
  color: ${(props) => props.theme.text};
`;

const Text = styled(motion.span)`
  display: flex;
  position: relative;
  top: 13rem;
  right: 20rem;
  z-index: 5;
  font-family: "Sirin stencil";
  font-size: 5rem;
  color: #000;
  padding-top: 0.5rem;
  @media screen and (max-width: 480px) {
    font-size: 26px;
        right: 80px;
        top: 70px;
}
`;

const Loader = () => {
  return (
    <Container
        initial={{
            y:0, opacity: 1
        }}
        exit={{
            y:"100%", opacity: 0.5, 
        }}
        transition={{
            duration: 2,
            ease: "easeInOut",
        }}
    >
      <Text variants={container} initial="hidden" animate="visible" >
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.15'>K</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.13'>o</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.11'>m</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.09'>i</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.07'>W</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.05'>r</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.03'>l</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.02'>d</motion.h1>
      </Text>
    </Container>
  );
};

export default Loader;
