import { EnvironmentOutlined, StarOutlined } from "@ant-design/icons";
import { ConfigProvider, Modal, Rate, Segmented } from "antd";
import { useState } from "react";
import "../../App.css";

import mini1 from "../../assets/img/All main item/mini/1-mini.jpg";
import mini2 from "../../assets/img/All main item/mini/2-mini.jpg";
import mini3 from "../../assets/img/All main item/mini/3-mini.jpg";
import mini4 from "../../assets/img/All main item/mini/4-mini.jpg";
import mini5 from "../../assets/img/All main item/mini/5-mini.jpg";

import logo1 from "../../assets/img/All main item/content/logo1.jpeg";
import banner1 from "../../assets/img/All main item/content/logo1-1.jpg";

import logo2 from "../../assets/img/All main item/content/logo2.jpeg";
import banner2 from "../../assets/img/All main item/content/logo2-2.jpeg";

import logo3 from "../../assets/img/All main item/content/logo3.jpg";
import banner3 from "../../assets/img/All main item/content/logo3-3.jpg";

import logo4 from "../../assets/img/All main item/content/logo4.jpg";
import banner4 from "../../assets/img/All main item/content/logo4-4.jpg";

import logo5 from "../../assets/img/All main item/content/logo5.jpeg";
import banner5 from "../../assets/img/All main item/content/logo5-5.jpeg";

import logo6 from "../../assets/img/All main item/content/logo6.png";
import banner6 from "../../assets/img/All main item/content/logo6-6.jpg";

import logo7 from "../../assets/img/All main item/content/logo7.jpg";
import banner7 from "../../assets/img/All main item/content/logo7-7.jpg";

import logo8 from "../../assets/img/All main item/content/logo8.png";
import banner8 from "../../assets/img/All main item/content/logo8-8.jpg";

import logo9 from "../../assets/img/All main item/content/logo9.jpg";
import banner9 from "../../assets/img/All main item/content/logo9-9.jpg";

import logo10 from "../../assets/img/All main item/content/logo10.jpg";
import banner10 from "../../assets/img/All main item/content/logo10-10.jpg";

import logo11 from "../../assets/img/All main item/content/logo11.png";
import banner11 from "../../assets/img/All main item/content/logo11-11.jpg";

import logo13 from "../../assets/img/All main item/content/logo13.jpg";
import banner13 from "../../assets/img/All main item/content/logo13-13.png";

import food from "../../assets/img/All main item/1.jpeg";

const AllItemMainContent = () => {
  const sideItems = [
    { id: 1, img: mini1, title: "فست فود" },
    { id: 2, img: mini2, title: "ایرانی" },
    { id: 3, img: mini3, title: "کباب" },
    { id: 4, img: mini4, title: "صبحانه" },
    { id: 5, img: mini5, title: "سالاد" },
    { id: 6, img: mini4, title: "دریایی" },
    { id: 7, img: mini2, title: "بین المللی" },
  ];

  const segmentData = [
    { id: 1, name: "همه" },
    { id: 2, name: "اقتصادی" },
    { id: 3, name: "متوسط" },
    { id: 4, name: "گران" },
  ];

  const AllMainItems = [
    {
      id: 1,
      name: "کای کافه (جردن)",
      logo: logo1,
      banner: banner1,
      rate: "855",
      title: "صبحانه، سیمیت و کروسان، شیرینی دسری",
    },
    {
      id: 2,
      name: "جی کافه (جردن)",
      logo: logo2,
      banner: banner2,
      rate: "3192",
      title: "کافه، قهوه سرد، قهوه",
    },
    {
      id: 3,
      name: "قهوه لمیز (جردن)",
      rate: "8131",
      logo: logo3,
      banner: banner3,
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 4,
      name: "بن آیس طبیعی (جردن- الهیه)",
      logo: logo4,
      banner: banner4,
      rate: "5998",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 5,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
    {
      id: 6,
      name: "شیرینی پراگ (میرداماد)",
      logo: logo6,
      banner: banner6,
      rate: "2475",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 7,
      name: "مینی میل (پارک ملت)",
      logo: logo7,
      banner: banner7,
      rate: "1092",
      title: "فست فود, پیتزا, نوشیدنی",
    },
    {
      id: 8,
      name: "کافه رستوران دمکافه",
      logo: logo8,
      banner: banner8,
      rate: "9589",
      title: "کافه, قهوه",
    },
    {
      id: 9,
      name: "قهوه کای",
      logo: logo9,
      banner: banner9,
      rate: "53",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 10,
      name: "کافه رستوران اسنکس",
      logo: logo10,
      banner: banner10,
      rate: "611",
      title: "صبحانه و میان وعده, اسنک, صبحانه سنتی",
    },
    {
      id: 11,
      name: "کافه لام میم",
      logo: logo11,
      banner: banner11,
      rate: "3524",
      title: "کافه, قهوه, برگر",
    },
    {
      id: 12,
      name: "قهوه هایک (ظفر)",
      logo: logo4,
      banner: banner4,
      rate: "233",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 13,
      name: "قهوه تی",
      logo: logo13,
      banner: banner13,
      rate: "236",
      title: "کافه, قهوه, قهوه سرد",
    },
    {
      id: 14,
      name: "کای کافه (جردن)",
      logo: logo1,
      banner: banner1,
      rate: "855",
      title: "صبحانه، سیمیت و کروسان، شیرینی دسری",
    },
    {
      id: 15,
      name: "جی کافه (جردن)",
      logo: logo2,
      banner: banner2,
      rate: "3192",
      title: "کافه، قهوه سرد، قهوه",
    },
    {
      id: 16,
      name: "قهوه لمیز (جردن)",
      rate: "8131",
      logo: logo3,
      banner: banner3,
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 17,
      name: "بن آیس طبیعی (جردن- الهیه)",
      logo: logo4,
      banner: banner4,
      rate: "5998",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 18,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
    {
      id: 19,
      name: "شیرینی پراگ (میرداماد)",
      logo: logo6,
      banner: banner6,
      rate: "2475",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 20,
      name: "مینی میل (پارک ملت)",
      logo: logo7,
      banner: banner7,
      rate: "1092",
      title: "فست فود, پیتزا, نوشیدنی",
    },
    {
      id: 21,
      name: "کافه رستوران دمکافه",
      logo: logo8,
      banner: banner8,
      rate: "9589",
      title: "کافه, قهوه",
    },
    {
      id: 22,
      name: "قهوه کای",
      logo: logo9,
      banner: banner9,
      rate: "53",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 23,
      name: "کافه رستوران اسنکس",
      logo: logo10,
      banner: banner10,
      rate: "611",
      title: "صبحانه و میان وعده, اسنک, صبحانه سنتی",
    },
    {
      id: 24,
      name: "کافه لام میم",
      logo: logo11,
      banner: banner11,
      rate: "3524",
      title: "کافه, قهوه, برگر",
    },
    {
      id: 25,
      name: "قهوه هایک (ظفر)",
      logo: logo4,
      banner: banner4,
      rate: "233",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 26,
      name: "قهوه تی",
      logo: logo13,
      banner: banner13,
      rate: "236",
      title: "کافه, قهوه, قهوه سرد",
    },
    {
      id: 27,
      name: "کافه رستوران دمکافه",
      logo: logo8,
      banner: banner8,
      rate: "9589",
      title: "کافه, قهوه",
    },
    {
      id: 28,
      name: "قهوه کای",
      logo: logo9,
      banner: banner9,
      rate: "53",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 29,
      name: "کافه رستوران اسنکس",
      logo: logo10,
      banner: banner10,
      rate: "611",
      title: "صبحانه و میان وعده, اسنک, صبحانه سنتی",
    },
    {
      id: 30,
      name: "کافه لام میم",
      logo: logo11,
      banner: banner11,
      rate: "3524",
      title: "کافه, قهوه, برگر",
    },
    {
      id: 31,
      name: "قهوه لمیز (جردن)",
      rate: "8131",
      logo: logo3,
      banner: banner3,
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 32,
      name: "بن آیس طبیعی (جردن- الهیه)",
      logo: logo4,
      banner: banner4,
      rate: "5998",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 33,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
    {
      id: 34,
      name: "شیرینی پراگ (میرداماد)",
      logo: logo6,
      banner: banner6,
      rate: "2475",
      title: "کافه, قهوه, چای و دمنوش",
    },
  ];

  const EconomyMainItems = [
    {
      id: 29,
      name: "مینی میل (پارک ملت)",
      logo: logo7,
      banner: banner7,
      rate: "1092",
      title: "فست فود, پیتزا, نوشیدنی",
    },
    {
      id: 30,
      name: "کافه رستوران دمکافه",
      logo: logo8,
      banner: banner8,
      rate: "9589",
      title: "کافه, قهوه",
    },
    {
      id: 31,
      name: "قهوه کای",
      logo: logo9,
      banner: banner9,
      rate: "53",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 32,
      name: "شیرینی پراگ (میرداماد)",
      logo: logo6,
      banner: banner6,
      rate: "2475",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 33,
      name: "بن آیس طبیعی (جردن- الهیه)",
      logo: logo4,
      banner: banner4,
      rate: "5998",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 34,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
  ];

  const MediumMainItems = [
    {
      id: 35,
      name: "کافه رستوران دمکافه",
      logo: logo8,
      banner: banner8,
      rate: "9589",
      title: "کافه, قهوه",
    },
    {
      id: 36,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
    {
      id: 37,
      name: "شیرینی پراگ (میرداماد)",
      logo: logo6,
      banner: banner6,
      rate: "2475",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 38,
      name: "قهوه کای",
      logo: logo9,
      banner: banner9,
      rate: "53",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 39,
      name: "کافه رستوران اسنکس",
      logo: logo10,
      banner: banner10,
      rate: "611",
      title: "صبحانه و میان وعده, اسنک, صبحانه سنتی",
    },
    {
      id: 40,
      name: "کافه لام میم",
      logo: logo11,
      banner: banner11,
      rate: "3524",
      title: "کافه, قهوه, برگر",
    },
    {
      id: 41,
      name: "قهوه هایک (ظفر)",
      logo: logo4,
      banner: banner4,
      rate: "233",
      title: "کافه, قهوه, چای و دمنوش",
    },
  ];

  const ExpensiveMainItems = [
    {
      id: 42,
      name: "بن آیس طبیعی (جردن- الهیه)",
      logo: logo4,
      banner: banner4,
      rate: "5998",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 43,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
    {
      id: 44,
      name: "شیرینی پراگ (میرداماد)",
      logo: logo6,
      banner: banner6,
      rate: "2475",
      title: "کافه, قهوه, چای و دمنوش",
    },
    {
      id: 45,
      name: "لو کافه",
      logo: logo5,
      banner: banner5,
      rate: 1,
      title: "کافه, قهوه, میلک شیک",
    },
    {
      id: 46,
      name: "کای کافه (جردن)",
      logo: logo1,
      banner: banner1,
      rate: "855",
      title: "صبحانه، سیمیت و کروسان، شیرینی دسری",
    },
    {
      id: 47,
      name: "جی کافه (جردن)",
      logo: logo2,
      banner: banner2,
      rate: "3192",
      title: "کافه، قهوه سرد، قهوه",
    },
    {
      id: 48,
      name: "قهوه لمیز (جردن)",
      rate: "8131",
      logo: logo3,
      banner: banner3,
      title: "کافه, قهوه, چای و دمنوش",
    },
  ];

  const [selectedValue, setSelectedValue] = useState(segmentData[0].id);

  const [itemeModal, setItemModal] = useState(false);
  const [itemData, setitemData] = useState([{}]);

  console.log(itemData);

  return (
    <>
      <div className="mt-28">
        <p className="text-slate-600 text-xl px-10 font-semibold">
          سفارش آنلاین از کافه های تهران
        </p>

        <div className="w-[80%] md:w-[90%] xl:w-[70%] mt-10 mx-auto !gap-5 flex flex-col lg:flex-row justify-between relative">
          {/* ---------------- A --------------- */}

          <div className="flex flex-col gap-3 lg:fixed ">
            <div className="rounded-lg p-5 flex flex-col gap-5 shadow-[0px_0px_10px_-2px_rgba(0,_0,_0,_0.1)] border-slate-100 border">
              <p className="p-3 font-semibold text-slate-700 bg-[#f3f4f4] rounded-lg text-sm">
                همه دسته‌بندی‌ها
              </p>
              <div className="gap-1 grid grid-cols-2 lg:flex lg:flex-col">
                {sideItems.map((item, index) => (
                  <div
                    onClick={() => {
                      index === 4 || index === 6
                        ? setSelectedValue(1)
                        : index === 5 || index === 7
                        ? setSelectedValue(3)
                        : setSelectedValue(item.id);
                    }}
                    className="flex gap-3 items-center px-2 rounded-lg p-2 hover:bg-slate-100 cursor-pointer"
                    key={item.id}
                  >
                    <div className="size-[30px] rounded-full flex justify-center">
                      <img
                        src={item.img}
                        alt="none"
                        className="object-cover rounded-full"
                      />
                    </div>
                    <p className="text-sm">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg px-7 flex flex-col gap-5 shadow-[0px_0px_10px_-2px_rgba(0,_0,_0,_0.1)] border-slate-100 border py-4 bg-white">
              <p className="text-slate-700 rounded-lg text-sm">
                همه دسته‌بندی‌ها
              </p>

              <div className="flex justify-center">
                <ConfigProvider direction="rtl">
                  <Segmented
                    options={segmentData.map((item) => ({
                      label: item.name,
                      value: item.id,
                    }))}
                    selected={selectedValue}
                    onChange={(value) => {
                      setSelectedValue(value);
                      window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                      });
                    }}
                  />
                </ConfigProvider>
              </div>
            </div>
          </div>

          {/* ---------------- B --------------- */}

          <div className="w-full lg:w-3/4 mr-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {/* ----------------------- */}

            {selectedValue === 1 ? (
              <>
                {AllMainItems.map((item) => (
                  <div
                    onClick={() => {
                      setitemData(item);
                      setItemModal(!itemeModal);
                    }}
                    key={item.id}
                    className="shadow-[0px_0px_10px_-2px_rgba(0,_0,_0,_0.1)] relative rounded-lg h-[370px] cursor-pointer border hover:shadow-[0px_0px_30px_-2px_rgba(0,_0,_0,_0.1)] duration-200"
                  >
                    <img
                      src={item.banner}
                      alt="none"
                      className="w-full object-fill h-[150px] rounded-t-lg"
                    />

                    <div className="shadow-lg flex bg-white justify-center rounded-lg size-[90px] mx-auto p-1 absolute left-[36%] top-[80px]">
                      <img
                        src={item.logo}
                        alt="none"
                        className="rounded-lg border border-slate-200"
                      />
                    </div>
                    <h3 className="text-lg text-center mt-10 font-semibold">
                      {item.name}
                    </h3>

                    <div className="flex justify-center items-center gap-2 text-xs mt-2">
                      <StarOutlined className="text-yellow-500 text-[16px] mb-1" />
                      <h4 className="font-semibold">4.6</h4>
                      <h4 className="text-slate-400">({item.rate} امتیاز)</h4>
                    </div>
                    <p className="text-slate-400 text-xs mt-2 text-center">
                      {item.title}{" "}
                    </p>

                    <div className="flex justify-center mt-12">
                      <button className="p-2 text-sm gap-2 rounded-full text-center shadow-md hover:bg-[#ff00a6] hover:text-white duration-200 px-4 flex items-center text-slate-600">
                        <EnvironmentOutlined className="text-[16px] mb-1" />
                        ارسال رایگان
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : selectedValue === 2 ? (
              <>
                {EconomyMainItems.map((item) => (
                  <div
                    onClick={() => {
                      setitemData(item);
                      setItemModal(!itemeModal);
                    }}
                    key={item.id}
                    className="bg-white shadow-[0px_0px_10px_-2px_rgba(0,_0,_0,_0.1)] relative rounded-lg h-[370px] cursor-pointer border hover:shadow-[0px_0px_30px_-2px_rgba(0,_0,_0,_0.1)] duration-200"
                  >
                    <img
                      src={item.banner}
                      alt="none"
                      className="w-full object-fill h-[150px] rounded-t-lg"
                    />

                    <div className="shadow-lg flex bg-white justify-center rounded-lg size-[90px] mx-auto p-1 absolute left-[36%] top-[80px]">
                      <img
                        src={item.logo}
                        alt="none"
                        className="rounded-lg border border-slate-200"
                      />
                    </div>
                    <h3 className="text-lg text-center mt-10 font-semibold">
                      {item.name}
                    </h3>

                    <div className="flex justify-center items-center gap-2 text-xs mt-2">
                      <StarOutlined className="text-yellow-500 text-[16px] mb-1" />
                      <h4 className="font-semibold">4.6</h4>
                      <h4 className="text-slate-400">({item.rate} امتیاز)</h4>
                    </div>
                    <p className="text-slate-400 text-xs mt-2 text-center">
                      {item.title}{" "}
                    </p>

                    <div className="flex justify-center mt-12">
                      <button className="p-2 text-sm gap-2 rounded-full text-center shadow-md hover:bg-[#ff00a6] hover:text-white duration-200 px-4 flex items-center text-slate-600">
                        <EnvironmentOutlined className="text-[16px] mb-1" />
                        ارسال رایگان
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : selectedValue === 3 ? (
              <>
                {MediumMainItems.map((item) => (
                  <div
                    onClick={() => {
                      setitemData(item);
                      setItemModal(!itemeModal);
                    }}
                    key={item.id}
                    className="bg-white shadow-[0px_0px_10px_-2px_rgba(0,_0,_0,_0.1)] relative rounded-lg h-[370px] cursor-pointer border hover:shadow-[0px_0px_30px_-2px_rgba(0,_0,_0,_0.1)] duration-200"
                  >
                    <img
                      src={item.banner}
                      alt="none"
                      className="w-full object-fill h-[150px] rounded-t-lg"
                    />

                    <div className="shadow-lg flex bg-white justify-center rounded-lg size-[90px] mx-auto p-1 absolute left-[36%] top-[80px]">
                      <img
                        src={item.logo}
                        alt="none"
                        className="rounded-lg border border-slate-200"
                      />
                    </div>
                    <h3 className="text-lg text-center mt-10 font-semibold">
                      {item.name}
                    </h3>

                    <div className="flex justify-center items-center gap-2 text-xs mt-2">
                      <StarOutlined className="text-yellow-500 text-[16px] mb-1" />
                      <h4 className="font-semibold">4.6</h4>
                      <h4 className="text-slate-400">({item.rate} امتیاز)</h4>
                    </div>
                    <p className="text-slate-400 text-xs mt-2 text-center">
                      {item.title}{" "}
                    </p>

                    <div className="flex justify-center mt-12">
                      <button className="p-2 text-sm gap-2 rounded-full text-center shadow-md hover:bg-[#ff00a6] hover:text-white duration-200 px-4 flex items-center text-slate-600">
                        <EnvironmentOutlined className="text-[16px] mb-1" />
                        ارسال رایگان
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : selectedValue === 4 ? (
              <>
                {ExpensiveMainItems.map((item) => (
                  <div
                    onClick={() => {
                      setitemData(item);
                      setItemModal(!itemeModal);
                    }}
                    key={item.id}
                    className="bg-white shadow-[0px_0px_10px_-2px_rgba(0,_0,_0,_0.1)] relative rounded-lg h-[370px] cursor-pointer border hover:shadow-[0px_0px_30px_-2px_rgba(0,_0,_0,_0.1)] duration-200"
                  >
                    <img
                      src={item.banner}
                      alt="none"
                      className="w-full object-fill h-[150px] rounded-t-lg"
                    />

                    <div className="shadow-lg flex bg-white justify-center rounded-lg size-[90px] mx-auto p-1 absolute left-[36%] top-[80px]">
                      <img
                        src={item.logo}
                        alt="none"
                        className="rounded-lg border border-slate-200"
                      />
                    </div>
                    <h3 className="text-lg text-center mt-10 font-semibold">
                      {item.name}
                    </h3>

                    <div className="flex justify-center items-center gap-2 text-xs mt-2">
                      <StarOutlined className="text-yellow-500 text-[16px] mb-1" />
                      <h4 className="font-semibold">4.6</h4>
                      <h4 className="text-slate-400">({item.rate} امتیاز)</h4>
                    </div>
                    <p className="text-slate-400 text-xs mt-2 text-center">
                      {item.title}{" "}
                    </p>

                    <div className="flex justify-center mt-12">
                      <button className="p-2 text-sm gap-2 rounded-full text-center shadow-md hover:bg-[#ff00a6] hover:text-white duration-200 px-4 flex items-center text-slate-600">
                        <EnvironmentOutlined className="text-[16px] mb-1" />
                        ارسال رایگان
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : null}

            {/* ----------------------- */}
          </div>
        </div>
      </div>

      <Modal
        open={itemeModal}
        onCancel={() => setItemModal(!itemeModal)}
        footer={null}
        closeIcon={false}
        width={750}
        getContainer={false}
        className="custom-modal"
      >
        <div className="h-[500px] bg-slate-100 ">
          <div className="relative">
            <img
              src={food}
              alt="none"
              className="h-[350px] w-full object-cover brightness-90 shadow-md "
            />

            <img
              src={itemData?.logo}
              alt="none"
              className="w-[120px] rounded-lg shadow-md absolute top-[30%] left-[15%]"
            />
          </div>

          <div className="flex justify-between items-center p-5 lg:px-10">
            <div className="flex gap-5 items-center">
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-slate-700">
                  {itemData?.name}
                </h1>
                <p className="  text-slate-500">{itemData?.title}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 flex-col">
              <p>تعداد نظر ها : {itemData?.rate}</p>
              <Rate allowHalf defaultValue={3.5} />
            </div>
          </div>

          <p className="text-sm px-5 lg:px-10">
            خیابان آفریقا شمال به جنوب، نرسیده به پل میرداماد، بین ستاری و سرو،
            پلاک ۱۱
          </p>
        </div>
      </Modal>
    </>
  );
};

export default AllItemMainContent;
