import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { ButtonUi, ButtonColor, UserContext } from "@features/ui";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Routes } from "@config/routes";
import * as S from "./single-post.style";
import { toast } from "react-toastify";
import { SinglePostType } from "../types/single-post-type.types";

type PostPropTypes = {
  post: SinglePostType;
};

export function SinglePost({ post }: PostPropTypes) {
  const { title, content, imageUrl, createdAt, authorId } = post;
  const { userInfo } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;

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
            <S.Icon src={imageUrl} alt="" />

            <S.AuthorandDate>
              <S.Author>by @{userInfo?.username}</S.Author>
              <div>{new Date(createdAt).toDateString()}</div>
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
        <S.Span>Recommended articles</S.Span>
        <S.ArtContainer></S.ArtContainer>
      </S.RecommendedContainer>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={S.style}>
          Are you sure you want to <strong>DELETE</strong> this post?
          <br />
          <br />
          <br />
          <S.Buttons>
            <ButtonUi
              text="Cancel"
              color={ButtonColor.white}
              onClick={() => setOpen(false)}
            />
            <ButtonUi
              text="Delete"
              color={ButtonColor.dark}
              onClick={deletePost}
            />
          </S.Buttons>
        </Box>
      </Modal>
    </>
  );
}
