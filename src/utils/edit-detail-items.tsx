import { AboutIcon, AtSymbolIcon, BadgeIcon, BriefcaseIcon, EarthIcon, EduIcon, UserIcon } from "@/assets/icons/icons";

const editDetailItems = [
  {
    href: "/user/edit/personal",
    title: "اطلاعات فردی",
    icon: <UserIcon />
  },
  {
    href: "/user/edit/about",
    title: "درباره من",
    icon: <AboutIcon />
  },
  {
    href: "/user/edit/socials",
    title: "شبکه های اجتماعی",
    icon: <AtSymbolIcon />
  },
  {
    href: "/user/edit/skills",
    title: "مهارت ها",
    icon: <BadgeIcon />
  },
  {
    href: "/user/edit/jobs",
    title: "سوابق شغلی",
    icon: <BriefcaseIcon />
  },
  {
    href: "/user/edit/educations",
    title: "سوابق تحصیلی",
    icon: <EduIcon />
  },
  {
    href: "/user/edit/languages",
    title: "زبان های تسلط",
    icon: <EarthIcon />
  },
];

export default editDetailItems