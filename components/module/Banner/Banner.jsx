import Image from "next/image";
import "./Banner.css";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="Banner mt-[30px] flex justify-around items-center w-full max-[768px]:flex-col max-[992px]:gap-8 max-[768px]:mt-[70px]">
      {/* img banner */}
      <div className="img_banner w-fit h-fit bg-[#ff3e54da] rounded-lg flex justify-center items-center max-[768px]:w-full">
        <Image
          src="/img/img_banner.png"
          width={310}
          height={305}
          className="w-fit max-[768px]:w-full"
        />
      </div>
      {/* caption banner */}
      <div className="caption_banner w-[500px] flex flex-col max-[768px]:justify-center max-[768px]:w-full max-[768px]:mt-3 max-[768px]:text-center max-[992px]:w-fit">
        <h1 className="text-[#ff3e54da] font-bold text-[24px]">
          \ ما اینجا هستیم \
        </h1>
        <span className="text-[#0E1F51] mt-5 text-[40px]">بینش بهتر برای رشد کسب و کار</span>
        <Link href='/AboutPage' className="w-fit bg-[#ff3e54da] px-2 py-2 mt-5 text-[#fff] rounded-lg max-[768px]:m-auto max-[768px]:mt-8">درباره ما</Link>
      </div>
    </div>
  );
};

export default Banner;
