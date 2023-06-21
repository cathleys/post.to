import React from "react";
import * as S from "./single-post.style";
import Image from "next/image";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { useEffect, useState } from "react";

type SinglePostProps = {
  title: string;
  photo: string;
  author: string;
  content: string;
};
export function SinglePost({ title, photo, content, author }: SinglePostProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for demonstration purposes
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay as needed

    return () => clearTimeout(delay); // Clear the timeout when component unmounts
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.Title>{title}</S.Title>
        </S.HeaderWrapper>

        <S.Publisher>
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

        <Image
          src={photo}
          alt={author}
          width={1000}
          height={580}
          layout="responsive"
          loading="lazy"
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
