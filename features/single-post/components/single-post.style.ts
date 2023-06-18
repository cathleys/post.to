import styled from "styled-components";

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
    margin: 2.5rem 0 1rem 0;
  }
`;

export const Publisher = styled.div`
  display: inline-flex;
  gap: 0 1rem;
`;

export const Icon = styled.img`
  border-radius: 50%;
  height: 3.125rem;
  width: 3.125rem;
`;
export const AuthorandDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  font-size: 0.813rem;
  color: #475467;
  gap: 0.2rem;
`;
export const Author = styled.div`
  font-weight: bold;
`;

export const Edit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
`;
export const Article = styled.div`
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.688rem;
`;
export const RecommendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 6.25rem;
  background: #f2f4f7;

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

export const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f4f7;
  gap: 1rem;
`;
