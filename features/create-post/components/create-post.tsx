import React, { useContext, useState } from "react";
import "react-quill/dist/quill.snow.css";
import { QuillNoSSRWrapper, formats, modules } from "../api/quill-data";
import * as P from "./create-post.style";
import { ButtonUi } from "@features/index";
import { ButtonColor } from "@features/ui/button/button";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import { UserContext } from "@features/ui";

export function CreatePost() {
  const router = useRouter();
  const { userInfo } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [photo, setPhoto] = useState<Blob | null>(null);

  const CLOUD_NAME = "dr04ygceb";
  const UPLOAD_PRESET = "cathto-upload-image";

  const createPost = async (e: any) => {
    e.preventDefault();
    if (!photo || !title || !desc || !content) {
      toast.error("All fields are required");
      return;
    }

    try {
      const imageUrl = await uploadImage();
      const res = await fetch("https://post-to.vercel.app/api/api/posts", {
        method: "POST",
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

      toast.success("Post created successfully");
      toast.loading("You'll be redirected to the post after a few seconds");

      router.push(
        `/single-post/${post?.data?._id}?author=${userInfo?.username}`
      );
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
            onChange={(e) => setTitle(e.target.value)}
          />
          <P.Input
            type="text"
            placeholder="Description"
            onChange={(e) => setDesc(e.target.value)}
          />
          <QuillNoSSRWrapper
            theme="snow"
            modules={modules}
            formats={formats}
            onChange={setContent}
            style={{
              height: "300px",
            }}
          />
        </P.InputandTextArea>
        <br />

        <ButtonUi
          text="Publish"
          color={ButtonColor.dark}
          onClick={createPost}
        />
      </P.PostForm>
      <ToastContainer autoClose={4000} />
    </P.Container>
  );
}
