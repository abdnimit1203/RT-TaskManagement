import { MdLogout } from "react-icons/md";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const LogOutButton = () => {
    const {logOut} = useAuth()

const handleLogOut=()=>{
    logOut().then(
        toast("User has been logged out", {
          icon: <MdLogout />,
          style: {
            background: "#ff92b4",
          },
        })
      );
}
    return (
        <div >
            <button onClick={handleLogOut} className="btn btn-sm btn-error text-white ">
            Log out
            </button>
        </div>
    );
};

export default LogOutButton;