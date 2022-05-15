import { UserProps } from "@/interfaces";
import { atom } from "recoil";

export const userContext = atom<UserProps>({
  key: "user",
  default: {
    id: "",
    createdAt: "",
    updatedAt: "",
    username: "Soheil Ghanbary",
    email: "soli.ghanbary@gmail.com",
    password: "",
    avatar: "https://cdna.iconscout.com/production/img/attHaQjnG3YXXPILn.459bba8.png?w=200&h=0",
    name: "سهیل قنبری",
    job_title: "مدیرعامل همکاری",
    website: "repeatech.com",
    phone: "09308866063",
    birthday: "1381/07/0/7",
    about: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    city: { key: "tehran", label: "تهرام" },
    gender: { key: "male", label: "آقا" },
    marital: { key: "married", label: "متاهل" },
    skills: [],
    socials: {
      github: "github.com/soheilghanbary",
      linkedin: "",
      instagram: "",
      twitter: "",
    },
    resumes: [],
    languages: [],
    educations: [],
  },
});
