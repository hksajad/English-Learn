import React from "react";
import BlogData from "@/Data/Blog";
import Image from "next/image";
import Link from "next/link";
const Blog = () => {
  return (
    <div className="Blog mt-[100px]">
      <div className="title_blog flex flex-col justify-center items-center">
        <span className="text-[#ff3e54da] font-bold text-[20px]">
          \ وبلاگ ما \
        </span>
        <h1 className="text-[#0E1F51] font-bold text-[30px]"> آخرین پست </h1>
      </div>
      <div className="contentblog mt-[50px] flex justify-around items-center flex-wrap">
        {BlogData.map((index) => (
          <div
            className="  bg-[#ededed] w-[300px] py-4  rounded-md max-[768px]:w-full max-[992px]:m-2"
            key={index.id}
          >
            <div className="imgBlog flex flex-col justify-center items-center px-5 ">
              <Image
                src={index.imgblog}
                width={320}
                height={200}
                className="cursor-pointer"
              />
            </div>
            <div className="titleBlog px-5 pt-3">
              <h1 className="text-[#ff3e54da] font-bold text-[20px]">
                {index.titleblog}
              </h1>
            </div>
            <div className="dateName flex justify-between items-center px-5 pt-5">
              <span className="font-semibold text-[14px] text-[#0E1F51]">
                {index.date}
              </span>
              <div className="name flex gap-1 items-center flex-row-reverse">
                <Image src={index.icon} width={30} height={30} />
                <span className="text-[#0E1F51]">{index.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="link_blog flex justify-center mt-14">
        <Link href="/" className="bg-[#ff3e54da] text-[#fff] w-fit px-4 py-2 rounded-md">بیشتر</Link>
      </div>
    </div>
  );
};

export default Blog;
