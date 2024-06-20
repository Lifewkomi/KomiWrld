import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, {useLayoutEffect } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';

const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
margin: 0 auto;
overflow: hidden;
display: flex;
justify-content: flex-start;
align-items: flex-start;
position: relative;
`

const Title = styled.h1`
font-family: 'Kaushan Script';
font-size: ${props => props.theme.fontxxl};
font-weight: 300;
text-shadow: 1px 1px 1px ${props => props.theme.body};
color: ${props => props.theme.text};
position: absolute;
top: 1rem;
left: 5%;
z-index: 11;
`

const Right = styled.div`
position: absolute;
left: 35%;
padding-left: 30%;
min-height: 100vh;
background-color: ${props => props.theme.grey};
/* width: 65%; */
display: flex;
justify-content: flex-start;
align-items: center;
  h1{
    width: 5rem;
    margin: 0 1rem;
  }
`

const Left = styled.div`
position: fixed; 
left: 0;
min-height: 100vh;
background-color: ${props => props.theme.body};
color: ${props => props.theme.text};
width: 35%;
display: flex;
justify-content: center;
align-items: center;
z-index: 5;
  p{
    font-size: ${props => props.theme.fontlg};
    font-weight: 300;
    width: 80%;
    margin: 0 auto;
  }

`

const Gallery = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef(null);
  const horizontalRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = horizontalRef.current;

    let pinWrapWidth = scrollingElement.offsetWidth;

    let t1 = gsap.timeline();

    setTimeout(() => {
      t1.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "top top",
          end: pinWrapWidth,
          scroller: '.App',
          scrub: true,
          pin: true,
          markers: true,
        },
        height: `${scrollingElement.scrollWidth}px`,
        ease: "none,"
      })
      ScrollTrigger.refresh();
    }, 1000);

    return () => {};
  }, []);

  return (
    <Section ref={ref} data-scroll-section>
      <Title>My Gallery</Title>
      <Left>
        <p>A Collection of My Pictures.</p>
      </Left>
      <Right ref={horizontalRef}>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        <h1>IMG</h1>
        
      </Right>
    </Section>
  );
};

export default Gallery;