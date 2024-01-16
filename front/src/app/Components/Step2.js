import { useText } from "./provider/AuthProvider";
export function Step2() {
    const {step, setStep, changeStep,currency} = useText();
    return (
      <div className="m-auto gap-8 w-screen gap-3 flex max-w-[384px] flex-col justify-center items-center">
      <div className="flex flex-col min-w-[384px] gap-4 m-auto">
        <div className="flex flex-col m-auto gap-4">
          <div className="rounded-full m-auto h-12 w-12 bg-[#0166FF] p-2">
            <img src="/Coins.png" />
          </div>
          <h2 className="text-2xl text-[#0F172A] font-semibold">
            Set up your cash Balance
          </h2>
        </div>
        <input
          type="text"
          className="w-full h-[64px] p-4 rounded-lg bg-[#F3F4F6] border border-[#D1D5DB border-solid] font-semibold"
          placeholder="Balance"
        />
      </div>
      <p className="text-[#475569] w-full font-normal font-xs text-justify">
        How much cash do you have in your wallet?
      </p>
      <button
        onClick={() => {
          changeStep();
          console.log(currency)
        }}
        className="w-full m-auto max-w-[384px] h-12 bg-[#0166FF] py-[10px] rounded-[20px] gap-1 text-white text-xl font-normal"
      >
        Confirm
      </button>
    </div>
    )
}