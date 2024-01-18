import * as icons1 from "react-icons/fa";
import { useText } from "./provider/AuthProvider";
import { format } from "date-fns";

export function SingleRecord(props) {
  const {

    checked,
    setChecked,
    currency,
    checkList,
    setCheckList,
  } = useText();
  const Icon1 = icons1[props.icon];

  const numberFormatter = new Intl.NumberFormat("en-US", {
    style: "decimal",
  });
  return (
    <div className="flex bg-white px-6 py-3 justify-between items-center border border-solid border-[#E5E7EB] rounded-lg">
      <div className="flex gap-4 items-center">
        <input
          className="w-6 h-6 rounded-[4px] opacity-90 border border-solid border-[#1F2937]"
          id={props.id}
          type="checkbox"
          name="Record"
          value={"Record"}
          checked={checkList.includes(props.id)?true:false}
          onChange={(event) => {
            if (checkList.includes(event.target.id)) {
              setCheckList(checkList.filter((item)=>item!==event.target.id));
            } else setCheckList([...checkList, event.target.id]);
          }}
        />
        <div
          style={{ backgroundColor: props.color }}
          className="flex items-center justify-center rounded-full bg-[#0166FF] w-10 h-10"
        >
          <div>
            <Icon1 fill="#FFFFFF" />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="text-base text-black">{props.category}</label>
          <p className="text-xs font-normal text-[#6B7280]">
            {format(props.date, "yyyy-MM-dd")}
          </p>
        </div>
      </div>
      <p
        style={{ color: props.type == "expense" ? "#F54949" : "#23E01F" }}
        className="font-semibold text-base"
      >
        {numberFormatter.format(props.amount)}
        {currency}
      </p>
    </div>
  );
}
