import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { CommentList, UserContext } from "@features/ui";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import * as S from "./single-post.style";

import { format } from "timeago.js";
import { SinglePostType } from "../types/single-post-type.types";
import { CustomModal } from "@features/ui/custom-modal";

type PostPropTypes = {
  post: SinglePostType;
};

export function SinglePost({ post }: PostPropTypes) {
  const { title, content, imageUrl, createdAt, authorId, updatedAt } = post;
  const { userInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const [commentText, setCommentText] = useState("");

  const deletePost = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(`https://post-to.vercel.app/api/posts/${id}`, {
        method: "Delete",
        credentials: "include",
      });

      router.push(`${Routes.home}?post has been deleted`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.Title>{title}</S.Title>
        </S.HeaderWrapper>

        <S.Publisher>
          <S.IconAuthorAndDate>
            <S.Icon src={authorId?.profilePic} alt="picture" />

            <S.AuthorandDate>
              <S.Author>by @{authorId?.username}</S.Author>

              <div>{new Date(createdAt).toDateString()}</div>
            </S.AuthorandDate>
          </S.IconAuthorAndDate>
          <S.Edit>
            {createdAt !== updatedAt && (
              <div>
                <strong>Updated</strong> {format(updatedAt)}
              </div>
            )}
            {userInfo?.id === authorId?._id && (
              <>
                <S.Anchor href={`/single-post/${id}/edit`}>
                  <AiFillEdit size={24} />
                </S.Anchor>

                <FaTrashAlt onClick={() => setOpen(true)} size={24} />
              </>
            )}
          </S.Edit>
        </S.Publisher>
        <br />
        <br />

        <S.PostImage src={imageUrl} alt="" />

        <S.Article
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        ></S.Article>
      </S.Container>
      <S.RecommendedContainer>
        <CommentList
          commentText={commentText}
          setCommentText={(e: any) => setCommentText(e.target.value)}
        />
      </S.RecommendedContainer>
      <CustomModal
        open={open}
        message="Are you sure you want to DELETE this post?"
        text="Delete"
        onClose={() => setOpen(false)}
        confirm={deletePost}
      />
    </>
  );
}
