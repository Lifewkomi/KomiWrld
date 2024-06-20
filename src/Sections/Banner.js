import React from "react";
import styled from "styled-components";

const Section = styled.section`
  height: 55vh;
  width: 80vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  font-family: "Kaushan Script";
  color: ${(props) => props.theme.text};
  white-space: nowrap;
  text-transform: uppercase;
  line-height: 1;
  span {
    display: block;
    background-color: ${(props) => props.theme.body};
    padding: 1rem;
  }
`;

const Banner = () => {
  return (
    <Section data-scroll-section>
      <Container id="TOP">
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="0"
            data-scroll-target="#TOP"
          >
            KomiWrld Gallery.
          </span>
        </BannerComponent>
        <BannerComponent>
          <span
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="4"
            data-scroll-target="#TOP"
          >
            KomiWrld.KomiWrld.
          </span>
        </BannerComponent>
      </Container>
    </Section>
  );
};

export default Banner;
