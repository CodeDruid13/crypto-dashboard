import React from "react";
import Link from "next/link";
import Menu, { MenuItem, MenuLink } from "./TopMenu.style";
import ActiveLink from "components/UiElements/NavLink/NavLink";
// import Menu, { MenuItem, MenuLink } from "./MainMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Blog",
    path: "#",
  },
  {
    id: 2,
    label: "Privacy",
    path: "#",
  },
  {
    id: 3,
    label: "Terms",
    path: "#",
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const TopMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map((item) => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>

          {/* <Link activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </Link> */}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default TopMenu;
