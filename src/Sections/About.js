import React from "react";
import styled from "styled-components";

import IMG1 from "../Assets/Images/IMG_20231113_181401.jpg";
import IMG2 from "../Assets/Images/IMG_20231124_172643.jpg";
import IMG3 from "../Assets/Images/IMG_20231113_181403.jpg";

const Section = styled.section`
  position: relative;
  min-height: 125vh;
  width: 85vw;
  background: ${(props) => props.theme.grey};
  display: flex;
`;
const Title = styled.h1`
  font-family: "Kaushan Script";
  letter-spacing: 1px;
  font-size: ${(props) => props.theme.fontxxxl};
  font-weight: 300;
  position: absolute;
  top: 1rem;
  left: 5%;
  z-index: 5;
`;
const Left = styled.div`
  width: 50%;
  font-family: "Sirin stencil";
  font-size: ${(props) => props.theme.fontxl};
  font-weight: 300;
  letter-spacing: 1px;
  margin-top: 15%;
  position: relative;
  z-index: 5;
  left: 5%;
`;
const Right = styled.div`
  width: 50%;
  position: relative;
  left: 5%;
  img {
    width: 90%;
    height: auto;
  }

  .small-img1 {
    width: 50%;
    position: absolute;
    right: 95%;
    bottom: 10%;
  }
  .small-img2 {
    width: 50%;
    position: absolute;
    left: 78%;
    bottom: 40%;
  }
`;

const About = () => {
  return (
    <Section data-scroll-section id="TOP">
      <Title
        data-scroll
        data-scroll-speed="-2"
        data-scroll-direction="horizontal"
      >
        About KomiWrld
      </Title>

      <Left data-scroll data-scroll-sticky data-scroll-target="#TOP">
        KomiWrld.KomiWrld.KomiWrld. KomiWrld.KomiWrld.KomiWrld.
        KomiWrld.KomiWrld.KomiWrld. KomiWrld.KomiWrld.KomiWrld.
        KomiWrld.KomiWrld.KomiWrld. KomiWrld.KomiWrld.KomiWrld.
        KomiWrld.KomiWrld.KomiWrld.
      </Left>
      
      <Right>
        <img alt="" src={IMG2} />
        <img
          data-scroll
          data-scroll-speed="5"
          className="small-img1"
          alt=""
          src={IMG1}
        />
        <img
          data-scroll
          data-scroll-speed="2"
          className="small-img2"
          alt=""
          src={IMG3}
        />
      </Right>
    </Section>
  );
};

export default About;
