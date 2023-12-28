export function SingleRecord() {
  return (
    <div className="flex bg-white px-6 py-3 justify-between items-center border border-solid border-[#E5E7EB] rounded-lg">
      <div className="flex gap-4 items-center">
        <input
          className="w-6 h-6 rounded-[4px] opacity-20 border border-solid border-[#1F2937]"
          type="checkbox"
          id="Record"
          name="Record"
          value={"Record"}
        />
        <div className="flex items-center justify-center rounded-full bg-[#0166FF] w-10 h-10"><img className="w-5 h-5" src="/categoryIcon.png" /></div>
        <div className="flex flex-col">
          <label className="text-base text-black">
            Lending & Renting
          </label>
          <p className="text-xs font-normal text-[#6B7280]">14:00</p>
        </div>
      </div>
      <p className="font-semibold text-[#23E01F] text-base">Value</p>
    </div>
  );
}
