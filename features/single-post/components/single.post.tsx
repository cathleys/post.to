import React from "react";
import * as S from "./single-post.style";
import Image from "next/image";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";

export type SinglePostProps = {
  title: string;
  photo: string;
  author: string;
  content: string;
};
export function SinglePost({ title, photo, content, author }: SinglePostProps) {
  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.Title>{title}</S.Title>
        </S.HeaderWrapper>

        <S.Publisher>
          {/* grab the user avatar not the post image */}
          <S.Icon src={photo} alt={author} />

          <S.AuthorandDate>
            <S.Author>{author}</S.Author>
            <div>May 03 2021</div>
          </S.AuthorandDate>
          <S.Edit>
            <span>
              <AiFillEdit />
            </span>
            <span>
              <BsFillTrashFill />
            </span>
          </S.Edit>
        </S.Publisher>
        <div>
          <br />
        </div>
        <Image
          src={photo}
          alt={author}
          width={900}
          height={580}
          priority={false}
        />
        <S.Article>{content}</S.Article>
      </S.Container>
      <S.RecommendedContainer>
        <S.Span>Recommended articles</S.Span>
        <S.ArticleContainer></S.ArticleContainer>
      </S.RecommendedContainer>
    </>
  );
}
