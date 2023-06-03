import type { Meta, StoryObj } from "@storybook/react";
import { HeroSection } from "@features/index";
import Image from "next/image";
import styled from "styled-components";
import heroIcon from "../public/icons/hero-tag.svg";

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
    margin: 2.5rem 0 1rem 0;
    font-size: 1.75rem;
  }
`;
const HeroSubtitle = styled.div``;

const meta: Meta<typeof HeroSection> = {
  title: "Home/Hero",
  component: HeroSection,
};

export default meta;
type Story = StoryObj<typeof HeroSection>;

const Hero = () => {
  return (
    <Container>
      <Image src={heroIcon} alt="hero icon" width={100} height={40} />
      <HeroTitle>Welcome to Cath.to</HeroTitle>
      <HeroSubtitle>
        Publish you articles with ease. Made for software developers, by
        software developer.
      </HeroSubtitle>
    </Container>
  );
};

export const Herosection: Story = {
  render: () => <Hero />,
};
