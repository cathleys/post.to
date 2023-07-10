import { FooterContainer } from "./footer.style";

export function Footer() {
  return (
    <FooterContainer>
      Copyright © {new Date().getFullYear()} Post.to
    </FooterContainer>
  );
}
