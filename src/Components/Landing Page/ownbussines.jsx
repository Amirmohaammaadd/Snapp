import { ShopOutlined } from "@ant-design/icons";
import { Button } from "antd";
import ShopIcon from "../../assets/img/content 2/11.png";
import { useNavigate } from "react-router-dom";

const Ownbussines = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex justify-center lg:justify-between bg-stone-50 relative pb-10 rounded-lg !mt-[10%]">
        {/* ------------- A ------------ */}
        <div className="flex flex-col gap-10 p-10">
          <h2 className="text-4xl text-slate-700">صاحب کسب و کار هستید؟</h2>
          <p className="text-slate-600 text-lg">
            با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.
          </p>
          <Button
            className="!text-white bg-[#ff2882] !border-none hover:!bg-[#ca1c64] w-full lg:w-fit text-xl"
            size="large"
            onClick={() => navigate("/sellers-register")}
          >
            <ShopOutlined className="text-xl" />
            ثبت نام فروشندگان
          </Button>
        </div>
        {/* ------------- B ------------ */}
        <div className="left-5 bottom-[15%] z-30 hidden lg:block absolute">
          <img src={ShopIcon} alt="None" className="pl-4" />
        </div>
      </div>
    </>
  );
};

export default Ownbussines;
