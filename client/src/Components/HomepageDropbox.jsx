import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchPdf, setUserQuery } from "../Slices/UserSlice";

const HomepageDropbox = () => {
  const [selectDropBox, setSelectDropBox] = useState();
  const user = useSelector((state) => state?.user?.user);
  const pdf = useSelector((state) => state?.user?.pdfData);
  const searchData =
    pdf?.filter((val) =>
      val.pdfName.toLowerCase().includes(selectDropBox?.toLowerCase())
    ) ?? [];
  const dispatch = useDispatch();
  const options = pdf?.filter((val) => val.pdfYear?.includes(user?.year));
  const handleSelect = () => {
    dispatch(setUserQuery(selectDropBox));
    try {
      dispatch(setSearchPdf(searchData));
    } catch (error) {}
  };
  return (
    <div className="flex h-[50px] justify-center items-center">
      <div className="w-[200px] max-w-lg">
        <select
          name="select"
          id="cars"
          defaultValue=""
          className="w-full border-2 border-orange-600 rounded-full px-4 py-1"
          onChange={(e) => setSelectDropBox(e.target.value)}
          onClick={handleSelect}
        >
          <option value="" disabled>
            Select
          </option>
          {options &&
            options.map((val, index) => (
              <option key={index} value={val.pdfName}>
                {val.pdfName}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default HomepageDropbox;
