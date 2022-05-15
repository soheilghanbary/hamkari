import {
  UserIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  BadgeCheckIcon,
  GlobeAltIcon,
  DocumentSearchIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
const EditDetails = () => {
  return (
    <div className="edit-details">
      <ul className="edit-details-nav">
        <Link to={"/profile/edit/personal"}>
          <li>
            <UserIcon />
            <span>اطلاعات فردی</span>
          </li>
        </Link>
        <Link to={"/profile/edit/about"}>
          <li>
            <DocumentSearchIcon />
            <span>درباره من</span>
          </li>
        </Link>
        <Link to={"/profile/edit/socials"}>
          <li>
            <GlobeAltIcon />
            <span>شبکه های اجتماعی</span>
          </li>
        </Link>
        <Link to={"/profile/edit/skills"}>
          <li>
            <BadgeCheckIcon />
            <span>مهارت ها</span>
          </li>
        </Link>
        <li>
          <BriefcaseIcon />
          <span>سوابق شغلی</span>
        </li>
        <li>
          <AcademicCapIcon />
          <span>سوابق تحصیلی</span>
        </li>
      </ul>
    </div>
  );
};

export default EditDetails;
