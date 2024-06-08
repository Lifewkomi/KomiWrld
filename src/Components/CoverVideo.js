import React from 'react';
import styled from 'styled-components';
import MainVideo from '../Assets/CATWALK1.mp4'

const VideoContainer = styled.section
`
width: 100%;
height: 100vh;
position: relative;

video{
    width: 100%;
    height: 100vh;
    object-fit: cover;
}
`

const Title = styled.div
`
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

const CoverVideo = () => {
  return (
    <VideoContainer>
      <Title>
        <div>
          <h1 data-scroll data-scroll-delay='0.15' data-scroll-speed='4' >K</h1>
          <h1 data-scroll data-scroll-delay='0.13' data-scroll-speed='4' >o</h1>
          <h1 data-scroll data-scroll-delay='0.11' data-scroll-speed='4' >m</h1>
          <h1 data-scroll data-scroll-delay='0.09' data-scroll-speed='4' >i</h1>
          <h1 data-scroll data-scroll-delay='0.07' data-scroll-speed='4' >W</h1>
          <h1 data-scroll data-scroll-delay='0.05' data-scroll-speed='4' >r</h1>
          <h1 data-scroll data-scroll-delay='0.03' data-scroll-speed='4' >l</h1>
          <h1 data-scroll data-scroll-delay='0.02' data-scroll-speed='4' >d</h1>

        </div>
        <h2  data-scroll data-scroll-delay='0.04' data-scroll-speed='2' >Live Surrealistic. Dream Grotesque. Inspire.</h2>
      </Title>
      <video src={MainVideo} type="video/mp4" muted autoPlay loop />
    </VideoContainer>
  );
}

export default CoverVideo;