import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { useText } from "./provider/AuthProvider";

export function NewOld() {

  const {old,setOld,refresh,setRefresh}=useText();
  const handleOld = () => {
    setOld((prev) => !prev);
    setRefresh(refresh+1)
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
        <IoMdArrowDropdown style={{rotate:old?'180deg':'0deg'}}/>
      </div>
    </div>
  );
}
