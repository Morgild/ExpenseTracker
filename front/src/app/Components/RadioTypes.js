import { useText } from "./provider/AuthProvider"

const radioValues=[
  "All", "Income", "Expense"
]
export function RadioTypes() {
const {filterRecords,refresh}=useText();
    return (
        <div className="TYPES flex flex-col gap-4">
        <h4 className="text-base font-semibold text-[#1F2937]">Types</h4>
        {radioValues.map((item, index) => (
                      <label  key={index} className="flex py-1 px-3 gap-2 items-center">
                      <input
                      onClick={(event)=>{
                        filterRecords(event.target.value)
                      }}
                        className="h-4 w-4 opacity-50 border border-[#374151]"
                        type="radio"
                        name="radio"
                        value={item!=="All"?item.toLowerCase():""}
                      />
                      {item}
                    </label>
                    ))}
      </div>
    )
}