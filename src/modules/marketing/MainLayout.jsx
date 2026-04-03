import { Outlet } from "react-router-dom";
import DarkNavbar from "./pages/NavBar";
import Footer from "./pages/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-full">
      <DarkNavbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
