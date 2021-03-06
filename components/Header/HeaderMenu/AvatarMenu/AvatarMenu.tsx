import React from "react";
import Router from "next/router";
import { Block } from "baseui/block";
import { Avatar } from "baseui/avatar";
import { StatefulPopover } from "baseui/popover";
import ActiveLink from "../../../UiElements/NavLink/NavLink";
import MenuWrapper, { Line, MenuItem } from "./AvatarMenu.styled";
import {
  useThemeSwitcherCtx,
  THEME,
} from "../../../../contexts/theme/theme.provider";

type AvatarMenuType = {
  name?: string;
  src?: string;
  placement?: any;
  showOnlyMenu?: boolean;
  onClick?: () => void;
};

type MenuType = {
  onClick?: () => void;
};

const Menu = ({ onClick }: MenuType) => {
  const { theme, setTheme } = useThemeSwitcherCtx();
  return (
    <MenuWrapper>
      <li>
        <ActiveLink activeClassName="active" href="/">
          <MenuItem onClick={onClick}>Dashboard</MenuItem>
        </ActiveLink>
      </li>
      <Line></Line>
      <li>
        <ActiveLink activeClassName="active" href="#">
          <MenuItem onClick={onClick}>Settings</MenuItem>
        </ActiveLink>
      </li>
      <Line></Line>
      <li>
        <MenuItem
          onClick={() => {
            let getTheme = theme === THEME.light ? THEME.dark : THEME.light;
            setTheme(getTheme);
            localStorage.setItem("theme", getTheme);
          }}
        >
          {theme === THEME.light ? "Dark Mode" : "Light Mode"}
        </MenuItem>
      </li>
      <Line></Line>
      <li onClick={() => Router.push("#")}>
        <MenuItem onClick={onClick}>Logout</MenuItem>
      </li>
    </MenuWrapper>
  );
};

const AvatarMenu = ({
  name,
  src,
  placement,
  showOnlyMenu,
  onClick,
}: AvatarMenuType) => {
  return (
    <>
      {showOnlyMenu ? (
        <Menu onClick={onClick} />
      ) : (
        <StatefulPopover
          content={<Menu onClick={onClick} />}
          placement={placement ? placement : "bottomRight"}
          overrides={{
            Inner: {
              style: ({ $theme }) => {
                return {
                  backgroundColor: $theme.colors.primaryB,
                };
              },
            },
          }}
          showArrow
        >
          <Block overrides={{ Block: { style: { cursor: "pointer" } } }}>
            <img
              src={src}
              style={{
                borderRadius: "50%",
                height: "25px",
              }}
            />
          </Block>
        </StatefulPopover>
      )}
    </>
  );
};

export default AvatarMenu;
