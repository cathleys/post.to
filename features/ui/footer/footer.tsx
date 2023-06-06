import { FooterContainer } from "./footer.style";

export function Footer() {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return <FooterContainer>Copyright © {getYear()} Cath.to</FooterContainer>;
}
