import React from "react";
import * as P from "./create-post.style";

export function CreatePost() {
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
          <P.TextArea placeholder="Description" />
        </P.InputandTextArea>
        <div>
          <button>Publish</button>
          <button>Save as draft</button>
        </div>
      </P.PostWrapper>
    </P.Container>
  );
}
