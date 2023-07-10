import React from "react";
import * as H from "./hero-section.style";

export function HeroSection() {
  return (
    <H.Container>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/icons/hero-tag.svg" alt="hero icon" />
      <H.HeroTitle>Welcome to Post.to</H.HeroTitle>
      <H.HeroSubtitle>
        Publish you articles with ease. Share your thoughts. Learn from others.
      </H.HeroSubtitle>
    </H.Container>
  );
}
