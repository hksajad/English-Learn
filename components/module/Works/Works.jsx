import Link from "next/link";

const Works = () => {
  return (
    <div className="works mt-[100px] bg-[#F7F7F7]">
      <div className="content_works pt-[20px] pb-[20px] flex justify-around items-center max-[992px]:gap-5 max-[768px]:flex-col p-5">
        {/* img work */}
        <div className="img_work">
          <img
            src="/img/img_work-mainPage.png"
            alt="wotkImage"
            className="w-[400px] max-[768px]:w-full"
          />
        </div>
        {/* caption works */}
        <div className="caption_works flex flex-col w-[500px] p-5  max-[768px]:w-full max-[768px]:mt-5 max-[768px]:text-center">
          <div className="title_works">
            <span className="text-[#ff3e54da] text-[24px] font-bold">
              \ ما چه کار می کنیم \
            </span>
            <h1 className="text-[30px] font-bold mt-3 text-[#0E1F51] mb-10 text-justify max-[992px]:text-[25px] max-[768px]:text-center max-[768px]:text-[20px]">ما محصولی را توسعه می دهیم که مردم عاشق استفاده هستند.</h1>
            <Link href='/' className="text-[#fff] bg-[#ff3e54da] w-fit px-3 py-3 rounded-md">بیشتر بدانید</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
