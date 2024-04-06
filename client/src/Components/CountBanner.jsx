import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
const CountBanner = () => {
  const totalPdf = useSelector((state)=>state.user?.pdfData);
  const[students,setStudents] = useState(0);
  const hitApi=async(req,res)=>{
    try {
      const response = await fetch(`http://localhost:8000/user/totalStudents`,{
        method:"GET",
      })
      const val = await response.json();
      setStudents(val?.total)
      // console.log(val);
    } catch (error) {
      console.log(error);
    }
  }
    useEffect(()=>{
      
       hitApi();
    },[])
  return (
    <div className="flex bg-orange-600 h-[90px] justify-evenly px-1 items-center text-white ">
      <div className="px-2" >
        <p className=" text-2xl sm:text-2xl ">{students}</p>
        <p className=" text-xs sm:text-sm">Students Register </p>
      </div>
      
      <div>
        <p className=" text-2xl sm:text-2xl">{totalPdf?.length}</p>
        <p className="text-xs sm:text-sm">Total Pdf</p>
      </div>
      <div>
        <p className=" text-2xl sm:text-2xl">{students}</p>
        <p className="text-xs sm:text-sm">Clg present</p>
      </div>
      <div>
        <p className=" text-2xl sm:text-2xl">100+</p>
        <p className="text-xs sm:text-sm">Pdf soon..</p>
      </div>
    </div>
  );
};

export default CountBanner;
