import { Button, Input, Select } from "antd";
import Logo from "../assets/img/snapp logo/snapLogo.png";

import art from "../assets/img/All main item/art.png";
import { useNavigate } from "react-router-dom";

import "../App.css";

const SellersRegister = () => {
  const navigate = useNavigate();

  const navItems = [
    { id: 1, name: "آکادمی همکاران" },
    { id: 2, name: "شرایط و مدارک مورد نیاز" },
    { id: 3, name: "مراحل ثبت‌نام" },
    { id: 4, name: "سؤالات متداول" },
    { id: 5, name: "تماس با ما" },
  ];

  return (
    <div className="bg-[#fff5fc] h-screen w-full">
      <div className="w-[60%] mx-auto">
        {/* ------------------------- navbar ---------------------------- */}

        <div className="p-5 flex items-center justify-between ">
          {/* ----------- A ----------- */}

          <div className="flex items-center gap-5">
            {navItems.map((item) => (
              <p key={item.id} className="font-semibold text-slate-700 cursor-pointer relative group">
                {item.name}
                <span className="flex w-0 h-[2px] bg-[#ff00a6] group-hover:w-full duration-300 absolute -bottom-[6px]" />
              </p>
            ))}
          </div>

      

          {/* ----------- B ----------- */}

          <div>
            <div className="flex items-center gap-3">
              <Button
                className="hidden lg:flex !text-white bg-[#ff00a6] !border-none hover:!bg-[#db42a6] "
                size="large"
              >
                دریافت برنامه دخل{" "}
              </Button>

              <img
                src={Logo}
                className="w-24 cursor-pointer"
                alt="none"
                onClick={() => navigate("/")}
              />
            </div>
          </div>
        </div>

        {/* ---------------------- main content ------------------------- */}

        <div className="flex justify-between items-center">
          {/* ---------------------- part 1 ------------------------- */}

          <div className="flex flex-col gap-10 w-2/3">
            <div className="flex flex-col gap-5 w-[79%] px-9 ">
              <h1 className="text-slate-700 text-4xl leading-[50px] font-bold">
                در کمتر از ۱۰ دقیقه ثبت‌نام کنید و به اسنپ‌فود بپیوندید!
              </h1>
              <p className="text-slate-700 text-xl leading-7 font-bold">
                بدون نیاز به مراجعهٔ حضوری، می‌توانید صفر تا صد مراحل ثبت‌نام را
                آنلاین انجام دهید.
              </p>
            </div>

            <div className="flex justify-center">
              <img src={art} alt="none" className="scale-110" />
            </div>
          </div>
          {/* ---------------------- part 2 ------------------------- */}

          <div className="flex flex-col gap-10 w-1/3">
            <div className="bg-white my-10 ml-6 shadow-lg py-6 rounded-lg flex flex-col gap-7">
              <div className="text-slate-700 font-bold px-4 flex flex-col gap-3">
                <p className="text-2xl">فرم ثبت‌نام فروشندگان</p>
                <p>همین حالا ثبت‌نام کنید!</p>
              </div>

              <Select
                size="large"
                options={[
                  { id: 1, label: "محقق", value: "researcher" },
                  { id: 2, label: "پزشک", value: "doctor" },
                  { id: 3, label: "مهندس", value: "engineer" },
                  { id: 4, label: "مدرس", value: "teacher" },
                  { id: 5, label: "طراح", value: "designer" },
                ]}
                placeholder={
                  <span className="text-slate-700 text-sm">
                    انتخاب نوع کسب و کار
                  </span>
                }
                allowClear
                className="mx-5 !h-12 custom-select"
              />

              <Select
                size="large"
                options={[
                  { id: 1, label: "تهران", value: "Tehran" },
                  { id: 2, label: "مشهد", value: "Mashhad" },
                  { id: 3, label: "اصفهان", value: "Isfahan" },
                  { id: 4, label: "شیراز", value: "Shiraz" },
                  { id: 5, label: "تبریز", value: "Tabriz" },
                ]}
                placeholder={
                  <span className="text-slate-700 text-sm">انتخاب شهر</span>
                }
                allowClear
                className="mx-5 !h-12 custom-select"
              />

              <div className="px-5 flex flex-col gap-7">
                {[
                  { id: 1, label: "نام فروشگاه" },
                  { id: 2, label: "نام مالک" },
                  { id: 3, label: "نام خانوادگی مالک" },
                  { id: 4, label: "شماره تلفن" },
                  { id: 5, label: "کد معرف" },
                ].map((item) => (
                  <Input
                    key={item.id}
                    size="large"
                    maxLength={20}
                    placeholder={item.label}
                    className="!h-12 !text-sm"
                  />
                ))}

                <Button
                  disabled
                  size="large"
                  className="!border-none text-xl font-bold !text-white !h-12 !bg-[#e6e6e6]"
                >
                  دریافت کد تایید
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellersRegister;
