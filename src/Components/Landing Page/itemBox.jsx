import item1 from "../../assets/img/item/item-1.png";
import item2 from "../../assets/img/item/item-2.png";
import item3 from "../../assets/img/item/item-3.png";
import item4 from "../../assets/img/item/item-4.png";
import item5 from "../../assets/img/item/item-5.png";
import item6 from "../../assets/img/item/item-6.png";
import item7 from "../../assets/img/item/item-7.png";
import item8 from "../../assets/img/item/item-8.png";
import item9 from "../../assets/img/item/item-9.png";
import item10 from "../../assets/img/item/item-10.png";
import item11 from "../../assets/img/item/item-11.png";
import item12 from "../../assets/img/item/item-12.png";
import item13 from "../../assets/img/item/item-13.png";
import item14 from "../../assets/img/item/item-14.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";

const ItemBox = () => {
  const dataItem = [
    {
      img: item1,
      id: 1,
    },
    {
      img: item2,
      id: 2,
    },
    {
      img: item3,
      id: 3,
    },
    {
      img: item4,
      id: 4,
    },
    {
      img: item5,
      id: 5,
    },
    {
      img: item6,
      id: 6,
    },
    {
      img: item7,
      id: 7,
    },
    {
      img: item8,
      id: 8,
    },
    {
      img: item9,
      id: 9,
    },
    {
      img: item10,
      id: 10,
    },
    {
      img: item11,
      id: 11,
    },
    {
      img: item12,
      id: 12,
    },
    {
      img: item13,
      id: 13,
    },
    {
      img: item14,
      id: 14,
    },
  ];
  return (
    <>
      <div className="flex items-center">
        <button className="hidden md:flex ml-3 button-prev-stories bg-slate-100 p-3 rounded-full shadow-xl">
          <ArrowRightOutlined className="text-[#ff2882]" />
        </button>
        <Swiper
          spaceBetween={10}
          a11y
          navigation={{
            nextEl: ".button-next-stories",
            prevEl: ".button-prev-stories",
          }}
          modules={[Navigation]}
          breakpoints={{
            300: {
              slidesPerView: 3,
            },
            600: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
            1280: {
              slidesPerView: 8,
            },
          }}
        >
          {dataItem.map((item) => {
            return (
              <SwiperSlide className="lg:!w-[10%]" key={item.id}>
                <div className="flex flex-col border-slate-200 border bg-stone-50 pb-4 rounded-lg">
                  <img src={item.img} alt="None" className="w-4/5 mx-auto" />
                  <p className="ml-1 text-center text-slate-500 text-sm">
                    رستوران
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="hidden md:flex button-next-stories mr-5 bg-slate-100 p-3 rounded-full shadow-xl">
          <ArrowLeftOutlined className="text-[#ff2882]" />
        </button>
      </div>
    </>
  );
};

export default ItemBox;
