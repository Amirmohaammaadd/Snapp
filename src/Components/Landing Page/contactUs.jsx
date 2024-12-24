import { Button, Input } from "antd";
import Title from "../../assets/img/content/1.png";
import Title2 from "../../assets/img/content/2.png";
import Title3 from "../../assets/img/content/3.png";
import Title4 from "../../assets/img/content/4.png";
import MobileIcon from "../../assets/img/content/conent-mobile.png";

const ContactUs = () => {
  const dataTitle = [
    { img: Title, id: 1 },
    { img: Title2, id: 2 },
    { img: Title3, id: 3 },
    { img: Title4, id: 4 },
  ];
  return (
    <div className="lg:px-10 bg-slate-200/75 lg:flex justify-between relative rounded-br-[150px] !mt-[10svh] lg:!mt-[20svh]">
      {/* -------------- A ------------ */}
      <div className="flex flex-col gap-10 lg:w-[60%] px-3 lg:px-28 pt-7 lg:pt-14 ">
        <h1 className="Lalezar text-5xl text-slate-800">اپلیکیشن اسنپ‌فود</h1>

        <p className="text-slate-500 text-base leading-7">
          با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها،
          کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده
          و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.
        </p>

        <div>
          <h2 className="text-slate-600 text-sm">
            برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید
          </h2>

          <div className="flex items-center justify-between pl-2 bg-white mt-4 p-1 w-full lg:w-2/3 shadow-md rounded-lg">
            <Input
              size="large"
              className="w-full lg:w-3/5 !border-none !IRANSansX focus:!shadow-none pr-5"
              placeholder="*********09"
              maxLength={11}
            />

            <Button className="!text-white bg-[#ff2882] !border-none hover:!bg-[#ca1c64] ">
              دریافت لینک
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center pb-28 gap-3">
          {dataTitle.map((item) => {
            return (
              <div key={item.id} className="">
                <img src={item.img} alt="None" className="w-[110px] h-[40px]" />
              </div>
            );
          })}
        </div>
      </div>
      {/* -------------- B ------------ */}
      <div className="w-1/2 justify-center absolute left-0 bottom-10 hidden lg:flex">
        <img src={MobileIcon} alt="None" className="w-[70%]" />
      </div>
    </div>
  );
};

export default ContactUs;
