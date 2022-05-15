import { NavListProps } from "@/interfaces";
import { FC } from "react";
import NavItem from "./nav-item";

const NavList: FC<NavListProps> = ({ items }) => (
  <ul className="nav-list">
    {items.map((item) => (
      <NavItem key={item.title} {...item} />
    ))}
  </ul>
);

export default NavList;
