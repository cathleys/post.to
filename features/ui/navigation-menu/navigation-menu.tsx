import React, { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { Anchor, NavigationLink } from "./navigation-link";
import { ButtonColor, ButtonUi } from "@features/ui/button";
import { Buttons } from "@features/single-post/components/single-post.style";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as N from "./navigation.style";
import { UserContext } from "@features/ui/user-context";
import { DarkModeToggle } from "../dark-mode-toggle";

const navLinks = [
  { text: "Home", href: Routes.home },
  { text: "Create Post", href: Routes.createPost },
  { text: "Settings", href: Routes.settings },
];
export function NavigationMenu() {
  const router = useRouter();
  const { userInfo, setUserInfo } = useContext(UserContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [logout, setLogout] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/api/auth/user-profile", {
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
      await fetch("http://localhost:3000/api/auth/logout", {
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
                  {navLinks.map((link: any, index) => (
                    <NavigationLink key={index} {...link} />
                  ))}
                  <NavigationLink
                    href={""}
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

      <Modal open={logout} onClose={() => setLogout(false)}>
        <Box sx={N.style}>
          Are you sure you want to log out?
          <br />
          <br />
          <br />
          <Buttons>
            <ButtonUi
              text="Cancel"
              color={ButtonColor.white}
              onClick={() => setLogout(false)}
            />
            <ButtonUi
              text="Log out"
              color={ButtonColor.dark}
              onClick={logOut}
            />
          </Buttons>
        </Box>
      </Modal>
    </>
  );
}
