import styled, { css } from "styled-components";
import { ButtonColor } from "./button";

export const ButtonStyle = styled.button<{ color: ButtonColor }>`
  padding: 0.75rem 0.875rem;
  margin-right: 0.5rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-align: center;

  ${(props) => {
    switch (props.color) {
      case ButtonColor.white:
        return css`
          color: #1d2939;
          background: white;
          border: 1px solid #d0d5dd;
        `;
      case ButtonColor.dark:
        return css`
          color: white;
          background: #1d2939;
          border: 1px solid #1d2939;
        `;
    }
  }}
`;

export const Anchor = styled.a``;
