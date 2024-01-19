import { TbFaceIdError } from "react-icons/tb";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center p-[10%] min-h-screen text-3xl font-semibold text-red-600">
           <TbFaceIdError className="text-6xl md:text-9xl animate-pulse" />
            <p>Error 404! <br /><br /> Page Not Found</p>
            <Link to={'/'} className="btn btn-md btn-primary mt-10"> Go Home</Link>
        </div>
    );
};

export default ErrorPage;