import * as icons from "react-icons/fa";
import { useText } from "./provider/AuthProvider";
import { format } from "date-fns";
export function DashboardSingleRecord(props) {
  const Icon2 = icons[props.icon];
  const {currency}=useText();
  const numberFormatter = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
  return (
  <div className="flex items-center py-5 justify-between border-b border-[#E5E7EB] gap-4">
    <div className="w-10 h-10">
    <figure className="rounded-full w-10 h-10 flex items-center justify-center" style={{backgroundColor:props.color}}>
      <Icon2 fill="#FFFFFF" size={20}/>
    </figure>
    </div>
    <div className="flex flex-col items-start w-full">
      <p className="font-normal text-black text-base ">{props.note}</p>
      <p className="font-normal text-[#6B7280] text-xs">{format(props.date,"yyy-MM-dd")}</p>
    </div>
    <p className="font-semibold text-base" style={{color:props.type=="expense"?"#F54949":"#23E01F"}}>{numberFormatter.format(props.amount)}{currency}</p>
  </div>)
}
