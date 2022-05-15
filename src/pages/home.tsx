import { Button } from "@/components/base/button";

const HomePage = () => {
  return (
    <>
      <div className="lg:flex lg:gap-20 lg:my-10 lg:items-center lg:p-0">
        <img
          loading="lazy"
          draggable="false"
          className="lg:w-2/5 fading p-10 lg:p-0"
          src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody-flying_red"
        />
        <div className="lg:w-3/5 text-center lg:text-right">
          <div className="flex flex-col gap-5">
            <h1 className="font-bold lg:text-4xl text-2xl text-slate-500 dark:text-gray-200">
              با همکاری رزومتو به اشتراک بزار
            </h1>
            <p className="lg:text-base text-sm leading-6 text-justify">
              <span className="font-semibold text-primary">Hamkari </span>
              مقصد اصلی برای یافتن و نمایش کارهای خلاقانه و خانه بهترین متخصصان
              طراحی جهان است. طراحان سایت هنگام طراحی قالب سایت معمولا با این
              موضوع رو برو هستند که محتوای اصلی صفحات آماده نیست
            </p>
          </div>
          <Button className="mt-4" color="primary" rounded>همین حالا شروع کنید</Button>
        </div>
      </div>

      <div className="lg:mt-32 mt-8 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-5">
        <div className="bg-white rounded-lg dark:bg-darker dark:shadow-none duration-150 cursor-pointer shadow-md shadow-gray-300/30 flex flex-col gap-2 p-8">
          <div className="flex items-center gap-5">
            <img
              className="w-14"
              draggable="false"
              src="https://liara.ir/static/launch-instantly-63147d5971f0dc69be2207e20b0a8a27.svg"
            />
            <h2 className="text-primary">به راحتی رزومه بساز</h2>
          </div>
          <p className="text-sm text-justify">
            با ثبت نام در پلتفرم نوین سوشیال شما میتوانید از ویژگی ساخت رزمه
            بهره مند شوید
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-darker dark:shadow-none duration-150 cursor-pointer shadow-md shadow-gray-300/30 flex flex-col gap-2 p-8">
          <div className="flex items-center gap-5">
            <img
              className="w-14"
              draggable="false"
              src="https://liara.ir/static/high-speed-62474b1fc188de253be825950e0b3243.svg"
            />
            <h2 className="text-primary">سرعت فوق‌العاده در اجرا</h2>
          </div>
          <p className="text-sm text-justify">
            با ثبت نام در پلتفرم نوین سوشیال شما میتوانید از ویژگی ساخت رزمه
            بهره مند شوید
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-darker dark:shadow-none duration-150 cursor-pointer shadow-md shadow-gray-300/30 flex flex-col gap-2 p-8">
          <div className="flex items-center gap-5">
            <img
              className="w-14"
              draggable="false"
              src="https://liara.ir/static/ready-apps-c62816de40a16a6a308c3353f83fbe35.svg"
            />
            <h2 className="text-primary">اشتراک گذاری در شبکه های اجتماعی</h2>
          </div>
          <p className="text-sm text-justify">
            با ثبت نام در پلتفرم نوین سوشیال شما میتوانید از ویژگی ساخت رزمه
            بهره مند شوید
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-darker dark:shadow-none duration-150 cursor-pointer shadow-md shadow-gray-300/30 flex flex-col gap-2 p-8">
          <div className="flex items-center gap-5">
            <img
              className="w-14"
              draggable="false"
              src="https://liara.ir/static/auto-backup-13ecb51d35070f7a8129730cff375809.svg"
            />
            <h2 className="text-primary">پشتیبان‌گیری خودکار</h2>
          </div>
          <p className="text-sm text-justify">
            با ثبت نام در پلتفرم نوین سوشیال شما میتوانید از ویژگی ساخت رزمه
            بهره مند شوید
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-darker dark:shadow-none duration-150 cursor-pointer shadow-md shadow-gray-300/30 flex flex-col gap-2 p-8">
          <div className="flex items-center gap-5">
            <img
              className="w-14"
              draggable="false"
              src="https://liara.ir/static/free-ssl-5191e14c60cf86c73c7df0943eb51387.svg"
            />
            <h2 className="text-primary">استقرار بدون اختلال</h2>
          </div>
          <p className="text-sm text-justify">
            با ثبت نام در پلتفرم نوین سوشیال شما میتوانید از ویژگی ساخت رزمه
            بهره مند شوید
          </p>
        </div>
        <div className="bg-white rounded-lg dark:bg-darker dark:shadow-none duration-150 cursor-pointer shadow-md shadow-gray-300/30 flex flex-col gap-2 p-8">
          <div className="flex items-center gap-5">
            <img
              className="w-14"
              draggable="false"
              src="https://liara.ir/static/view-reports-42c542be18b38e9a7362cfe5663c4120.svg"
            />
            <h2 className="text-primary">مقایس پذیری بالا در دیده شدن</h2>
          </div>
          <p className="text-sm text-justify">
            با ثبت نام در پلتفرم نوین سوشیال شما میتوانید از ویژگی ساخت رزمه
            بهره مند شوید
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;