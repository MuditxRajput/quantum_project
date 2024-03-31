import React from "react";

const HomepageDropbox = () => {
  return (
    <div className="flex  h-[50px] justify-center items-center">
      <div className=" w-[200px] max-w-lg">
        <select
          name="select"
          id="cars"
          defaultValue=""
          className="w-full border-2 border-orange-600 rounded-full px-4 py-1"
        >
          <option value="" disabled>Select</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default HomepageDropbox;
