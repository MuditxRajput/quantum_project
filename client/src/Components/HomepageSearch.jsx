import React from "react";
const HomepageSearch= React.memo(()=>{
    return (
        <div className="flex justify-center h-[70px] items-center  ">
          <div className="relative  flex items-center">
            <input
              type="search"
              placeholder="Search pdf here.."
              className="border-2 border-orange-600 rounded-full px-4 py-2 w-[270px] sm:w-[600px] outline-none "
            />
            <button className="bg-orange-600 hover:bg-orange-700 rounded-full absolute px-4 py-2 text-white right-0">Search</button>
          </div>
        </div>
      );
})
// const HomepageSearch = () => {

// };

export default HomepageSearch;
