import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { Anchor, NavigationLink } from "./navigation-link";
import * as N from "./navigation.style";
import { UserContext } from "@features/ui/user-context";
import { DarkModeToggle } from "../dark-mode-toggle";
import { ButtonColor, ButtonUi, CustomModal } from "@features/index";
import { Search } from "../search/search";
import { ThemeContext } from "@features/ui/theme-provider";

const navLinks = [
  { text: "Home", href: Routes.home },
  { text: "See All Posts", href: Routes.seePosts },
  { text: "Create Post", href: Routes.createPost },
];
export function NavigationMenu() {
  const router = useRouter();

  const { userInfo, setUserInfo } = useContext(UserContext);
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
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

  return (
    <>
      <N.NavBar>
        <N.Logo>
          <Link href={Routes.home} passHref>
            <Anchor>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/postto.png" alt="post.to" style={{ width: "50px" }} />
              Post.to
            </Anchor>
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
            <N.MenuIcon src="/icons/menu-icon.svg" alt="menu" />
          </N.MenuButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              style={{
                flexDirection: "column",
                fontFamily: "Inter",
              }}
            >
              {userInfo?.username && (
                <>
                  <span>Hi {userInfo?.username}!</span>
                  {navLinks.map((link: any, index) => (
                    <NavigationLink key={index} {...link} />
                  ))}
                  <NavigationLink
                    href={`/settings-page/${userInfo.id}`}
                    text="Settings"
                  />
                  <ButtonUi
                    color={ButtonColor.white}
                    text="Log out"
                    onClick={() => setLogout(true)}
                  />
                </>
              )}
              {!userInfo?.username && (
                <>
                  <NavigationLink href={Routes.signup} text="Sign Up" />
                  <NavigationLink href={Routes.login} text="Login" />
                </>
              )}
            </MenuItem>
          </Menu>
        </N.DarkAndMenu>
      </N.NavBar>
      <CustomModal
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
