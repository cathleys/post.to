import { ButtonStyle } from "./button.style";

export enum ButtonColor {
  // eslint-disable-next-line no-unused-vars
  white = "white",
  // eslint-disable-next-line no-unused-vars
  dark = "dark",
}
type ButtonProps = {
  text: string;
  color: ButtonColor;
  type?: string;
  // eslint-disable-next-line no-unused-vars
  onClick?: (e: any) => void;
};

export function ButtonUi({ text, color, onClick }: ButtonProps) {
  return (
    <ButtonStyle color={color} onClick={onClick}>
      {text}
    </ButtonStyle>
  );
}
