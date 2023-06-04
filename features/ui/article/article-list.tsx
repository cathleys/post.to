import React from "react";
import { ArticleCard } from "./article-card";
import styled from "styled-components";

export const ArticleContainer = styled.div`
  padding-top: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f2f4f7;
`;
export function ArticleList() {
  return (
    <ArticleContainer>
      <ArticleCard />
    </ArticleContainer>
  );
}
