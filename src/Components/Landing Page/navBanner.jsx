import { Button, Form, Input, Modal } from "antd";
import Logo from "../../assets/img/snapp logo/snapLogo.png";
import banner from "../../assets/img/header/header.png";
import TimeComp from "../time";
import {
  PushpinOutlined,
  SearchOutlined,
  ShopOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

import "../../App.css";
import { useForm } from "antd/es/form/Form";
import axios from "axios";
import { useMutationState, useQuery } from "@tanstack/react-query";

const NavBanner = () => {
  const [form] = useForm();
  const [openModal, setOpenModal] = useState(false);

  const [phoneInput, setPhoneInput] = useState("");

  const [reCallApi, setReCallApi] = useState(false);

  const getFormValue = (_, value) => {
    setPhoneInput(value.phoneNum);
  };

  const fetchData = async () => {
    const data = await axios.get("https://jsonplaceholder.typicode.com/todos");
    setReCallApi(false);
    return data;
  };

  const resultData = useQuery({
    queryKey: ["users"],
    // queryKey: ["users", reCallApi],
    queryFn: fetchData,
    // enabled: true,
    enabled: reCallApi,
  });

  // console.log("setReCallApi", reCallApi);

  //   {
  //     // enabled: true, // Ensures the query runs only once when the component mounts
  //     // refetchOnWindowFocus: false, // Disables refetch when window regains focus
  //     // staleTime: Infinity, // Keeps the data fresh as long as the component is mounted
  //     // refetchInterval: 3000,
  //   }

  // console.log("isLoading", resultData);
  // console.log("Data2", resultData.isPending);

  // --------------------------------------
  let data = JSON.stringify({
    B: "",
    A: "",
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://jsonplaceholder.typicode.com/todosss",
    data: data,
  };

  axios
    .request(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log("error");
    });

  // fetch("https://jsonplaceholder.typicode.com/todosss", { method: "get" })
  //   .then((response) => response.text())
  //   .then((result) => console.log(result))
  //   .catch((error) => console.error("awd"));

  return (
    <>
      <div className="bg-stone-50 w-full flex flex-col rounded-br-[150px] relative pb-14 lg:pb-0">
        {/* <Button
          className="p-5 w-[100px]"
          // onClick={() => setReCallApi(reCallApi + 1)}
          onClick={() => setReCallApi(!reCallApi)}
          // disabled={isLoading}
          loading={resultData.isLoading}
        >
          FETCH
        </Button> */}
        {/* ------------------- A ---------------------- */}
        <div className="flex justify-between items-center px-8 lg:px-12 pt-5">
          <div className="w-[100px] lg:w-[13%]">
            <img src={Logo} alt="None" />
          </div>

          <div className="mr-auto">
            <UserAddOutlined
              className="!text-[#ff2882] lg:hidden text-2xl"
              onClick={() => setOpenModal(!openModal)}
            />
          </div>

          <div className="flex items-center gap-3">
            <button className="items-center gap-2 text-sm hidden lg:flex">
              <ShopOutlined className="text-lg" />
              ثبت نام فروشندگان
            </button>

            <Button
              className="hidden lg:flex !text-white bg-[#ff2882] !border-none hover:!bg-[#ca1c64] "
              size="large"
              onClick={() => setOpenModal(!openModal)}
            >
              ورود یا عضویت
            </Button>
          </div>
        </div>
        {/* ------------------- B ---------------------- */}
        <div className="flex justify-between items-center pr-14 pt-10 lg:pt-0">
          <div className="flex flex-col gap-3 !mb-4 w-full">
            <div className="flex !items-center gap-3 text-3xl lg:text-5xl text-slate-800">
              <h1 className="Lalezar">سفارش آنلاین</h1>
              <div className="mt-3 lg:mt-1 Lalezar">
                <TimeComp personalArr={["شیرینی", "نان", "میوه", "غذا"]} />
              </div>
            </div>

            <h5 className="text-sm text-slate-600">
              سفارش آنلاین غذا ، میوه، نان، شیرینی و ...
            </h5>
            <Input
              className="mt-4 h-14 rounded-full w-[90%] !border-slate-200 shadow-xl !IRANSansX focus:!shadow-xl pr-5"
              placeholder="ابتدا آدرستان را انتخاب کنید."
              size="large"
              prefix={
                <>
                  <span className="text-slate-300 ml-1 text-xl">
                    <PushpinOutlined />
                  </span>
                </>
              }
              suffix={
                <>
                  <div className="text-white bg-[#ff2882] p-3 flex justify-center rounded-full w-full ml-1 text-lg">
                    <SearchOutlined />
                  </div>
                </>
              }
            />
          </div>

          <img src={banner} alt="None" className="hidden xl:flex" />
        </div>
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
          >
            ادامه
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default NavBanner;
