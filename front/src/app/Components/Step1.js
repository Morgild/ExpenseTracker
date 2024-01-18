import { useText } from "./provider/AuthProvider";
export function Step1() {
  const {changeStep, setCurrency, } = useText();

  function chooseCurrency(curr) {
    if (curr.slice(0, 3) == "MNT") { setCurrency("₮") };
    if (curr.slice(0, 3) == "USD") { setCurrency("$") };
    if (curr.slice(0, 3) == "CNY") { setCurrency("¥") };
  }
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      changeStep();
      chooseCurrency(event.target.currencyValue.value);
      console.log(event.target.currencyValue.value)
    }} className="m-auto w-screen gap-8 flex max-w-[384px] flex-col justify-center items-center">
      <div className="flex flex-col min-w-[384px] gap-4 m-auto">
        <div className="flex flex-col m-auto gap-4">
          <div className="rounded-full m-auto h-12 w-12 bg-[#0166FF] p-2">
            <img src="/Money.png" />
          </div>
          <h2 className="text-2xl text-[#0F172A] font-semibold">
            Select base currency
          </h2>
        </div>
        <select
          type="text"
          className="w-full h-[64px] p-4 rounded-lg bg-[#F3F4F6] border border-[#D1D5DB border-solid] font-semibold"
          placeholder="Password"
          name="currencyValue"
        >
          <option>MNT - Mongolian Tugrik</option>
          <option>USD - United States Dollar</option>
          <option>CNY - Chinese Yuan</option>
        </select>
      </div>
      <p className="text-[#475569] font-normal font-xs text-justify">
        Your base currency should be the one you use most often. All
        transaction in other currencies will be calculated based on this
        one
      </p>
      <button
        type="submit"
        className="w-full m-auto max-w-[384px] h-12 bg-[#0166FF] py-[10px] rounded-[20px] gap-1 text-white text-xl font-normal"
      >
        Confirm
      </button>
    </form>
  )
}