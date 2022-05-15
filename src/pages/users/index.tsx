import TextField from "@/components/forms/TextField";

const users = [
  {
    name: "سهیل قنبری",
    role: "مدیر عامل همکاری",
    image:
      "https://cdna.iconscout.com/production/img/attHaQjnG3YXXPILn.459bba8.png?w=200&h=0",
  },
  {
    name: "رها موسوی",
    role: "طراح UI/UX",
    image:
      "https://pbs.twimg.com/profile_images/1157880409851432960/9n7HSjC8_400x400.jpg",
  },
  {
    name: "علیرضا احمدی",
    role: "سئو کار",
    image:
      "https://cdna.iconscout.com/production/img/attdLkpLYHD0hj0vM.523fbb4.png?w=200&h=0",
  },
  {
    name: "محمد جواد احمدیان",
    role: "توسعه دهنده سرور",
    image:
      "https://cdna.iconscout.com/production/img/attcIoDCfQSnFfDb6.52d26fc.png?w=200&h=0",
  },
  {
    name: "سهیل اکبرزاده",
    role: "برنامه نویس PHP",
    image:
      "https://cdna.iconscout.com/production/img/atti7YGAr4Ey6gqXi.0e4f40d.png?w=200&h=0",
  },
  {
    name: "امیر علی علیشاهی",
    role: "متخصص هک و امنیت",
    image:
      "https://cdna.iconscout.com/production/img/attA1PsitcSibxqCZ.5f5188a.png?w=200&h=0",
  },
];

const UsersPage = () => {
  return (
    <>
      <div className="mb-4 p-6 rounded-lg dark:bg-darker gap-5 items-center bg-lighter">
        <h1 className="text-xl font-medium text-center mb-8">
          ۲۳,۸۵۲ کاربر فعال در ۸,۰۷۲ شرکت ایرانی
        </h1>
        <div className="gap-4 grid xl:grid-cols-9 lg:grid-cols-8 grid-cols-4">
          <input
            type={"text"}
            className="input-base lg:col-span-8 xl:col-span-4 col-span-4 md:col-span-9"
            placeholder="مثلا: سهیل قنبری"
          />
          <input
            type={"text"}
            className="input-base lg:col-span-4 xl:col-span-2 col-span-2 md:col-span-3"
            placeholder="استان ها"
          />
          <input
            type={"text"}
            className="input-base lg:col-span-4 xl:col-span-2 col-span-2 md:col-span-3"
            placeholder="دسته بندی"
          />
          <button className="btn primary lg:col-span-8 xl:col-span-1 col-span-4 md:col-span-3">
            جستجو
          </button>
        </div>
      </div>
      <ul className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4">
        {users.map((user) => (
          <li className="flex items-center gap-4 p-4 bg-lighter dark:bg-darker rounded-lg hover:ring-2 ring-primary dark:ring-gray-400 cursor-pointer duration-200">
            <img src={user.image} className="w-16 h-16 rounded-full" />
            <div className="flex flex-col gap-1">
              <span className="text-slate-500 dark:text-gray-200 font-medium text-base">{user.name}</span>
              <span className="text-gray-400 text-sm">{user.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
