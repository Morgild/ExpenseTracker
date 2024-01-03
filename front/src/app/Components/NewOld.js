import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

export function NewOld() {
  const [old, setOld] = useState(false);
  const handleOld = () => {
    setOld((prev) => !prev);
  };
  return (
    <div className="border border-[#D1D5DB] relative rounded-lg ">
      <div
        onClick={() => {handleOld()}}
        className={`${old ? "top-[100%]" : "top-[0]"} relative w-[180px] flex justify-between py-3 px-4 bg-[#F9FAFB] rounded-lg items-center cursor-pointer`}
      >
        <p className="font-semibold text-[#1F2937] text-base mr-[16px]">
          {old?"Oldest first":"Newest first"}
        </p>
        <IoMdArrowDropdown />
      </div>
    </div>
  );
}
