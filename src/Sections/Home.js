import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../Components/CoverVideo';
import Logo from '../Components/Logo';

const Section = styled.section
`
position: relative;
min-height: 200vh;
overflow: hidden;
`

const Home = () => {
  return (
    <Section data-scroll-section>
      <CoverVideo/>
      <Logo />
      <h1>NavBar</h1>
    </Section>
  );
}

export default Home;
