import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import * as P from "./create-post.style";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <div>Loading...</div>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];
export function CreatePost() {
  const [value, setValue] = useState("");

  return (
    <P.Container>
      <P.PostWrapper>
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
        <P.ButtonWrapper>
          <button>Publish</button>
          <button>Save as draft</button>
        </P.ButtonWrapper>
      </P.PostWrapper>
    </P.Container>
  );
}
