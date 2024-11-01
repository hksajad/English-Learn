import Link from "next/link";
import React from "react";
import { FaRegUserCircle } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="AboutUs">
      <div className="title_about-us flex flex-col justify-center items-center  bg-[#ebebebdc] h-[200px]">
        <h1 className="text-[#0E1F51] text-[48px] font-bold">درباره ما</h1>
        <span className="text-[#ff3e54da] font-medium">
          درباره ما / <Link href="/">صفحه اصلی</Link>
        </span>
      </div>
      {/* about content */}
      <div className="AboutUs mt-[100px] bg-[#fff]">
        <div className="content_works pt-[20px] pb-[20px] flex justify-around items-center max-[992px]:gap-5 max-[768px]:flex-col p-5">
          {/* img work */}
          <div className="img_about">
            <img
              src="/img/aboutPageImg.png"
              alt="wotkImage"
              className="w-[400px] max-[768px]:w-full"
            />
          </div>
          {/* caption works */}
          <div className="captionAbout flex flex-col w-[500px] p-5  max-[768px]:w-full max-[768px]:mt-5 max-[768px]:text-center">
            <div className="title_works">
              <span className="text-[#ff3e54da] text-[24px] font-bold">
                \ درباره ما \
              </span>
              <h1 className="text-[30px] font-bold mt-3 text-[#0E1F51] mb-5 text-justify max-[992px]:text-[25px] max-[768px]:text-center max-[768px]:text-[20px]">
                یکی از سریع ترین راه ها برای رشد کسب و کار
              </h1>
              <p className="text-justify text-[#0E1F51]">
                فناوری اطلاعات نه تنها به عنوان یک ابزار، بلکه به عنوان یک نیروی
                محرکه در تغییرات اجتماعی و اقتصادی عمل می‌کند. با پیشرفت‌های
                مداوم در این حوزه، آینده‌ای روشن و پر از فرصت‌های جدید برای
                افراد و سازمان‌ها در انتظار است
              </p>
              <div className="Professional flex items-center gap-3 bg-[#ebebebdc] w-full p-5 mt-8 rounded-md">
                <FaRegUserCircle className="text-[#ff3e54da] text-[30px]" />
                <div className="items flex">
                  <span className="text-[#0E1F51] max-[768px]:text-[16px] max-[992px]:text-[18px] font-bold">
                    مشاوره حرفه ای    :
                  </span>
                  <span className="text-[#0E1F51] max-[768px]:text-[16px] max-[992px]:text-[18px] font-bold">09162730644</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
