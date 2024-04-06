import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchPdf, setUserQuery } from "../Slices/UserSlice";
const HomepageSearch= React.memo(()=>{
  const dispatch = useDispatch();
  const[query,setQuery]= useState("");
  const pdfData = useSelector((state)=>state?.user?.pdfData);
  const searchData = pdfData?.filter((val) => val.pdfName.toLowerCase().includes(query?.toLowerCase())) ?? [];
    const searchHandle =()=>{
      dispatch(setUserQuery(query))
      try {
        dispatch(setSearchPdf(searchData))
      } catch (error) {
        console.log(error);
      }
    }

    return (
        <div className="flex justify-center h-[70px] items-center  ">
          <div className="relative  flex items-center">
            <input
              type="search"
              placeholder="Search pdf here.."
              className="border-2 border-orange-600 rounded-full px-4 py-2 w-[270px] sm:w-[600px] outline-none "
              onChange={(e)=>setQuery(e.target.value)}
            />
            <button onClick={searchHandle} className="bg-orange-600 hover:bg-orange-700 rounded-full absolute px-4 py-2 text-white right-0">Search</button>
          </div>
        </div>
      );
})

export default HomepageSearch;
