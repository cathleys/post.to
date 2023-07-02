import React from "react";
import { Routes } from "@config/routes";
import Link from "next/link";
import { Menu, MenuItem } from "@mui/material";
import { Anchor, NavigationLink } from "./navigation-link";
import * as N from "./navigation.style";

// const menuLoggedinLinks = [
//   { text: "Home", href: Routes.home },
//   { text: "Create post", href: Routes.createPost },
//   { text: "Settings", href: Routes.settings },
//   { text: "Logout", href: Routes.home }
// ];

export function NavigationMenu() {
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
          <Anchor>Post.to</Anchor>
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
          }}
        >
          <NavigationLink href={Routes.signup} text="Sign Up" />
          <NavigationLink href={Routes.login} text="Login" />
        </MenuItem>
      </Menu>
    </N.NavBar>
  );
}
