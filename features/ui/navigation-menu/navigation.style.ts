import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 6.5rem;
  background: white;
  box-shadow: 0px 4px 70px rgba(30, 40, 52, 0.08);

  @media (max-width: 64em) {
    padding: 1.25rem;
  }
`;
export const Logo = styled.div`
  font-weight: 700;
  font-size: 1.875rem;

  &:hover {
    background: -webkit-linear-gradient(#c41740, #ea9c28);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
export const MenuLinks = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 64em) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  border: none;
  outline: none;
  background: none;
`;
export const MenuIcon = styled.img``;
