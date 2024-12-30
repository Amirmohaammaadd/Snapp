import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import NotFound from "./Pages/NotFound";
import AllMainItems from "./Pages/AllMainItems";
import SellersRegister from "./Pages/SellersRegister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/home" Component={LandingPage} />

        <Route path="/allItems" Component={AllMainItems} />

        <Route path="/sellers-register" Component={SellersRegister} />

        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
