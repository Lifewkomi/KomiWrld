import React from "react";
import styled from "styled-components";
import MainVideo from "../Assets/CATWALK1.mp4";
import { motion, useScroll, useTransform } from "framer-motion";

const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      delayChildren: 5,
      staggerChildren: 0.3,
    },
  },
};

const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden; /* Prevent scrollbars */
  display: flex;
  justify-content: center;
  align-items: center; /* Center the video */

  video {
    width: 100%;
    height: 100vh;
    object-fit: cover;

    @media screen {
      width: 100%;
      height: 100vh;
      object-fit: cover;
    }
  }
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.text};

  div {
    display: flex;
    flex-direction: row;
    margin-bottom: -32px;
  }

  h1 {
    font-family: "Kaushan Script";
    font-size: ${(props) => props.theme.fontBig};
    color: ${(props) => props.theme.grey};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};

    /* @media screen{
        font-size: ${(props) => props.theme.fontxxxl};
      } */
  }

  h2 {
    font-family: "sirin stencil";
    font-size: ${(props) => props.theme.fontlg};
    color: ${(props) => props.theme.grey};
    text-shadow: 1px 1px 1px ${(props) => props.theme.body};
    font-weight: 300;
    text-transform: capitalize;

    /* @media screen{
        font-size: 20px;
        padding-top: 5%
      } */
  }
`;
const CoverVideo = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <VideoContainer data-scroll-container>
      {/* <Title style={{
          opacity: scale,
          transform: `translateY(${y})`,
        }} variants={container} initial='hidden' animate='visible'>
        <h2  data-scroll data-scroll-delay='0.04' data-scroll-speed='2' >Live Surrealistic. Dream Grotesque. Inspire.</h2>
      </Title> */}
      <motion.video
        style={{
          scale,
          y,
          transition: "transform 0.5s ease-in-out", // Smooth transition
        }}
        src={MainVideo}
        type="video/mp4"
        muted
        autoPlay
        loop
      />
    </VideoContainer>
  );
};

export default CoverVideo;
