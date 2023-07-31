import React, { useEffect, useState, useContext } from "react";
import { UserData } from "@features/ui/sidebar-user-info/sidebar-user-info";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { UserContext } from "@features/ui/user-context";
import { ThemeContext } from "@features/ui/theme-provider";
import { DarkModeToggle } from "../dark-mode-toggle";
import { Search } from "../search/search";
import * as L from "./navigation-link";
import * as N from "./navigation.style";
import * as M from "@mui/material";
import * as R from "@features/index";

const navLinks = [
  { text: "Home", href: Routes.home },
  { text: "See All Posts", href: Routes.seePosts },
  { text: "Create Post", href: Routes.createPost },
];
export function NavigationMenu() {
  const router = useRouter();

  const { userInfo, setUserInfo } = useContext(UserContext);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [logout, setLogout] = useState(false);
  const [isOpensearch, setOpenSearch] = useState(false);
  const { mode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://post-to.vercel.app/api/auth/user-profile", {
      credentials: "include",
    }).then((res) => {
      res.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    fetch(`https://post-to.vercel.app/api/users/${userInfo?.id}`).then(
      (res) => {
        res.json().then((user) => {
          setUserData(user);
        });
      }
    );
  }, [userInfo?.id]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = async () => {
    try {
      await fetch("https://post-to.vercel.app/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });

      setUserInfo(null);

      router.push(Routes.home);
    } catch (error) {
      console.log(error);
    }
  };
  const { profilePic, _id } = userData?.data || {};
  const hasUser = _id;
  return (
    <>
      <N.NavBar>
        <N.Logo>
          <Link href={Routes.home} passHref>
            <L.Anchor>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/postto.png" alt="post.to" style={{ width: "50px" }} />
              Post.to
            </L.Anchor>
          </Link>
        </N.Logo>
        <N.DarkAndMenu>
          <N.SearchButton mode={mode} onClick={() => setOpenSearch(true)}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icons/search.svg" alt="search" />
          </N.SearchButton>
          <DarkModeToggle />
          <N.MenuButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {hasUser ? (
              <N.Avatar src={profilePic} alt="pic" />
            ) : (
              <N.MenuIcon src="/icons/menu-icon.svg" alt="menu" />
            )}
          </N.MenuButton>
          <M.Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <M.MenuItem
              style={{
                flexDirection: "column",
                fontFamily: "Inter",
              }}
            >
              {userInfo?.username && (
                <>
                  <N.Name>Hi {userInfo?.username}!</N.Name>
                  {navLinks.map((link: any, index) => (
                    <L.NavigationLink key={index} {...link} />
                  ))}
                  <L.NavigationLink
                    href={`/settings-page/${userInfo.id}`}
                    text="Settings"
                  />
                  <R.ButtonUi
                    color={R.ButtonColor.white}
                    text="Log out"
                    onClick={() => setLogout(true)}
                  />
                </>
              )}
              {!userInfo?.username && (
                <>
                  <L.NavigationLink href={Routes.signup} text="Sign Up" />
                  <L.NavigationLink href={Routes.login} text="Login" />
                </>
              )}
            </M.MenuItem>
          </M.Menu>
        </N.DarkAndMenu>
      </N.NavBar>
      <R.CustomModal
        open={logout}
        message="Are you sure you want to log out?"
        text="Log out"
        onClose={() => setLogout(false)}
        confirm={logOut}
      />

      <Search open={isOpensearch} onClose={() => setOpenSearch(false)} />
    </>
  );
}
