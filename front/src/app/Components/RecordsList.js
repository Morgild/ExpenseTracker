import { useText } from "./provider/AuthProvider";
import { SingleRecord } from "./SingleRecord";

export function RecordsList() {
  const { records, radioChecked, categoryFilter, setCategoryFilter,rangeValue,rangeMin } =
    useText();
  return (
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
  );
}
