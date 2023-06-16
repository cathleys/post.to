import React from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { Routes } from "@config/routes";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { NavigationLink } from "./navigation-link";
import { ButtonUi } from "@features/index";
import { ButtonColor } from "../button/button";
import * as N from "./navigation.style";

const menuLoggedinLinks = [
  { text: "Home", href: Routes.home },
  { text: "Create post", href: Routes.createPost },
  { text: "Settings", href: Routes.settings },
];

export function NavigationMenu() {
  const router = useRouter();
  const { status } = useSession();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <N.NavBar>
      <N.Logo>
        <Link href={Routes.home} passHref>
          Cath.to
        </Link>
      </N.Logo>

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
            margin: "0.5rem 0",
          }}
        >
          {status === "unauthenticated" ? (
            <>
              <NavigationLink href="/login" text="Login" />
              <NavigationLink href="/sign-up" text="Sign Up" />{" "}
            </>
          ) : (
            <>
              {menuLoggedinLinks.map((menuLink, index) => (
                <NavigationLink
                  key={index}
                  isActive={router.pathname === menuLink.href}
                  href={menuLink.href}
                  text={menuLink.text}
                />
              ))}
              <NavigationLink
                href=""
                text="Log out"
                onClick={() => signOut()}
              />
            </>
          )}
        </MenuItem>
      </Menu>

      {/* Desktop View */}

      {status === "unauthenticated" ? (
        <N.MenuLinks>
          <NavigationLink href={Routes.home} text="Home" />
          <ButtonUi
            text="Sign up"
            href={Routes.signup}
            color={ButtonColor.white}
          />

          <ButtonUi text="Login" href={Routes.login} color={ButtonColor.dark} />
        </N.MenuLinks>
      ) : (
        <N.MenuLinks>
          {menuLoggedinLinks.map((menuLink, index) => (
            <NavigationLink
              key={index}
              isActive={router.pathname === menuLink.href}
              href={menuLink.href}
              text={menuLink.text}
            />
          ))}
          <NavigationLink href="" text="Log out" onClick={() => signOut()} />
        </N.MenuLinks>
      )}
    </N.NavBar>
  );
}
