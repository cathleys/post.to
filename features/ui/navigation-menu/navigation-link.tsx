import Link from "next/link";
import React from "react";
import styled from "styled-components";

type MenuLinkProps = {
  isActive?: boolean;
  href: string;
  text: string;
  onClick?: () => void;
};

export const Anchor = styled.a`
  display: flex;
  text-decoration: none;

  &:hover {
    color: orange;
  }
`;
export function NavigationLink({ text, href, onClick }: MenuLinkProps) {
  return (
    <Link href={href} passHref>
      <Anchor onClick={onClick}>{text}</Anchor>
    </Link>
  );
}
