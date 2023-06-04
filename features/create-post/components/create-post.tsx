import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import * as P from "./create-post.style";

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
          <ReactQuill
            theme="snow"
            style={{
              height: "20rem",
              marginBottom: "3rem",
            }}
            value={value}
            onChange={setValue}
          />
        </P.InputandTextArea>
        <div>
          <button>Publish</button>
          <button>Save as draft</button>
        </div>
      </P.PostWrapper>
    </P.Container>
  );
}
