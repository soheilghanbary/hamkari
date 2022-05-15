const Footer = () => (
  <footer className="border-t dark:bg-darker bg-lighter dark:border-gray-600 border-slate-200 py-32 px-10">
    <section className="grid xl:grid-cols-3 lg:grid-cols-3  gap-20 max-w-screen-xl mx-auto">
      <div>
        <h2 className="text-3xl dark:text-gray-100 font-medium mb-6 text-slate-500">
          Hamkari.com
        </h2>
        <h3 className="text-base leading-8">
          ساخت سیستم یکپارچه کاریابی و اشتراک گذاری رزومه با پلتفرم همکاری
        </h3>
        <div className="flex gap-4 mt-8">
          <a
            href="https://github.com/kentcdodds"
            className="focus:outline-none hover:text-team-current focus:text-team-current"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <title>GitHub</title>
              <path
                fill="currentColor"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://youtube.com/c/KentCDodds-vids/videos"
            className="focus:outline-none hover:text-team-current focus:text-team-current"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <title>YouTube</title>
              <path
                fill="currentColor"
                d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/kentcdodds"
            className="focus:outline-none hover:text-team-current focus:text-team-current"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <title>Twitter</title>
              <path
                fill="currentColor"
                d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"
              ></path>
            </svg>
          </a>
          <a
            href="https://kentcdodds.com/blog/rss.xml"
            className="focus:outline-none hover:text-team-current focus:text-team-current"
          >
            <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
              <title>RSS</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.33465 15.52C6.23018 15.52 5.33459 16.4153 5.33459 17.5199C5.33459 18.6244 6.23018 19.5201 7.33465 19.5201C8.43912 19.5201 9.33471 18.6244 9.33471 17.5199C9.33471 16.4153 8.43912 15.52 7.33465 15.52Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33472 10.52V13.0919C8.87972 13.0919 11.7639 15.9753 11.7639 19.5202H14.3347C14.3347 14.5577 10.2973 10.52 5.33472 10.52Z"
                fill="currentColor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.33472 5.52002V8.18702C11.5846 8.18702 16.6688 13.2701 16.6688 19.52H19.3347C19.3347 11.8001 13.0546 5.52002 5.33472 5.52002Z"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-xl dark:text-gray-100 font-medium mb-8 text-slate-500">
          دسترسی ها
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">صفحه اصلی</li>
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">دسته بندی</li>
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">کاربران</li>
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">جستجو مشاغل</li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">درباره همکاری</li>
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">ارتبط با ما</li>
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">رزومه ساز</li>
            <li className="hover:text-primary hover:cursor-pointer duration-150 ease-in">همکاری چیست؟</li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-xl dark:text-gray-100 font-medium mb-8 text-slate-500">
          به روز باشید
        </h2>
        <h3 className="text-base leading-8">
          در خبرنامه مشترک شوید تا از مقالات، دوره ها و موارد دیگر مطلع شوید!
          بیشتر بدانید
        </h3>
        <input
          className="input-base w-full my-6"
          placeholder="آدرس ایمیل"
        />
        <button className="btn primary btn-sm">من را ثبت نام کن</button>
      </div>
    </section>
  </footer>
);

export default Footer;
