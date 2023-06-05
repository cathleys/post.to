import Link from "next/link";
import { Anchor, ButtonStyle } from "./button.style";

export enum ButtonColor {
  // eslint-disable-next-line no-unused-vars
  white = "white",
  // eslint-disable-next-line no-unused-vars
  dark = "dark",
}
type ButtonProps = {
  text: string;
  href: string;
  color: ButtonColor;
};

export function ButtonUi({ text, href, color }: ButtonProps) {
  return (
    <Link href={href} passHref>
      <Anchor as={ButtonStyle} color={color}>
        {text}
      </Anchor>
    </Link>
  );
}
