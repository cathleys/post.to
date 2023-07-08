import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { CommentList, UserContext } from "@features/ui";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import * as S from "./single-post.style";
import { toast } from "react-toastify";
import { SinglePostType } from "../types/single-post-type.types";
import { CustomModal } from "@features/ui/custom-modal";
import Link from "next/link";
import { UserData } from "@features/ui/sidebar-user-info/sidebar-user-info";
type PostPropTypes = {
  post: SinglePostType;
};

export function SinglePost({ post }: PostPropTypes) {
  const { title, content, imageUrl, createdAt, authorId, updatedAt } = post;
  const { userInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const [userData, setUserData] = useState<UserData | null>(null);
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3000/api/users/${userInfo?.id}`).then(
      (response) => {
        response.json().then((pic) => {
          setUserData(pic);
        });
      }
    );
  }, [userInfo?.id]);
  const { profilePic } = userData?.data || {};

  const deletePost = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "Delete",
        credentials: "include",
      });

      toast.success("Post has been deleted");
      setTimeout(() => {
        router.push(`${Routes.home}?post has been deleted`);
      }, 2500);
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
            <S.Icon src={profilePic} alt="picture" />

            <S.AuthorandDate>
              <Link href={`${Routes.home}?user=${userInfo?.username}`}>
                <S.Author>by @{userInfo?.username}</S.Author>
              </Link>
              <div>{new Date(createdAt).toDateString()}</div>
              {createdAt !== updatedAt && (
                <div>{new Date(updatedAt).toDateString()}</div>
              )}
            </S.AuthorandDate>
          </S.IconAuthorAndDate>
          {userInfo?.id === authorId?._id && (
            <S.Edit>
              <S.Anchor href={`/single-post/${id}/edit`}>
                <AiFillEdit size={24} />
              </S.Anchor>

              <FaTrashAlt onClick={() => setOpen(true)} size={24} />
            </S.Edit>
          )}
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
          iconSrc={profilePic}
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
