import { useState } from "react";
import { useText } from "./provider/AuthProvider";
import { SingleRecord } from "./SingleRecord";

export function RecordsList() {
  const [sumRecords, setSumRecords]=useState(0)
  const {
    records,
    radioChecked,
    categoryFilter,
    rangeValue,
    numberFormatter,
    currency,
    checked,
    setChecked,
    checkList,
    setCheckList,
    searchValue
  } = useText();
console.log(checkList)
  const sumIncome = records
    .filter((record) => {
      if (!radioChecked) return true;
      return record.type.toLowerCase() === radioChecked;
    })
    .filter((record) => {
      if (!categoryFilter.length) return true;
      return !categoryFilter.includes(record.category);
    })
    .filter((record) => {
      if (!checkList.length) return true;
      return checkList.includes(record._id);
    })
    .filter((record) => {
      return record.type==="income"
    })
    .filter((record) => {
      return record.amount <= rangeValue;
    })
    .filter((record) => {
      if(!searchValue) return true;
      return record.note.toLowerCase().includes(searchValue.toLowerCase());
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

    const sumExpense = records
    .filter((record) => {
      if (!radioChecked) return true;
      return record.type.toLowerCase() === radioChecked;
    })
    .filter((record) => {
      if (!categoryFilter.length) return true;
      return !categoryFilter.includes(record.category);
    })
    .filter((record) => {
      if (!checkList.length) return true;
      return checkList.includes(record._id);
    })
    .filter((record) => {
      return record.type==="expense"
    })
    .filter((record) => {
      return record.amount <= rangeValue;
    })
    .filter((record) => {
      if(!searchValue) return true;
      return record.note.toLowerCase().includes(searchValue.toLowerCase());
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

    
  

  function selectAll() {
    const arr=[];
    for (let i = 0; i<records.length; i++) {
      arr.push(records[i]._id)
    }
    setCheckList(arr)
  }

  return (
    <>
      <div className="flex bg-white px-6 py-3 justify-between border border-solid border-[#E5E7EB] rounded-lg">
        <div className="flex gap-4">
          <input
            className="w-6 h-6 rounded-[4px] opacity-80 border border-solid border-[#1F2937]"
            type="checkbox"
            name="selectAll"
            value={"SelectAll"}
            onChange={(event) => {
              if (event.target.checked) {
               selectAll();
              } else {
                setCheckList([]);
              }
            }}
          />
          <label>Select All</label>
        </div>
        <p className="font-semibold text-[#94A3B8] text-base">
          {numberFormatter.format(checkList.length?(sumIncome-sumExpense):null)}
          {currency}
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
            return !categoryFilter.includes(record.category);
          })
          .filter((record) => {
            return record.amount <= rangeValue;
          })
          .filter((record) => {
            if(!searchValue) return true;
            return record.note.toLowerCase().includes(searchValue.toLowerCase());
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
                id={item._id}
              />
            );
          })}
      </div>
    </>
  );
}
