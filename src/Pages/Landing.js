import ContactUs from "../Components/Landing Page/contactUs";
import Footer from "../Components/Landing Page/footer";
import ItemBox from "../Components/Landing Page/itemBox";
import MainOffer from "../Components/Landing Page/mainOffer";
import NavBanner from "../Components/Landing Page/navBanner";
import Ownbussines from "../Components/Landing Page/ownbussines";

const LandingPage = () => {
  return (
    <div className="dark:bg-dark-background transition-all duration-700">
      <div className="container mx-auto w-[80%] lg:w-[68%]">
        <div className="space-y-16 pt-10">
          <NavBanner />
          <ItemBox />
          <MainOffer />
          <ContactUs />
          <Ownbussines />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
