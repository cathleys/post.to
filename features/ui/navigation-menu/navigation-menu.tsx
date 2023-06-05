import React from "react";
import { Routes } from "@config/routes";
import { useRouter } from "next/router";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { NavigationLink } from "./navigation-link";
import * as N from "./navigation.style";
import { ButtonUi } from "@features/index";
import { ButtonColor } from "../button/button";

const menuLinks = [
  { text: "Sign up", href: Routes.signup },
  { text: "Login", href: Routes.login },
];

export function NavigationMenu() {
  const router = useRouter();
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
          {menuLinks.map((menuLink, index) => (
            <NavigationLink
              key={index}
              isActive={router.pathname === menuLink.href}
              href={menuLink.href}
              text={menuLink.text}
            />
          ))}
        </MenuItem>
      </Menu>
      {/* Desktop View */}
      <N.MenuLinks>
        <ButtonUi
          text="Sign up"
          href={Routes.signup}
          color={ButtonColor.white}
        />

        <ButtonUi text="Login" href={Routes.login} color={ButtonColor.dark} />
      </N.MenuLinks>
    </N.NavBar>
  );
}
