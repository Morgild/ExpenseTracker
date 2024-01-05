import { useText } from "./provider/AuthProvider";
import { SingleRecord } from "./SingleRecord";

export function RecordsList() {
  const { records, radioChecked, categoryFilter, setCategoryFilter,rangeValue,rangeMin,sum,setSum } =
    useText();
    const calculateSum=()=>{
      let total=0;
      for (let i=0;i<records.length;i++){
        total+=records.amount[i]
      }
      setSum[total]
    }
    console.log(records)
  return (
    <>
    <div className="flex bg-white px-6 py-3 justify-between border border-solid border-[#E5E7EB] rounded-lg">
    <div className="flex gap-4">
      <input
        className="w-6 h-6 rounded-[4px] opacity-20 border border-solid border-[#1F2937]"
        type="checkbox"
        name="selectAll"
        value={"SelectAll"}
      />
      <label onClick={calculateSum}>Select All</label>
    </div>
    <p className="font-semibold text-[#94A3B8] text-base">
      {sum}
    </p>
  </div>
    <div className="flex flex-col gap-3 mt-[24px]">
      {records
        .filter((record) => {
          if (!radioChecked) return true;
          return record.type.toLowerCase() === radioChecked;
        })
        .filter((record) => {
          if (!categoryFilter.length) return true;
          return (!categoryFilter.includes(record.category))
        })
        .filter((record)=>{
          return record.amount<=rangeValue;
        })
        .map((item, index) => {
          return (
            <SingleRecord
              key={index}
              color={item.categoryColor}
              category={item.note}
              amount={item.amount}
              icon={item.iconName}
              type={item.type}
              date={item.date}
            />
          );
        })}
    </div>
    </>
  );
}
