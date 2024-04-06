import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { setMobileMenu } from "../Slices/UserSlice";

const MobileMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const MenuItem = React.memo(({ text }) => {
    const handleClick = () => {
      if (text === "Suggestion") {
          // Open Google Form link in a new tab
          window.open("https://forms.gle/oQQsVT4LukgyNXgP9", "_blank");
      } else {
          // Navigate to the corresponding route
          console.log(text);
          dispatch(setMobileMenu(false))
          navigate(`/${text.toLowerCase()}`);

      }
  };

  return (
      <li className='hover:text-orange-600' onClick={handleClick}>
          {text}
      </li>
  );
  });
  return (
    <div className=" absolute w-full z-10 text-black bg-white outline-none border-none flex justify-center ">
      <ul className="  flex flex-col sm:gap-10 text-black font-Roboto font-semibold ">
        <MenuItem text="Home" />
        <MenuItem text="About" />
        <MenuItem text="Contact" />
        <MenuItem text="Suggestion" />
      </ul>
    </div>
  );
};

export default MobileMenu;
