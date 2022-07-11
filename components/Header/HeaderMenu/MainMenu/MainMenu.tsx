import React from "react";
import ActiveLink from "../../../UiElements/NavLink/NavLink";
import Menu, { MenuItem, MenuLink } from "./MainMenu.styled";

const menuItems = [
  {
    id: 1,
    label: "Overview",
    path: "/",
  },
  {
    id: 2,
    label: "Prices",
    path: "/prices",
  },
  {
    id: 3,
    label: "Charts",
    path: "/charts",
  },
  {
    id: 4,
    label: "DeFi",
    path: "/defi",
  },
  {
    id: 5,
    label: "NFTs",
    path: "/nft",
  },
];

type MenuProps = {
  className?: string;
  onClick?: () => void;
};

const MainMenu = ({ className, onClick }: MenuProps) => {
  return (
    <Menu className={className}>
      {menuItems.map((item) => (
        <MenuItem key={`top-menu--item${item.id}`} onClick={onClick}>
          <ActiveLink activeClassName="active" href={item.path}>
            <MenuLink>{item.label}</MenuLink>
          </ActiveLink>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default MainMenu;
