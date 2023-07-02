import React, { useState } from "react";
import { useRouter } from "next/router";

import { FaTrashAlt } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { ButtonUi, ButtonColor } from "@features/ui";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Routes } from "@config/routes";
import * as S from "./single-post.style";
import { toast } from "react-toastify";
import { SinglePostType } from "../types/single-post-type.types";

type PostPropTypes = {
  post: SinglePostType;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "0.3rem",
  boxShadow: 24,
  outline: "none",
  p: 4,
};
export function SinglePost({ post }: PostPropTypes) {
  const { title, content, imageUrl, authorId, createdAt, updatedAt } = post;
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const deletePost = async (e: any) => {
    e.preventDefault();
    const { id } = router.query;
    try {
      await fetch(`http://localhost:3000/api/posts/${id}`, {
        method: "Delete",
      });

      toast.success("Post has been deleted");
      await router.push(Routes.home);
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
            <S.Icon src={imageUrl} alt={authorId} />

            <S.AuthorandDate>
              <S.Author>By Selena Gomez</S.Author>
              <div>{new Date(createdAt).toDateString()}</div>
            </S.AuthorandDate>
          </S.IconAuthorAndDate>

          <S.Edit>
            {updatedAt && (
              <div>Edited {new Date(updatedAt).toDateString()}</div>
            )}
            <S.Anchor href={`/single-post/${id}/edit`}>
              <AiFillEdit size={24} />
            </S.Anchor>

            <FaTrashAlt onClick={() => setOpen(true)} size={24} />
          </S.Edit>
        </S.Publisher>
        <br />
        <br />

        <S.PostImage src={imageUrl} alt={authorId} />

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
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Warning
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you want to <strong>DELETE</strong> this post?
          </Typography>
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
