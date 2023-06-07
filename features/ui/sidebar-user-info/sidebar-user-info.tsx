import React from "react";
import * as S from "./sidebar-user-info.style";
import Link from "next/link";

export function SidebarUserInfo() {
  return (
    <S.SideBar>
      <S.Container>
        <S.IconandName>
          <S.Icon />
          <h3> Cath leyson</h3>
        </S.IconandName>
        <span>React developer</span>

        <div>
          <S.Joined>Joined</S.Joined>
          <span>May 23 2018</span>
        </div>
      </S.Container>
      <br />
      <S.PostsContainer>
        <h2>More from Cath Leyson</h2>
        <Link href={""}>
          <S.Posts>How to bake a cake</S.Posts>
        </Link>
        <Link href={""}>
          <S.Posts>How to make sleep a baby</S.Posts>
        </Link>
        <Link href={""}>
          <S.Posts>How to eat a banana</S.Posts>
        </Link>
        <Link href={""}>
          <S.Posts>How to erase writing</S.Posts>
        </Link>
      </S.PostsContainer>
    </S.SideBar>
  );
}
