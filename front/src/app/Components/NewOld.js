import { IoMdArrowDropdown } from "react-icons/io";
export function NewOld() {
    return (
        <div className="w-[180px] flex justify-between py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg items-center relative cursor-pointer">
        <p className="font-semibold text-[#1F2937] text-base mr-[16px]">
          Newest first
        </p>
        <IoMdArrowDropdown />
        <div className="hidden w-[180px] top-[100%] left-[0] flex justify-between py-3 px-4 bg-[#F9FAFB] border border-[#D1D5DB] rounded-lg items-center absolute cursor-pointer">
          <p className="font-semibold text-[#1F2937] text-base mr-[16px]">
            Oldest first
          </p>
          <IoMdArrowDropdown />
        </div>
      </div>
    )
}