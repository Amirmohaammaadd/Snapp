import { InstagramOutlined } from "@ant-design/icons";
import Logo2 from "../../assets/img/snapp logo/1.png";
import Logo from "../../assets/img/snapp logo/snapLogo.png";


const AllItemFooter = () => {
  return (
    <div className="bg-stone-50 px-10 mt-10 grid grid-cols-1 lg:grid-cols-3 py-10">
      {/* ------------- A ------------- */}
      <div className=" ">
        <div className="flex flex-col">
          <div className="flex gap-4">
            <img src={Logo} alt="None" className="w-32" />
            <div className="flex flex-col gap-2">
              <h2 className="text-[#ff2882] text-2xl font-extrabold">
                اسنپ فود
              </h2>
              <p className="text-xs">تجربه سفارش غذا، از زودفود تا اسنپ‌فود</p>
            </div>
          </div>
          <div className="flex mt-5 text-2xl text-slate-500 justify-center gap-4 ">
            <div className="bg-white p-3 rounded-full shadow-xl flex border">
              <InstagramOutlined />
            </div>
            <div className="bg-white p-3 rounded-full shadow-xl flex border">
              <InstagramOutlined />
            </div>
            <div className="bg-white p-3 rounded-full shadow-xl flex border">
              <InstagramOutlined />
            </div>
            <div className="bg-white p-3 rounded-full shadow-xl flex border">
              <InstagramOutlined />
            </div>
          </div>
        </div>
      </div>
      {/* ------------- B ------------- */}
      <div className="flex justify-around py-10 lg:py-0">
        <div className="text-slate-600">
          <p className="flex flex-col text-xs gap-4">
            <span>درباره اسنپ‌فود</span>
            <span>فرصت‌های شغلی</span>
            <span>وبلاگ</span>
            <span>قوانین سایت</span>
            <span>حریم خصوصی</span>
            <span>ثبت نام فروشندگان</span>
          </p>
        </div>

        <div className="text-slate-600">
          <p className="flex flex-col text-xs gap-4">
            <span>تماس با اسنپ‌فود</span>
            <span>پرسش‌های متداول</span>
            <span>ثبت شکایات</span>
            <span>اپلیکیشن موبایل</span>
          </p>
        </div>
      </div>
      {/* ------------- D ------------- */}
      <div className="mr-auto">
        <img src={Logo2} alt="None" />
      </div>
    </div>
  );
};

export default AllItemFooter;
