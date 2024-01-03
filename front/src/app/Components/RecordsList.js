import { useText } from "./provider/AuthProvider";
import { SingleRecord } from "./SingleRecord";
import * as icons from "react-icons/fa";

export function RecordsList() {
    const {records}=useText()
    return (
        <div className="flex flex-col gap-3 mt-[24px]">
        {Object.keys(records).map((item, index) => {
          const Icon = icons[records[item].iconName];
          return (
            <SingleRecord
              key={index}
              color={records[item].categoryColor}
              category={records[item].category}
              amount={records[item].amount}
              icon={records[item].iconName}
            >
              <Icon />
            </SingleRecord>
          );
        })}
      </div>
    )
}


