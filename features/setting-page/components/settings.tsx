import React, { useState, useContext, useEffect } from "react";
import { ButtonColor } from "@features/ui/button/button";
import { ButtonUi } from "features/index";
import * as B from "@features/ui";
import { ToastContainer, toast } from "react-toastify";
import * as S from "./settings.style";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import { CustomModal } from "@features/ui/custom-modal";
import { UserData } from "@features/ui/sidebar-user-info/sidebar-user-info";

export function Settings() {
  const router = useRouter();
  const { userInfo } = useContext(B.UserContext);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState(null);

  const [open, setOpen] = useState(false);
  const CLOUD_NAME = "dr04ygceb";
  const UPLOAD_PRESET = "cathto-upload-image";
  useEffect(() => {
    fetch(`https://post-to.vercel.app/api/users/${userInfo?.id}`).then(
      (response) => {
        response.json().then((pic) => {
          setUserData(pic);
        });
      }
    );
  }, [userInfo?.id]);
  const { profilePic } = userData?.data || {};

  const updateUser = async (e: any) => {
    e.preventDefault();

    try {
      const profilePic = await uploadImage();

      const res = await fetch(
        `https://post-to.vercel.app/api/users/${userInfo?.id}`,
        {
          method: "PUT",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            bio,
            username,
            password,
            profilePic,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Error occured");
      }
      await res.json();
      router.push(Routes.home);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    if (!photo) return;

    const data = new FormData();

    data.append("file", photo);
    data.append("upload_preset", UPLOAD_PRESET);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
          method: "POST",
          body: data,
        }
      );

      const image = await res.json();

      const imageUrl = image["secure_url"];

      return imageUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (e: any) => {
    e.preventDefault();
    try {
      await fetch(`https://post-to.vercel.app/api/users/${userInfo?.id}`, {
        method: "Delete",
        credentials: "include",
      });

      toast.success("Your account has been deleted");

      router.push(`${Routes.signup}?user has been deleted`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <S.Container>
      <S.SettingsWrapper>
        <h2>Update Your Account</h2>
        <br />

        <S.UpdateForm id="update-form">
          <S.ImageStyle>
            <S.Avatar
              src={
                profilePic
                  ? profilePic
                  : photo
                  ? URL.createObjectURL(photo)
                  : ""
              }
              alt="profile pic"
            />

            <S.Label htmlFor="update icon"> Upload Image </S.Label>
            <S.Input
              type="file"
              id="update icon"
              style={{
                display: "none",
              }}
              onChange={(e: any) => setPhoto(e.target.files[0])}
            />
          </S.ImageStyle>
          <S.Label>
            Bio
            <S.Input
              type="text"
              value={bio}
              onChange={(e: any) => setBio(e.target.value)}
            />
          </S.Label>
          <S.Label>
            Username
            <S.Input
              type="text"
              value={username}
              onChange={(e: any) => setUsername(e.target.value)}
            />
          </S.Label>
          <S.Label>
            Password
            <S.Input
              type="password"
              onChange={(e: any) => setPassword(e.target.value)}
            />
          </S.Label>

          <br />
          <div>
            <ButtonUi
              text="Save"
              color={ButtonColor.dark}
              onClick={updateUser}
            />
          </div>
          <br />
          <S.DeleteAccount onClick={() => setOpen(true)}>
            Delete Account
          </S.DeleteAccount>
        </S.UpdateForm>
      </S.SettingsWrapper>

      <B.SidebarUserInfo />
      <ToastContainer autoClose={4000} />
      <CustomModal
        open={open}
        message="Are you sure you want to DELETE your account?"
        text="Delete"
        onClose={() => setOpen(false)}
        confirm={deleteUser}
      />
    </S.Container>
  );
}
