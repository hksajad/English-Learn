import Image from "next/image";

const Planing = () => {
  const dataPlan = [
    {
      id: 1,
      img: "/img/planing1.png",
      title: "تحقیق کنید",
      borderimg: "/img/borderPlan.png",
      caption:
        "این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود.",
    },
    {
      id: 2,
      img: "/img/planing2.png",
      title: "طراحی",
      borderimg: "/img/borderPlan.png",
      caption:
        "این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود.",
    },
    {
      id: 3,
      img: "/img/planing3.png",
      title: "توسعه دهید",
      borderimg: "/img/borderPlan.png",
      caption:
        "این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود.",
    },
    {
      id: 4,
      img: "/img/planing4.png",
      title: "تست کنید",
      borderimg: "/img/borderPlan.png",
      caption:
        "این یک واقعیت ثابت شده است که خواننده از محتوای قابل خواندن یک صفحه مضطرب می شود.",
    },
  ];
  return (
    <div className="Planing bg-[#fff] ">
      <div className="title_planing flex flex-col justify-center items-center">
        <span className="text-[#ff3e54da] font-bold text-[24px]">
          \ برنامه ریزی \
        </span>
        <h1 className="text-[#0E1F51] font-bold text-[40px]">فرآیند ما </h1>
      </div>
      <div className="items_planing mt-[50px] w-full flex justify-around items-center flex-wrap">
        {dataPlan.map((plan) => (
          <div className="content_plan bg-[#F7F7F7] w-[220px] rounded-lg flex flex-col p-[20px] max-[992px]:m-5 max-[992px]:w-[250px] max-[768px]:w-full">
            <div className="img_plan" key={plan.id}><Image src={plan.img} width={40} height={40}/></div>
            <div className="title_plan pt-4 text-[#0E1F51] font-extrabold text-[20px]"key={plan.id}>{plan.title}</div>
            <div className="border_plan mt-4"key={plan.id}><Image src={plan.borderimg} width={90} height={90} className="w-[90px] h-[4px]"/></div>
            <div className="caption_plan mt-4"><p className="text-justify text-[#0E1F51] font-medium text-[16px]" key={plan.id}>{plan.caption}</p></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planing;
