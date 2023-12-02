import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import NavBar from "../Header/NavBar";
import './MainLayout.css'

const MainLayout = () => {
  return (
    <div>
      <NavBar />
      <div className="layout">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
