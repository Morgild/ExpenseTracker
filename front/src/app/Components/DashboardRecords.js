import { DashboardSingleRecord } from "./DashboardSingleRecord";
import { useText } from "./provider/AuthProvider";

export function DashboardRecords() {
const {records}=useText();
  return (
  <div className="flex flex-col px-6">
   {records.map((item, index) => {
          return (
            <DashboardSingleRecord
              key={index}
              color={item.categoryColor}
              note={item.note}
              amount={item.amount}
              icon={item.iconName}
              type={item.type}
              date={item.date}
            />
          );
        })}
  </div>)
}
