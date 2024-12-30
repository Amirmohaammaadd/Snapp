import React, { Suspense, useEffect } from "react";
import AllItemFooter from "../Components/All Items Page/footer";
import AllItemNavbar from "../Components/All Items Page/navbar";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const AllMainItems = () => {
  const AllItemMainContentComponent = React.lazy(() =>
    import("../Components/All Items Page/mainContent")
  );

  const LoadingComponent = () => {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin
          indicator={
            <LoadingOutlined style={{ fontSize: 48, color: "red" }} spin />
          }
        />
      </div>
    );
  };

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = "auto";
    };
  }, []);

  return (
    <>
      <AllItemNavbar />

      <Suspense fallback={<LoadingComponent />}>
        <AllItemMainContentComponent />
      </Suspense>

      <AllItemFooter />
    </>
  );
};

export default AllMainItems;
