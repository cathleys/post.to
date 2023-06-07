import { ButtonColor } from "@features/ui/button/button";
import * as S from "./settings.style";
import { ButtonUi } from "features/index";
import { SidebarUserInfo } from "@features/ui";

export function Settings() {
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
}
