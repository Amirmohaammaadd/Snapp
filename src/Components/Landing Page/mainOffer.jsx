import Food1 from "../../assets/img/product/1.jpg";
import Food2 from "../../assets/img/product/2.jpg";
import Food3 from "../../assets/img/product/3.jpg";
import Food4 from "../../assets/img/product/4.jpg";
import Food5 from "../../assets/img/product/5.jpg";
import Food6 from "../../assets/img/product/6.jpg";
import Food7 from "../../assets/img/product/7.jpg";
import Food8 from "../../assets/img/product/8.jpg";
import Food9 from "../../assets/img/product/9.jpg";
import Food10 from "../../assets/img/product/10.jpg";
import Food11 from "../../assets/img/product/11.jpg";
import Food12 from "../../assets/img/product/12.jpg";
import { ArrowLeftOutlined } from "@ant-design/icons";

const MainOffer = () => {
  const dataFood = [
    { img: Food1, title: "فست فود", id: 1 },
    { img: Food2, title: "ایرانی", id: 2 },
    { img: Food3, title: "کباب", id: 3 },
    { img: Food4, title: "برگر", id: 4 },
    { img: Food5, title: "پیتزا", id: 5 },
    { img: Food6, title: "ساندویچ", id: 6 },
    { img: Food7, title: "گیلانی", id: 7 },
    { img: Food8, title: "بین الملل", id: 8 },
    { img: Food9, title: "دریایی", id: 9 },
    { img: Food10, title: "سالاد", id: 10 },
    { img: Food11, title: "پاستا", id: 11 },
    { img: Food12, title: "سوخاری", id: 12 },
  ];
  return (
    <>
      <div className="space-y-10">
        <h2 className="">دسته بندی ها</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 ">
          {dataFood.map((item) => {
            return (
              <div
                className="rounded-md p-1 bg-white relative shadow-xl cursor-pointer"
                key={item.id}
              >
                <img src={item.img} alt="None" className="w-full rounded-md" />
                <div className="flex items-center gap-1 absolute bottom-1 px-2 bg-white p-1 rounded-tl-xl">
                  <p className="text-sm">{item.title}</p>
                  <ArrowLeftOutlined className="text-[#ff2882]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainOffer;
