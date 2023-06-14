import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { Routes } from "@config/routes";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import { formats, modules } from "../api/quill-data";
import { ButtonUi } from "@features/index";
import { ButtonColor } from "@features/ui/button/button";
import * as P from "./create-post.style";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

export function CreatePost() {
  const { status } = useSession();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") Router.replace(Routes.home);
  });

  if (status === "loading") return <div>Loading...</div>;
  if (status === "authenticated")
    return (
      <P.Container>
        <P.ImagePost src="/icons/post-1.png" alt="image post" />

        <P.PostWrapper id="postform" autoComplete="off">
          <P.LabelandRemove>
            <P.Label htmlFor="cover image">
              Upload Cover
              <input
                type="file"
                id="cover image"
                name="cover image"
                style={{ display: "none" }}
              />
            </P.Label>
            <P.Remove>Remove</P.Remove>
          </P.LabelandRemove>
          <P.InputandTextArea>
            <P.Input type="text" placeholder="Title" />
            <QuillNoSSRWrapper
              theme="snow"
              modules={modules}
              formats={formats}
              value={value}
              onChange={setValue}
              style={{
                height: "300px",
              }}
            />
          </P.InputandTextArea>
          <br />
          <P.ButtonWrapper>
            <ButtonUi text="Publish" href="/" color={ButtonColor.dark} />
            <ButtonUi text="Save as draft" href="/" color={ButtonColor.white} />
          </P.ButtonWrapper>
        </P.PostWrapper>
      </P.Container>
    );
  return <div>Login again to see this page</div>;
}
