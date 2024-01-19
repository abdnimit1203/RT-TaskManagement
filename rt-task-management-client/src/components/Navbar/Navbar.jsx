import { Link, NavLink, Outlet } from "react-router-dom";
import { CgMenuRound } from "react-icons/cg";
import { FaGripLinesVertical } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import LogOutButton from "../Buttons/LogOutButton";

const Navbar = () => {
  const { user, loading } = useAuth();

  const navlinks = (
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
  );
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
            <Link to={"/"} className="cursor-pointer">
              <h1 className="transition duration-300 ease-in-out hover:scale-105 hover:text-secondary font-bold text-xl text-center ">
                Task Management App
              </h1>
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
            <Link to={"/"} className="cursor-pointer">
              <h1 className="transition duration-300 ease-in-out hover:scale-105 hover:text-secondary font-bold text-xl text-center  border-b-2 border-b-black pb-2">
                Task Management App
              </h1>
            </Link>
          </div>
          {loading ? (
            <img
              src="/loader.png"
              alt="laoding..."
              className="animate-spin max-w-20 mx-auto"
            />
          ) : (
            <div>
              {user ? (
                <div className="flex  flex-col gap-2 items-center text-center w-full justify-center pb-6">
                  {user?.photoURL ? (
                   
                    <img
                      src={user?.photoURL}
                      alt="user dp"
                      className="rounded-full border-4 border-success shadow-lg max-w-[60px] aspect-square mx-auto"
                    />
                  ) : (
                    <img
                      src={"https://i.ibb.co/dPW8Fzv/agent-dp.jpg"}
                      alt="user dp"
                      className="rounded-full border-4 border-success shadow-lg max-w-[60px] aspect-square"
                    />
                  )}
                  <p className="font-semibold text-lg cursor-help" title={user?.email}>
                    Hi , {user?.displayName}
                  </p>
                  <LogOutButton />
                </div>
              ) : (
                <div className="flex gap-2 items-center text-center w-full justify-center pb-6">
                  <Link to={"/login"} className="btn btn-sm btn-secondary">
                    Login
                  </Link>
                  <FaGripLinesVertical />

                  <Link to={"/register"} className="btn btn-sm bg-accent">
                    Register
                  </Link>
                </div>
              )}
            </div>
          )}

          {navlinks}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
