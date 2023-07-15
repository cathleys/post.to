import styled from "styled-components";

export const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "0.3rem",
  boxShadow: 24,
  outline: "none",
  p: 4,
};
export const NavBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 6.5rem;
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

export const DarkAndMenu = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SearchButton = styled.button<{ mode: string }>`
  outline: none;
  border: none;
  padding: 0.5rem;
  border-radius: 50%;
  background: ${(props) =>
    props.mode === "dark"
      ? "linear-gradient(145deg, #1c222f, #171d28)"
      : "linear-gradient(145deg, #e6e6e6, #ffffff)"};
  box-shadow: ${(props) =>
    props.mode === "dark"
      ? "11px 11px 22px #0b0d12, -11px -11px 22px #293346"
      : "20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff"};
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
