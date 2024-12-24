import { Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/Landing";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" Component={LandingPage} />
        <Route path="/home" Component={LandingPage} />

        <Route path="*" Component={NotFound} />
      </Routes>
    </>
  );
}

export default App;
