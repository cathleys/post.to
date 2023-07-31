import React, { useState, useEffect, useContext } from "react";
import * as S from "./sidebar-user-info.style";
import { RxAvatar } from "react-icons/rx";
import { UserContext } from "../user-context";

export type UserData = {
  data: {
    _id: string;
    username: string;
    bio: string;
    createdAt: Date | undefined;
    profilePic: string;
  };
};
export function SidebarUserInfo() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch(`https://post-to.vercel.app/api/users/${userInfo?.id}`).then(
      (response) => {
        response.json().then((info) => {
          setUserData(info);
        });
      }
    );
  }, [userInfo?.id]);

  const { username, bio, createdAt, profilePic } = userData?.data || {};
  return (
    <S.SideBar>
      <S.Container>
        <S.IconandName>
          {profilePic ? (
            <S.Icon src={profilePic} alt={username} />
          ) : (
            <RxAvatar size={65} />
          )}
          <br />

          <h3>{username}</h3>
        </S.IconandName>
        <div>
          <S.Bio>Bio</S.Bio>
          <span>{bio}</span>
        </div>

        <div>
          <S.Joined>Joined</S.Joined>
          {/* @ts-ignore */}
          <span>{new Date(createdAt).toDateString()}</span>
        </div>
      </S.Container>
      <br />
    </S.SideBar>
  );
}
