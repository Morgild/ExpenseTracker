import { useText } from "./provider/AuthProvider";
import { SingleRecord } from "./SingleRecord";
import * as icons from "react-icons/fa";

export function RecordsList() {
    const {records,filteredRecords}=useText()
    return (
        <div className="flex flex-col gap-3 mt-[24px]">
        {Object.keys(filteredRecords).map((item, index) => {
          const Icon = icons[filteredRecords[item].iconName];
          return (
            <SingleRecord
              key={index}
              color={filteredRecords[item].categoryColor}
              category={filteredRecords[item].note}
              amount={filteredRecords[item].amount}
              icon={filteredRecords[item].iconName}
              type={filteredRecords[item].type}
              date={filteredRecords[item].date}
            >
              <Icon />
            </SingleRecord>
          );
        })}
      </div>
    )
}


