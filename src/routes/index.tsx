import HomePage from "@/pages/home";
import ProfilePage from "@/pages/profile";
import EditPage from "@/pages/profile/edit";
import AboutEdit from "@/pages/profile/edit/about";
import PersonalEdit from "@/pages/profile/edit/personal";
import SkillsEdit from "@/pages/profile/edit/skills";
import SocialsEdit from "@/pages/profile/edit/socials";
import UsersPage from "@/pages/users";
import { Route, Routes } from "react-router-dom";

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="users" element={<UsersPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="profile/edit" element={<EditPage />}>
                <Route path="/profile/edit/personal" element={<PersonalEdit />} />
                <Route path="/profile/edit/about" element={<AboutEdit />} />
                <Route path="/profile/edit/socials" element={<SocialsEdit />} />
                <Route path="/profile/edit/skills" element={<SkillsEdit />} />
            </Route>
        </Routes>
    )
}

export default Routers;