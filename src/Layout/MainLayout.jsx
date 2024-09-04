import { Outlet } from "react-router-dom";
import NavBar from "../Component/Nav Bar/NavBar";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
