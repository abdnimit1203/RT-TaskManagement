import { Link, NavLink, Outlet } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { FaGripLinesVertical } from "react-icons/fa";

const Navbar = () => {


    const  navlinks = (
        <>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? " active bg-primary px-3 py-2   font-semibold rounded-xl"
              : "hover:bg-primary px-3 py-2 hover:text-base-100 transition duration-200 rounded-xl"
          }
        >
          All Tasks
        </NavLink>
        
        </>
    )
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center ">
      <div className="flex w-[100%] bg-primary ">

        <label 
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <CgMenuRound className="text-4xl" />
          <Link to={'/'} className="cursor-pointer">
            
            <h1 className="transition duration-300 ease-in-out hover:scale-105 hover:text-secondary font-bold text-xl text-center ">Task Management App</h1>
              </Link>
        </label>
      </div>
      <div className="w-[90%] mx-auto pb-[30%] pt-10">
        <Outlet />
      </div> 
      </div>
      <div className="drawer-side z-10">

        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-primary text-base-content">
          {/* Sidebar content here */}
          <div className="p-[10%] mx-auto">
            <Link to={'/'} className="cursor-pointer">
            
          <h1 className="transition duration-300 ease-in-out hover:scale-105 hover:text-secondary font-bold text-xl text-center  border-b-2 border-b-black pb-2">Task Management App</h1>
            </Link>
          </div>
          <div className="flex gap-2 items-center text-center w-full justify-center pb-6">
           <Link to={'/login'} className="btn btn-sm btn-secondary">Login</Link>
           <FaGripLinesVertical />

           <Link to={'/register'} className="btn btn-sm bg-accent">Register</Link>
          </div>
          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
