import { NavItemProps } from "@/interfaces";
import { Link } from "react-router-dom";
import { FC } from "react";

const NavItem: FC<NavItemProps> = ({ href, title }) => {
  return (
    <Link to={href}>
      <li className="nav-item">{title}</li>
    </Link>
  );
};

export default NavItem;
