import React from "react";
import * as S from "./search.style";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { Routes } from "@config/routes";
type SearchResultsProps = {
  searchResults: any;
};
export function ArticleSearchResults({ searchResults }: SearchResultsProps) {
  return (
    <div>
      {searchResults?.map(({ title, desc, _id, index }: any) => (
        <S.SearchResultsWrapper key={index}>
          <S.TitleAndIcon>
            <Link
              href={{
                pathname: Routes.singlePost,
                query: { id: _id },
              }}
            >
              <S.Title>{title}</S.Title>
            </Link>
            <Link
              href={{
                pathname: Routes.singlePost,
                query: { id: _id },
              }}
            >
              <FiExternalLink />
            </Link>
          </S.TitleAndIcon>
          <S.Desc>{desc}</S.Desc>
        </S.SearchResultsWrapper>
      ))}
    </div>
  );
}
