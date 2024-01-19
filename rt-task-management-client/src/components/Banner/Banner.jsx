import Lottie from "lottie-react";
import taskbanner from "../../assets/taskbanneranime1.json"
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className="p-6 lg:p-10 lg:py-16 flex flex-col lg:flex-row gap-6 items-center bg-gradient-to-r from-amber-100 to-accent rounded-xl ">
      <div className="lg:w-[70%] lg:mx-auto flex flex-col gap-4">
        <h1 className="font-bold text-2xl lg:text-3xl pt-6">
          Task Management App: <span className="text-secondary"> Your Personal Task management hub</span>
        </h1>
        <p className="text-lg mt-4">
          Immerse yourself in a world of unparalleled task efficiency. Our
          platform empowers individuals to seamlessly manage their daily
          workload, providing a personalized hub for task mastery.
        </p>
        <Link to={'/login'}>
          <button className="button-77 button-78 ">Lets Explore</button>
        </Link>
      </div>
      <div className="w-fit mx-auto">
        <Lottie animationData={taskbanner} loop={true} className="w-80 md:w-[70%]  mx-auto" />
      </div>
    </div>
    );
};

export default Banner;