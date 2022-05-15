import NavButtons from "./nav-buttons";
import NavList from "./nav-list";
import NavLogo from "./nav-logo";

const navs = [
  {
    title: "صفحه اصلی",
    href: "/",
  },
  {
    title: "دسته بندی",
    href: "/category",
  },
  {
    title: "کاربران",
    href: "/users",
  },
  {
    title: "جستجوی مشاغل",
    href: "/jobs",
  },
  {
    title: "رزومه ساز",
    href: "/profile",
  },
];

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLogo />
      <NavList items={navs} />
      <NavButtons />
    </nav>
  );
};

export default Navbar;
