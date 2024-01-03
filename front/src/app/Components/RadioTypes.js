export function RadioTypes() {
    return (
        <div className="TYPES flex flex-col gap-4">
        <h4 className="text-base font-semibold text-[#1F2937]">Types</h4>
        <label className="flex py-1 px-3 gap-2 items-center">
          <input
            className="h-4 w-4 opacity-50 border border-[#374151]"
            type="radio"
            name="radio"
          />
          All
        </label>
        <label className="flex py-1 px-3 gap-2 items-center">
          <input
            className="h-4 w-4 opacity-50 border border-[#374151]"
            type="radio"
            name="radio"
          />
          Income
        </label>
        <label className="flex py-1 px-3 gap-2 items-center">
          <input
            className="h-4 w-4 opacity-50 border border-[#374151]"
            type="radio"
            name="radio"
          />
          Expense
        </label>
      </div>
    )
}