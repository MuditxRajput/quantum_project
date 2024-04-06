import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import pdfImage from "../Images/pdf.png";
import { setPdfData } from "../Slices/UserSlice";
const PdfArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedPdfUrl, setSelectedPdfUrl] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const searchQuery = useSelector((state) => state.user?.searchPdf);
  const searchItem = useSelector((state) => state.user?.query);
  const user = useSelector((state) => state.user?.user);
  const totalPdf = useSelector((state) => state?.user?.pdfData);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  const finalPdf = totalPdf?.filter((val) => val?.pdfSem.includes(user?.year));
  const hitApi = async () => {
    try {
      const response = await fetch(`http://localhost:8000/admin/numberOfPdf`, {
        method: "GET",
      });
      const val = await response.json();
      dispatch(setPdfData(val.numberOfPdf));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    hitApi();
  }, []);

  const handlePdfClick = (pdfUrl) => {
    navigate("/view", { state: { pdfUrl: pdfUrl } });
  };

  return (
    <div>
      {userInfo ? (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 m-3 p-5 gap-2 md:gap-7">
          {(searchItem === null && searchQuery.length === 0) ||
          searchItem === "" ? (
            finalPdf?.map((val, index) => (
              <div
                key={index}
                className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[170px] sm:h-[260px] h-[250px]  rounded-2xl border-2 border-black"
                onClick={() => handlePdfClick(val.pdfLink)}
              >
                <div>
                  <img src={pdfImage} alt="pdf" />
                </div>
                <div className="px-1 text-sm">
                  {val.pdfName}
                  <br />
                  <p className="font-semibold"> Year: {val.pdfYear} </p>
                  <br />
                </div>
              </div>
            ))
          ) : searchItem !== null && searchQuery.length === 0 ? (
            <div>
              <p className="text-red-500 font-semibold">
                Coming soon... fill the suggestion form and you will get the pdf
                in 3hr..
              </p>
            </div>
          ) : (
            searchQuery?.map((val, index) => (
              <div
                key={index}
                className="cursor-pointer hover:shadow-lg hover:shadow-orange-500 sm:w-[170px] sm:h-[260px] h-[290px] rounded-2xl border-2 border-black"
                onClick={() => handlePdfClick(val.pdfLink)}
              >
                <div>
                  <img src={pdfImage} alt="pdf" />
                </div>
                <div className="px-1">
                  {val.pdfName}
                  <br />
                  <p className="font-semibold"> Year: {val.pdfYear} </p>
                  <br />
                </div>
              </div>
            ))
          )}
        </div>
      ) : (
        <p className="text-red-500 font-semibold px-3 ">
          No need to register first
        </p>
      )}

      {/* Conditionally render the PdfViewer component when a PDF is selected */}
    </div>
  );
};

export default PdfArea;
