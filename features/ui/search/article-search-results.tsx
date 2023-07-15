import React from "react";
import * as S from "./search.style";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
type SearchResultsProps = {
  searchResults: any;
};
export function ArticleSearchResults({ searchResults }: SearchResultsProps) {
  return (
    <div>
      {searchResults?.map(({ title, desc, _id, index }: any) => (
        <S.SearchResultsWrapper key={index}>
          <S.TitleAndIcon>
            <Link href={`single-post/${_id}`}>
              <S.Title>{title}</S.Title>
            </Link>
            <Link href={`single-post/${_id}`}>
              <FiExternalLink />
            </Link>
          </S.TitleAndIcon>
          <S.Desc>{desc}</S.Desc>
        </S.SearchResultsWrapper>
      ))}
    </div>
  );
}
