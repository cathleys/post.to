import React from "react";
import { Routes } from "@config/routes";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationLink } from "@features/ui";
import { Menu, MenuItem } from "@mui/material";
import * as P from "./page-container.style";

const menuLinks = [
  { text: "Home", href: Routes.home },
  { text: "Sign Up", href: Routes.signup },
  { text: "Login", href: Routes.login },
];

export function PageContainer() {
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
    <P.NavBar>
      <P.Logo>
        <Link href={Routes.home} passHref>
          Cath.to
        </Link>
      </P.Logo>

      <P.MenuButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <P.MenuIcon src="/icons/menu-icon.svg" alt="menu" />
      </P.MenuButton>
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
            padding: "0.5rem",
            justifyContent: "start",
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
      <P.MenuLinks onClick={handleClose}>
        {menuLinks.map((menuLink, index) => (
          <NavigationLink
            key={index}
            isActive={router.pathname === menuLink.href}
            href={menuLink.href}
            text={menuLink.text}
          />
        ))}
      </P.MenuLinks>
    </P.NavBar>
  );
}
