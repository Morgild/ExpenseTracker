export function AmountRange() {
    return (
        <div className="flex flex-col justify-between py-1 gap-4">
        <h3 className="text-[#1F2937] text-base font-semibold">
          Amount Range
        </h3>
        <div className="w-full grid grid-cols-2 gap-4">
          <input
            className="rounded-lg border border-[#D1D5DB] flex py-3 px-4 bg-[#F3F4F6]"
            type="text"
            value={0}
          />
          <input
            className="rounded-lg border border-[#D1D5DB] flex py-3 px-4 bg-[#F3F4F6]"
            type="text"
            value={1000}
          />
        </div>
        <div className="w-full">
          <input className="w-full" type="range" min={10} max={1000} />
          <div className="flex justify-between">
            <p>min</p>
            <p>max</p>
          </div>
        </div>
      </div>
    )
}