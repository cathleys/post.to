import Image from "next/image";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.5rem 15.94rem;
  text-align: center;

  @media (max-width: 64em) {
    padding: 3.75rem 2.5rem 0.938rem;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4.75rem;
  margin: 2.5rem 0;
  background: -webkit-linear-gradient(#c41740, #ea9c28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 64em) {
    font-size: 1.75rem;
    margin: 2.5rem 0 1rem 0;
  }
`;
const HeroSubtitle = styled.div`
  margin: 0 12rem;

  @media (max-width: 64em) {
    margin: 0;
  }
`;

export function HeroSection() {
  return (
    <Container>
      <Image
        src="/icons/hero-tag.svg"
        alt="hero icon"
        width={100}
        height={40}
      />
      <HeroTitle>Welcome to Cath.to</HeroTitle>
      <HeroSubtitle>
        Publish you articles with ease. Made for software developers, by
        software developer.
      </HeroSubtitle>
    </Container>
  );
}
