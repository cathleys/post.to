import React, { useState } from "react";
import { useRouter } from "next/router";
import "react-quill/dist/quill.snow.css";
import { ButtonColor } from "@features/ui/button/button";
import * as P from "@features/create-post/components/create-post.style";
import { ToastContainer, toast } from "react-toastify";
import * as E from "@features/index";

export function EditPost({ post }: any) {
  const router = useRouter();
  const { id } = router.query;

  const [title, setTitle] = useState(() => post?.data?.title);
  const [desc, setDesc] = useState(() => post?.data?.desc);
  const [content, setContent] = useState(() => post?.data?.content);
  const [photo, setPhoto] = useState("");
  const CLOUD_NAME = "dr04ygceb";
  const UPLOAD_PRESET = "cathto-upload-image";

  const editPost = async (e: any) => {
    e.preventDefault();

    if (!title || !desc || !content) {
      toast.error("All fields are required");
      return;
    }

    try {
      let imageUrl = null;
      if (photo) {
        imageUrl = await uploadImage();
      }

      const res = await fetch(`https://post-to.vercel.app/api/posts/${id}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          content,
          imageUrl,
        }),
      });
      if (!res.ok) {
        throw new Error("Error occured");
      }
      const post = await res.json();
      toast.success("Post edited successfully");
      toast.loading("You will be redirected to the post after a few seconds.");

      setTimeout(() => {
        router.push(
          `/single-post/${post?.data?._id}?author=${post?.data?.username}&edited=true`
        );
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!photo) return;

    const data = new FormData();

    data.append("file", photo);
    data.append("upload_preset", UPLOAD_PRESET);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const image = await res.json();

      const imageUrl = image["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <P.Container>
      {photo && (
        // @ts-ignore
        <P.ImagePost src={URL.createObjectURL(photo)} alt="image post" />
      )}
      <P.PostForm id="postform">
        <P.ImageArea>
          <P.Label htmlFor="image">
            Upload Image
            <input
              id="image"
              type="file"
              style={{ display: "none" }}
              onChange={(e: any) => setPhoto(e.target.files[0])}
            />
          </P.Label>
        </P.ImageArea>
        <P.InputandTextArea>
          <P.Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
          <P.Input
            type="text"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <E.QuillNoSSRWrapper
            theme="snow"
            modules={E.modules}
            formats={E.formats}
            value={content}
            onChange={setContent}
            style={{
              height: "300px",
            }}
          />
        </P.InputandTextArea>
        <br />

        <E.ButtonUi text="Update" color={ButtonColor.dark} onClick={editPost} />
      </P.PostForm>
      <ToastContainer autoClose={5000} />
    </P.Container>
  );
}
