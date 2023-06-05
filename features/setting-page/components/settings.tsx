import * as S from "./settings.style";

export function Settings() {
  return (
    <S.Container>
      <S.SettingsWrapper>
        <h2>Update Your Account</h2>

        <S.UpdateForm>
          <S.ImageStyle>
            <S.ImageIcon src="/icons/icon.svg" alt="update image" />
            <S.Label htmlFor="update icon"> Update Image </S.Label>
            <S.Input
              type="file"
              id="update icon"
              style={{
                display: "none",
              }}
            />
          </S.ImageStyle>
          <S.Label>Username</S.Label>
          <S.Input type="text" />
          <S.Label>Email</S.Label>
          <S.Input type="email" name="email" />
          <S.Label>Password</S.Label>
          <S.Input type="password" name="password" />
          <button>Save</button>
          <S.DeleteAccount>Delete Account</S.DeleteAccount>
        </S.UpdateForm>
      </S.SettingsWrapper>
    </S.Container>
  );
}
