import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
const Contact = () => {
  return (
    <div className="Contact mt-[100px]" id="Contact">
      <div className="title_contact flex justify-center items-center flex-col">
        <span className="text-[#ff3e54da] font-bold text-[20px]">
          \ تماس بگیرید \
        </span>
        <h1 className="text-[#0E1F51] font-bold text-[30px]">
          {" "}
          با ما در تماس باشید{" "}
        </h1>
      </div>
      <div className="form mt-[50px] flex justify-around items-center gap-5 max-[768px]:flex-col">
        <div className="info_form pt-5 pb-5 flex items-center flex-col bg-[#F7F7F7] w-[360px]  rounded-md max-[768px]:w-full">
          <div className="call flex flex-col items-center">
            <span className="text-[#0E1F51] text-[20px] font-bold">
              در هر زمان تماس بگیرید
            </span>
            <div className="icon_call flex items-center mt-3 gap-1">
              <FaPhone className="text-[#ff3e54da] text-[20px]" />
              <span className="text-[#0E1F51] text-[20px] font-medium">
                09162730644
              </span>
            </div>
          </div>
          <div className="email mt-8 flex flex-col items-center">
            <span className="text-[#0E1F51] text-[20px] font-bold">
              ارسال ایمیل
            </span>
            <div className="icon_call flex items-center mt-3 gap-1">
              <MdOutlineMail className="text-[#ff3e54da] text-[20px]" />
              <span className="text-[#0E1F51] text-[20px] font-medium">
                info@gmail.com
              </span>
            </div>
          </div>
          <div className="email mt-8 flex flex-col items-center">
            <span className="text-[#0E1F51] text-[20px] font-bold">
              از ما دیدن کنید
            </span>
            <div className="icon_call flex items-center mt-3 gap-1">
              <FaLocationDot className="text-[#ff3e54da] text-[20px]" />
              <span className="text-[#0E1F51] text-[16px] font-medium">
                ایران , کرمان
              </span>
            </div>
          </div>
        </div>
        <div className="contactForm  w-[750px] max-[992px]:w-[500px] max-[768px]:w-full">
          <form className="form flex flex-col gap-5">
            <input
              type="text"
              placeholder="نام و نام خانوادگی"
              className="w-full border-2 p-1 outline-none"
            />
            <input
              type="email"
              placeholder="ایمیل"
              className="w-full border-2 p-1 outline-none"
            />
            <input
              type="number"
              placeholder="تلفون"
              className="w-full border-2 p-1 outline-none"
            />
            <textarea name="massage" placeholder="پیام خود را وارد کنید" className="w-full border-2 p-1 outline-none min-h-[100px]"></textarea>
            <div className="link_contact">
              <Link href='/' className="bg-[#ff3e54da] text-[#fff] w-fit px-4 py-2 rounded-md">ارسال پیام</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
