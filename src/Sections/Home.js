import React from 'react';
import styled from 'styled-components';
import CoverVideo from '../Components/CoverVideo';

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
      <h1>Logo</h1>
      <h1>NavBar</h1>
    </Section>
  );
}

export default Home;
