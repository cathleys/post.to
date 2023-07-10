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
export const Container = styled.div`
  padding: 0 11.875rem 2rem 11.875rem;

  @media (max-width: 64em) {
    padding: 3.75rem 2.5rem;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7.5rem 0 5rem 0;
  text-align: center;

  @media (max-width: 64em) {
    padding: 0;
  }
`;

export const Title = styled.h1`
  font-size: 4.75rem;
  margin: 0;
  background: -webkit-linear-gradient(#c41740, #ea9c28);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 64em) {
    font-size: 1.75rem;
    margin: 2.5rem 0;
  }
`;

export const Publisher = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;
export const IconAuthorAndDate = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;
export const Icon = styled.img`
  border-radius: 50%;
  object-fit: cover;
  height: 3.125rem;
  width: 3.125rem;
`;
export const AuthorandDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.9rem;
  color: #475467;
  gap: 0.3rem;
`;
export const Author = styled.div`
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: orange;
  }
`;

export const Anchor = styled.a`
  &:hover {
    border-radius: 0.3rem;
    background: #f5f5f5;
  }
`;
export const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1.2rem;
  font-size: 0.813rem;
  color: #475467;
`;

export const ArtContainer = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f4f7;
  gap: 1rem;
`;
export const Article = styled.div`
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.688rem;
`;
export const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5rem 6.25rem;

  @media (max-width: 64em) {
    padding: 3.75rem 2rem;
  }
`;

export const Span = styled.div`
  font-weight: bold;
  padding-left: 6rem;

  @media (max-width: 64em) {
    padding-left: 0;
  }
`;

export const PostImage = styled.img`
  display: flex;
  object-fit: cover;
  width: 100%;
  height: 15rem;
  border-radius: 0.3rem;
  margin: 0 auto;
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 0.5rem;
`;
export const Cancel = styled.button`
  border-radius: 0.5rem;
  padding: 0.75rem 0.875rem;
  background: #f2f4f;
  font-size: 0.875rem;
  border: 1px solid #ccc;
`;
export const Delete = styled.button`
  border-radius: 0.5rem;
  padding: 0.75rem 0.875rem;
  color: white;
  background: #1d2939;
  border: 1px solid #1d2939;
  font-size: 0.875rem;
`;
