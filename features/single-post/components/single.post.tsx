import React from "react";
import * as S from "./single-post.style";
import Image from "next/image";
import { ArticleList } from "@features/ui";
import { AiFillEdit } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
export function SinglePost() {
  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.Title>10 hilarious NFT sales that broke the internet</S.Title>
        </S.HeaderWrapper>

        <S.Publisher>
          <S.Icon src="/icons/icon.svg" alt="author" />

          <S.AuthorandDate>
            <S.Author>Selena Gomez</S.Author>
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
          src="/icons/single-image-post.svg"
          alt="article post"
          width={1000}
          height={580}
        />
        <S.Article>
          <p>
            Design comps, layouts, wireframes—will your clients accept that you
            go about things the facile way? Authorities in our business will
            tell in no uncertain terms that Lorem Ipsum is that huge, huge no no
            to forswear forever.
          </p>

          <p>
            Not so fast, I`d say,there are some redeeming factors in favor of
            greeking text, as its use is merely the symptom of a worse problem
            to take into consideration.
          </p>
          <p>
            The toppings you may chose for that TV dinner pizza slice when you
            forgot to shop for foods, the paint you may slap on your face to
            impress the new boss is your business. But what about your daily
            bread?
          </p>
        </S.Article>
      </S.Container>
      <S.RecommendedContainer>
        <S.Span>Recommended articles</S.Span>
        <S.ArticleContainer>
          <ArticleList />
          <ArticleList />
          <ArticleList />
        </S.ArticleContainer>
      </S.RecommendedContainer>
    </>
  );
}
