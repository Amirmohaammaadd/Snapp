import {
  ExclamationCircleOutlined,
  SearchOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import Logo from "../../assets/img/snapp logo/snapLogo.png";
import { Button, Form, Input, message, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";

const AllItemNavbar = () => {
  const navigate = useNavigate();
  const [form] = useForm();

  const [show, setShow] = useState(false);
  const [inputData, setInputData] = useState("");

  const [openModal, setOpenModal] = useState(false);

  const [phoneInput, setPhoneInput] = useState("");

  const getFormValue = (_, value) => {
    setPhoneInput(value.phoneNum);
  };

  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "رمز عبور برای شما ارسال شد",
    });

    setOpenModal(!openModal);
    form.resetFields();
    setPhoneInput("");
  };

  return (
    <>
      <div className="p-3 w-full shadow-md flex items-center justify-between px-7 fixed z-20 bg-white top-0">
        {/* ----------- A ----------- */}

        <div className=" flex items-center gap-5">
          <img
            src={Logo}
            className="w-24 cursor-pointer"
            alt="none"
            onClick={() => navigate("/")}
          />

          <button className="rounded-full p-2 text-red-600 gap-2 items-center text-sm font-semibold bg-pink-100 px-5 hidden lg:flex">
            <ExclamationCircleOutlined className="text-lg" />
            آدرستان را انتخاب کنید
          </button>
        </div>
        {/* ----------- D ----------- */}
        <div
          className={`${
            show ? "flex" : "hidden"
          } w-screen h-screen bg-gray-900 bg-opacity-50 absolute top-0 right-0`}
        />
        <div className="w-1/3 hidden lg:flex relative">
          <Input
            value={inputData}
            onBlur={() => {
              setShow(false);
              setInputData("");
            }}
            onChange={(e) => setInputData(e.target.value)}
            maxLength={30}
            onFocus={() => setShow(true)}
            prefix={<SearchOutlined className="text-xl ml-2 text-slate-400" />}
            placeholder="جست‌وجو در اسنپ‌فود"
            size="large"
            className="w-full rounded-lg !bg-[#ebedf0] !border-none py-3"
          />

          {show && (
            <>
              <div className="bg-[#ebedf0] z-10 mt-2 absolute top-[100%] w-full p-4 rounded-lg shadow-lg">
                <p className="text-sm text-slate-700">
                  {inputData
                    ? `جست و جو برای  ${inputData}`
                    : "عبارت مورد نظر خود را وارد کنید"}
                </p>
              </div>
            </>
          )}
        </div>
        {/* ----------- C ----------- */}

        <div>
          <div className="flex items-center gap-3">
            <button
              className="items-center gap-2 text-sm hidden lg:flex"
              onClick={() => navigate("/sellers-register")}
            >
              <ShopOutlined className="text-lg" />
              ثبت نام فروشندگان
            </button>

            <Button
              className="hidden lg:flex !text-white bg-[#ff00a6] !border-none hover:!bg-[#db42a6] "
              size="large"
              onClick={() => setOpenModal(true)}
            >
              ورود یا عضویت
            </Button>
          </div>{" "}
        </div>

        <Button
          className="flex lg:hidden !text-white bg-[#ff00a6] !border-none hover:!bg-[#db42a6] "
          size="large"
          onClick={() => setOpenModal(true)}
        >
          ورود یا عضویت
        </Button>
      </div>

      <Modal
        open={openModal}
        onCancel={() => {
          setOpenModal(!openModal);
          form.resetFields();
          setPhoneInput("");
        }}
        getContainer={false}
        footer={null}
        title={
          <>
            <img src={Logo} alt="None" className="w-20" />
          </>
        }
      >
        <h2 className="text-2xl mt-5">
          <span className="font-bold">ورود </span>
          یا
          <span className="font-bold"> عضویت</span>
        </h2>

        <Form className="mt-3" onValuesChange={getFormValue} form={form}>
          <Form.Item
            extra={<span className="text-xs">شماره با 09 شروع میشود</span>}
            className="!IRANSansX"
            labelCol={{ span: 24 }}
            label={<span className="text-sm mt-4">شماره تلفن‌همراه</span>}
            name="phoneNum"
          >
            <Input
              size="large"
              maxLength={11}
              className="border-slate-200 h-12 !IRANSansX focus:!shadow-none focus:border-[#ff2882] hover:border-slate-200"
            />
          </Form.Item>

          <Button
            htmlType="submit"
            className={`${
              phoneInput.length > 10
                ? "!w-full !bg-[#ff2882] !text-white border-none"
                : "w-full"
            } `}
            size="large"
            disabled={phoneInput.length < 11}
            onClick={success}
          >
            ادامه
          </Button>
        </Form>
      </Modal>

      {contextHolder}
    </>
  );
};

export default AllItemNavbar;
