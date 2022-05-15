import users from "@/utils/users.json";
import { useNavigate } from "react-router-dom";

const avatar =
  "https://cdna.iconscout.com/production/img/attHaQjnG3YXXPILn.459bba8.png?w=200&h=0";

const ProfilePage = () => {
  const navigate = useNavigate()
  const user = { ...users[0] };
  return (
    <>
      <div className="flex gap-4 lg:flex-row flex-col md:flex-row">
        <div className="profile__card lg:w-1/2 md:w-1/2 relative md:flex md:justify-center md:items-center">
          <div className="flex gap-4 lg:gap-10 2xl:flex-row 2xl:items-center 2xl:text-right xl:text-center xl:flex-col xl:items-center text-right md:flex-col md:text-center md:items-center sm:flex-row sm:text-right items-center w-full">
            <img
              src={avatar}
              draggable="false"
              className="w-20 h-20 lg:w-32 lg:h-32"
            />
            <div className="flex flex-col gap-3">
              <h1 className="profile__card__name">{user.name}</h1>
              <h3 className="profile__card__role">{user.job_title}</h3>
              <h4 className="profile__card__subtitle">
                وب سایت : <span className="text-primary">{user.website}</span>
              </h4>
            </div>
          </div>
          <button onClick={() => navigate('/profile/edit/personal')} className="absolute top-5 left-5 text-primary bg-primary/30 rounded-full p-2 active:scale-90 duration-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
        <div className="lg:w-1/2 md:w-full rounded-xl bg-white shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">اطلاعات فردی</h3>
          <div className="grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 md:grid-cols-3 grid-cols-2 mt-8 gap-8">
            <div className="flex flex-col gap-2 text-sm items-center">
              <span>آدرس ایمیل</span>
              <span>{user.email}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm items-center">
              <span>شماره تلفن</span>
              <span>{user.phone}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm items-center">
              <span>استان سکونت</span>
              <span>{user.city}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm items-center">
              <span>سال تولد</span>
              <span>{user.birthday}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm items-center">
              <span>جنسیت</span>
              <span>{user.gender}</span>
            </div>
            <div className="flex flex-col gap-2 text-sm items-center">
              <span>وضعیت تاهل</span>
              <span>{user.marital}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4 flex-col lg:flex-row md:flex-row">
        <div className="lg:w-2/4 xl:w-2/3 md:w-3/5 w-full rounded-xl bg-lighter shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">درباره من</h3>
          <p className="text-sm mt-4 leading-8 text-justify">{user.about}</p>
        </div>
        <div className="lg:w-2/4 xl:w-1/3 md:w-2/5 w-full rounded-xl bg-lighter shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">شبکه های اجتماعی</h3>
          <div className="flex mt-4 flex-col gap-4">
            <div className="flex items-center gap-4 text-sm">
              <img src="/icons/github.svg" className="w-6" />
              <span>{user.github}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <img src="/icons/instagram.svg" className="w-6" />
              <span>{user.instagram}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <img src="/icons/twitter.svg" className="w-6" />
              <span>{user.twitter}</span>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <img src="/icons/linkedin.svg" className="w-6" />
              <span>{user.linkedin}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4 flex-col xl:flex-row lg:flex-col md:flex-row">
        <div className="lg:w-full xl:w-3/5 md:w-1/2 rounded-xl bg-white shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">مهارت ها</h3>
          <ul className="flex flex-wrap gap-2 cursor-pointer items-center mt-4">
            {user.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-lightest dark:shadow-none dark:bg-darkest py-1 px-4 rounded-md shadow-md shadow-gray-300/30 leading-8"
              >
                {skill}
              </span>
            ))}
          </ul>
        </div>
        <div className="lg:w-full xl:w-2/5 md:w-1/2 rounded-xl bg-white shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">سوابق کاری</h3>
          <div className="flex flex-col gap-3 mt-8">
            {user.resumes.map((resume) => (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <span className="text-sm">{resume.name}</span>
                </div>
                <span>از سال {resume.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4 lg:flex-row md:flex-row flex-col">
        <div className="lg:w-1/2 md:w-1/2 rounded-xl bg-white shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">زبان های مسلط</h3>
          <div className="flex flex-col gap-3 mt-8">
            {user.languages.map((lang) => (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="text-sm">{lang.name}</span>
                </div>
                <span>{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 md:w-1/2 rounded-xl bg-white shadow-md shadow-gray-300/30 dark:bg-darker dark:shadow-none p-10">
          <h3 className="text-lg font-semibold">سوابق تحصیلی</h3>
          <div className="flex flex-col gap-3 mt-8">
            {user.educations.map((edu) => (
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <span className="text-sm">{edu.name}</span>
                </div>
                <span>سال {edu.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
