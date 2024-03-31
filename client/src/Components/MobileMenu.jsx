import React from "react";

const MobileMenu = () => {
  const MenuItem = React.memo(({ text }) => {
    return <li className="hover:text-orange-600  ">{text}</li>;
  });
  return (
    <div className=" absolute w-full z-10 text-black bg-white outline-none border-none flex justify-center ">
      <ul className="  flex flex-col sm:gap-10 text-black font-Roboto font-semibold ">
        <MenuItem text="Home" />
        <MenuItem text="About Us" />
        <MenuItem text="Contact Us" />
        <MenuItem text="Suggestion" />
      </ul>
    </div>
  );
};

export default MobileMenu;
