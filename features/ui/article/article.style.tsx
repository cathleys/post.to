import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: auto;
  background: white;
  border: 1px solid white;
  border-radius: 1.25rem;
  padding: 1.5rem 1.25rem 1.5rem 1.875rem;

  &:hover {
    border: 1px solid #667085;
  }

  @media (max-width: 64em) {
    margin: 1rem;
    padding: 1.5rem 1rem;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 1.25rem;

  @media (max-width: 64em) {
    padding: 0;
  }
`;
export const Date = styled.p`
  font-weight: 500;
  font-size: 0.813rem;
  margin: 0;
  color: #667085;
`;
export const Title = styled.h2`
  font-weight: 100;
  font-size: 1.625rem;
  margin: 1.875rem 0 0 0;

  @media (max-width: 64em) {
    padding-bottom: 1rem;
  }
`;
export const Sentence = styled.p`
  margin: 0;
  color: #475467;
  @media (max-width: 64em) {
    display: none;
  }
`;

export const TitleandSentence = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  max-width: 38.125rem;
`;
export const ImagePost = styled(Image)`
  border-radius: 0.625rem;
`;
