import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../Components/CoverVideo';
import Logo from '../Components/Logo';
import Navbar from '../Components/Navbar';


const Section = styled.section`
position: relative;
min-height: 200vh;
overflow: hidden;
`

const Home = () => {
  return (
    <Section data-scroll-section>
      <CoverVideo/>
      <Logo />
      <Navbar />
    </Section>
  );
}

export default Home;
