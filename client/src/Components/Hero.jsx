import React from "react";
import { useDispatch } from "react-redux";
import image from '../Images/quantum_image.jpg';
import { setUser } from "../Slices/UserSlice";
import HeaderButton from "./HeaderButton";
const Hero = () => {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  dispatch(setUser(JSON.parse(user)));
  return (
    <div className="flex flex-col sm:flex-row  h-[400px]">
      <div className=" p-1  flex flex-col flex-1   justify-center items-center">
        <div className=" flex flex-col gap-5 justify-center ">
          <h2 className=" text-3xl sm:text-5xl font-semibold">
            
            PDF Paradise<br></br>Find Aktu Quantum <br></br>Here!
          </h2>
          <p className=" text-sm sm:text-md">
            Welcome to our nocturnal haven!<br></br> Dive into our treasure
            trove of PDF resources, crafted especially for<br></br> the midnight
            mavens. who thrive under pressure.
          </p>
          <div className="flex">
            <HeaderButton  text="Sign Up" />
          </div>
        </div>
      </div>
      <div className="flex flex-1  justify-center items-center">
        <img src={image} alt="hero" className=" w-[140px] sm:w-[450px]" />
      </div>
    </div>
  );
};

export default Hero;
