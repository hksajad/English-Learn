import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const TestimonialsItems = [
    { id: 1, img: "/img/Testimonials1.png", name: "احسان تهامی" , caption:"این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود." },
    { id: 2, img: "/img/Testimonials2.png", name: "مریم جوادی" , caption:"این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود." },
    { id: 3, img: "/img/Testimonials3.png", name: "آتنا حسینی" , caption:"این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود." },
  ];
  return (
    <div className="Testimonials mt-[100px]">
      <div className="title-Testimonials flex flex-col justify-center items-center">
        <span className="text-[#ff3e54da] font-bold text-[20px]">
          \ از مشتریان ما \
        </span>
        <h1 className="text-[#0E1F51] font-bold text-[40px]"> مشتریان </h1>
      </div>
      <div className="item_Testimonials mt-[50px] w-full flex justify-around items-center flex-wrap">
        {TestimonialsItems.map((index) => (
          <div className="box bg-[#F7F7F7] w-[300px] rounded-lg flex justify-center items-center flex-col p-[20px] max-[992px]:m-5 max-[992px]:w-[250px] max-[768px]:w-full" key={index.id}>
            <Image src={index.img} width={80} height={80}/>
            <div className="title_plan pt-4 text-[#0E1F51] font-extrabold text-[20px]">{index.name}</div>
            <div className="caption_plan mt-4"><p className="text-justify text-[#0E1F51] font-medium text-[16px]">{index.caption}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
