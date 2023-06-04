import Image from "next/image";
import React from "react";
import * as H from "./hero-section.style";

export function HeroSection() {
  return (
    <H.Container>
      <Image
        src="/icons/hero-tag.svg"
        alt="hero icon"
        width={100}
        height={40}
      />
      <H.HeroTitle>Welcome to Cath.to</H.HeroTitle>
      <H.HeroSubtitle>
        Publish you articles with ease. Share your thoughts. Learn from others.
      </H.HeroSubtitle>
    </H.Container>
  );
}
