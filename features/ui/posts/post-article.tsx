import React, { useState } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import LoadingButton from "@mui/lab/LoadingButton";
import * as A from "./post.style";

export type ArticleProps = {
  _id: string;
  title: string;
  imageUrl: string;
  desc: string;
  createdAt: Date;
};

export function PostArticle({
  _id,
  title,
  imageUrl,
  desc,
  createdAt,
}: ArticleProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const goToSingePost = () => {
    setLoading(!loading);
    router.push({
      pathname: Routes.singlePost,
      query: { id: _id },
    });
  };

  return (
    <A.Container>
      <A.Wrapper>
        <A.Date>{new Date(createdAt).toDateString()}</A.Date>
        <A.TitleandSentence>
          <A.Title>{title}</A.Title>
          <A.Sentence>{desc}</A.Sentence>
        </A.TitleandSentence>

        <LoadingButton
          onClick={goToSingePost}
          loading={loading}
          loadingPosition="end"
        >
          <span>Read More</span>
        </LoadingButton>
      </A.Wrapper>
      <A.PostImage src={imageUrl} alt="post image" />
    </A.Container>
  );
}
