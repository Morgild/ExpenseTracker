import { useText } from "./provider/AuthProvider"
const numberFormatter = new Intl.NumberFormat('en-US', {
  style: 'decimal',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});
export function AmountRange() {
  const {rangeMin, rangeMax, rangeValue, setRangeMin, setRangeMax, setRangeValue}=useText();
    return (
        <div className="flex flex-col justify-between py-1 gap-4">
        <h3 className="text-[#1F2937] text-base font-semibold">
          Amount Range
        </h3>
        <div className="w-full grid grid-cols-2 gap-4">
          <input
           onChange={(event)=>{setRangeMin(event.target.value)}}
            className="rounded-lg border border-[#D1D5DB] flex py-3 px-4 bg-[#F3F4F6]"
            type="text"
            placeholder={rangeMin}
      
          />
          <input
            onChange={(event)=>{setRangeValue(event.target.value)}}
            className="rounded-lg border border-[#D1D5DB] flex py-3 px-4 bg-[#F3F4F6]"
            type="text"
            value={rangeValue}
            placeholder={numberFormatter.format(rangeValue)}
          />
        </div>
        <div className="w-full">
          <div className="RANGE gap-[0px] relative">
          <input className=" absolute w-full text-black bg-gray-200 h-1" value={rangeValue} onChange={(event)=>{setRangeValue(event.target.value)}} type="range" min={rangeMin} max={1000000} />
          </div>
          <div className="mt-5 flex justify-between">
            <p>{numberFormatter.format(rangeMin)}</p>
            {/* <p>{numberFormatter.format(rangeValue)}</p> */}
            <p>{numberFormatter.format(1000000)}</p>
          </div>
        </div>
      </div>
    )
}