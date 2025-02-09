import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import NotFound from "./Pages/NotFound";
import AllMainItems from "./Pages/AllMainItems";
import React, { Suspense, useEffect, useState } from "react";
import Logo from "./assets/img/snapp logo/snapLogo.png";
import SellersRegister from "./Pages/SellersRegister";
import { ShopOutlined } from "@ant-design/icons";

const AllMainItemsPage = React.lazy(() => import("./Pages/AllMainItems"));

const LoadingComponent = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <img src={Logo} alt="None" className="w-1/5 animate-pulse" />
    </div>
  );
};

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <button
        className="bg-[#ff2882] fixed -left-4 cursor-pointer top-1/2 text-white rounded-t-md p-1 px-3 text-sm transform rotate-[90deg] -translate-x-5 hover:translate-x-0 duration-300"
        onClick={() => {
          if (theme == "light") {
            document.documentElement.classList.add("dark");
            setTheme("dark");
          } else {
            document.documentElement.classList.remove("dark");
            setTheme("light");
          }
        }}
      >
        بیشتر
      </button>

      {/* <div className="flex justify-center items-center ">

      <button className="mt-10 group">
        <div className="rounded-full relative">
          <span className="flex size-10 bg-[#ff00a6] hover:w-[280px] transition-all duration-500 absolute rounded-xl">
            <ShopOutlined className="text-2xl text-white mr-2" />

            <p className="group-hover:flex hidden p-2 text-white text-nowrap">
              این برای تست این کامپوننت هست
            </p>
          </span>
        </div>
      </button>


    </div> */}

      <Routes>
        <Route path="/" Component={LandingPage} />

        <Route path="/home" Component={LandingPage} />

        {/* <Route
        path="/allItems"
        element={
          <Suspense fallback={<LoadingComponent />}>
            <AllMainItemsPage />
          </Suspense>
        }
      /> */}

        <Route path="/allItems" Component={AllMainItems} />

        <Route path="/sellers-register" Component={SellersRegister} />

        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
