import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { Routes } from "@config/routes";
import { SidebarUserInfo } from "@features/ui";
import { ButtonUi } from "features/index";
import { ButtonColor } from "@features/ui/button/button";
import * as S from "./settings.style";

export function Settings() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace(Routes.home);
  }, [status]);

  if (status === "loading") return <div>Loading...</div>;
  if (status === "authenticated")
    return (
      <S.Container>
        <S.SettingsWrapper>
          <h2>Update Your Account</h2>
          <br />

          <S.UpdateForm>
            <S.ImageStyle>
              <S.ImageIcon />
              <S.Label htmlFor="update icon"> Update Image </S.Label>
              <S.Input
                type="file"
                id="update icon"
                style={{
                  display: "none",
                }}
              />
            </S.ImageStyle>
            <S.Label>
              Bio
              <S.Input type="text" name="bio" />
            </S.Label>
            <S.Label>
              Username
              <S.Input type="text" />
            </S.Label>
            <S.Label>
              Email
              <S.Input type="email" name="email" />
            </S.Label>
            <S.Label>
              Password
              <S.Input type="password" name="password" />
            </S.Label>

            <br />
            <div>
              <ButtonUi text="Save" href="" color={ButtonColor.dark} />
            </div>
            <br />
            <S.DeleteAccount>Delete Account</S.DeleteAccount>
          </S.UpdateForm>
        </S.SettingsWrapper>

        <SidebarUserInfo />
      </S.Container>
    );

  return <h2>Login to see this page again. </h2>;
}
