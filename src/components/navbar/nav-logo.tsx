import { Link } from "react-router-dom";

const NavLogo = () => (
  <Link to={"/"}>
    <div className="nav-logo">
      <img src="https://hidev-soli.vercel.app/site.svg" />
      <h3>همکاری</h3>
    </div>
  </Link>
);

export default NavLogo;
