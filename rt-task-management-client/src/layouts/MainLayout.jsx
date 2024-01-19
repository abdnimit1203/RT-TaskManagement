import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <div><Navbar/></div>
      
      <div  className="absolute bottom-0 w-full overflow-hidden -z-10"><Footer/></div>
    </div>
  );
};

export default MainLayout;
