import { IconContext } from "react-icons";
import * as icons from "react-icons/fa";

export function SingleRecord(props) {
  const Icon1 = icons[props.icon];
  return (
    <div className="flex bg-white px-6 py-3 justify-between items-center border border-solid border-[#E5E7EB] rounded-lg">
      <div className="flex gap-4 items-center">
        <input
          className="w-6 h-6 rounded-[4px] opacity-90 border border-solid border-[#1F2937]"
          type="checkbox"
          id="Record"
          name="Record"
          value={"Record"}
        />
        <div
          style={{ backgroundColor: props.color }}
          className="flex items-center justify-center rounded-full bg-[#0166FF] w-10 h-10"
        >
          <div><Icon1 fill="#FFFFFF"/></div>
        </div>
        <div className="flex flex-col">
          <label className="text-base text-black">{props.category}</label>
          <p className="text-xs font-normal text-[#6B7280]">14:00</p>
        </div>
      </div>
      <p className="font-semibold text-[#23E01F] text-base">{props.amount}</p>
    </div>
  );
}
