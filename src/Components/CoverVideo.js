import React from 'react';
import styled from 'styled-components';
import MainVideo from '../Assets/CATWALK1.mp4';
import {motion} from 'framer-motion';


const container = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
 
    transition: {
      delayChildren: 1,
      staggerChildren: 0.3,
    }
  },
  
}

const VideoContainer = styled.section`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`

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
color: ${props => props.theme.text};

div{
display: flex;
flex-direction: row;
margin-bottom: -32px;
}

h1{
font-family: 'Kaushan Script';
font-size: ${props => props.theme.fontBig};
color: ${props => props.theme.grey};
text-shadow: 1px 1px 1px ${props => props.theme.body};
}

h2{
font-family: 'sirin stencil';
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.grey};
text-shadow: 1px 1px 1px ${props => props.theme.body};
font-weight: 300;
text-transform: capitalize;
}
`

const item = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
  }
}

const CoverVideo = () => {
  return (
    <VideoContainer>
      <Title variants={container} initial='hidden' animate='visible'>
        <div>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.15' data-scroll-speed='4' >K</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.13' data-scroll-speed='4' >o</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.11' data-scroll-speed='4' >m</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.09' data-scroll-speed='4' >i</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.07' data-scroll-speed='4' >W</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.05' data-scroll-speed='4' >r</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.03' data-scroll-speed='4' >l</motion.h1>
          <motion.h1 variants={item} data-scroll data-scroll-delay='0.02' data-scroll-speed='4' >d</motion.h1>

        </div>
        <h2  data-scroll data-scroll-delay='0.04' data-scroll-speed='2' >Live Surrealistic. Dream Grotesque. Inspire.</h2>
      </Title>
      <video src={MainVideo} type="video/mp4" muted autoPlay loop />
    </VideoContainer>
  );
}

export default CoverVideo;