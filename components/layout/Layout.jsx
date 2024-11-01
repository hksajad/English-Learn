import Image from "next/image";
import Link from "next/link";
import React from "react";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div className="container mx-auto">
      {/* start Navbar */}
      <nav className="navbar w-full  my-[40px] flex justify-between items-center max-[768px]:my-[30px]">
        {/* login */}
        <div className="loginNav">
          <Link
            href="#Contact"
            className="bg-[#ff3e54da] w-fit rounded-md px-3 py-3 text-[#FFF] font-bold"
          >
            تماس بگیرید
          </Link>
        </div>
        {/* menu */}
        <div className="menu flex flex-1 mx-5 gap-8 max-[992px]:gap-4 max-[992px]:mx-3">
          <li className="text-[#0E1F51] font-bold text-[20px]">
            <Link href="/">صفحه اصلی</Link>
          </li>
          <li className="text-[#0E1F51] font-bold text-[20px]">
            <Link href="/AboutPage">درباره ما</Link>
          </li>
          <li className="text-[#0E1F51] font-bold text-[20px]">
            <Link href="/">خدمات</Link>
          </li>
          <li className="text-[#0E1F51] font-bold text-[20px]">
            <Link href="/">نمونه کارها</Link>
          </li>
          <li className="text-[#0E1F51] font-bold text-[20px]">
            <Link href="/">بلاگ</Link>
          </li>
        </div>
        {/* logo */}
        <div className="logo_nav flex items-center flex-row-reverse gap-3">
          <img src="img/logo.png" alt="logoNav" />
          <span className="font-bold text-[#0E1F51] text-[20px]">IT App</span>
        </div>
      </nav>
      {/* start Main Page */}
      <div className="main">{children}</div>
      {/* Contact */}
      <div className="contactImg flex flex-col justify-center items-center mt-[100px]  max-[992px]:w-full">
        <p className="text-[#fff] text-[32px] font-bold text-center p-4 max-[768px]:text-[25px]">
          برخی از تاریخچه شرکت ما این است که ما از طریق ویدیو در حال پیشرفت
          هستیم.
        </p>
        <Link
          href="#Contact"
          className="bg-[#ff3e54da] w-fit rounded-md px-3 py-3 text-[#FFF] font-bold"
        >
          تماس بگیرید
        </Link>
      </div>
      {/* start footer */}
      <footer className="footer bg-[#F7F7F7] mt-[100px]">
        <div className="footer flex justify-center items-center pt-2 pb-2 gap-5 max-[768px]:gap-1">
          <h1 className="text-[#0e1f51]">طراحی شده توسط</h1>
          <Link href="https://developmart.ir/">
            <Image src="/img/logo-light.png" width={200} height={200} />
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
