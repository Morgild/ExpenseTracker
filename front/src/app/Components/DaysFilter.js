import { useText } from "./provider/AuthProvider";
export function DaysFilter() {
  const { days, minusDays, plusDays, setRefresh, refresh } = useText();
  return (
    <div className="flex gap-4 items-center">
      <span
        onClick={()=>{minusDays();setRefresh(refresh+1)}}
        className="w-8 h-8 flex items-center justify-center bg-[#E5E7EB] rounded-[8px] p-[6px] font-semibold cursor-pointer"
      >
        <img src="/left_arrow.png" />
      </span>
      <p>Last {days} Days</p>
      <span
        onClick={plusDays}
        className="w-8 h-8 rotate-180 flex items-center justify-center bg-[#E5E7EB] rounded-[8px] p-[6px] font-semibold cursor-pointer"
      >
        <img src="/left_arrow.png" />
      </span>
    </div>
  );
}
