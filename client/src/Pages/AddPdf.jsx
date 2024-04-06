import React, { useState } from "react";
import { toast } from "react-toastify";

const AddPdf = () => {
 const[pdfName,setPdfName] = useState("");
 const[pdfSem,setPdfSem] = useState("");
 const[pdfYear,setPdfYear] = useState("");
 const[pdf,setPdf] = useState();
  
  const onSubmitHandle = async (e) => {
    // console.log(pdfData);
    const token = localStorage.getItem("token");
    e.preventDefault();
   
    const formData = new FormData();
        // console.log);
    formData.append("pdfName", pdfName);
    formData.append("pdfSem", pdfSem);
    formData.append("pdfYear", pdfYear);
    if (pdf) {
        formData.append("pdf", pdf[0]); // Append the first file from the selected files array
      }
    for (var pair of formData.entries()) {
        console.log(pair[0] + ', ' + pair[1]); // Log key-value pairs
      }
      console.log(formData);
    
    try {
      const response = await fetch(`http://localhost:8000/admin/addPdf`, {
        method: "POST",
        headers: {
        //   "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body:(formData),
      });
      const val = await response.json();
      // toast.success(val.msg)
    toast.success(val.msg)
    setPdfName("");
    setPdfSem("");
    setPdfYear("");
    setPdf("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form method="POST" onSubmit={onSubmitHandle} encType="multipart/form-data">
          <div className="mb-5">
            <label
              for="name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Pdf Name
            </label>
            <input
              type="text"
              name="pdfName"
              id="name"
              onChange={(e)=>setPdfName(e.target.value)}
              placeholder="Pdf Name"
              value={pdfName}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="text"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Pdf Sem
            </label>
            <input
              type="text"
              name="pdfSem"
              id="phone"
              placeholder="Pdf Sem"
              value={pdfSem}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              onChange={(e)=>setPdfSem(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              for="text"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Pdf Year
            </label>
            <input
              type="text"
              name="pdfYear"
              value={pdfYear}
              id="email"
              placeholder="Pdf Year"
              onChange={(e)=>setPdfYear(e.target.value)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              for="email"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Choose Pdf
            </label>
            <input
              type="file"
              name="pdf"
              id="file"
              placeholder=" Choose Pdf"
              onChange={(e)=>setPdf(e.target.files)}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md cursor-pointer"
            />
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Upload Pdf
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPdf;
