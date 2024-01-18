import { useText } from "./provider/AuthProvider";
import { useRouter } from "next/navigation";
export function Step3() {
  const router = useRouter();
  const { setStep } = useText();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setStep(100);
        router.push("/");
      }}
      className="m-auto gap-3 w-screen gap-8 flex max-w-[384px] flex-col justify-center items-center"
    >
      <div className="flex flex-col min-w-[384px] gap-4 m-auto">
        <div className="flex flex-col m-auto gap-4">
          <div className="rounded-full m-auto h-12 w-12 bg-[#0166FF] p-2">
            <img src="/Check.png" />
          </div>
          <h2 className="text-2xl text-[#0F172A] font-semibold">Good job!</h2>
        </div>
      </div>
      <p className="text-[#475569] font-normal font-xs text-center">
        Your very first account has been created. Now continue to dashboard and
        start tracking
      </p>
      <button
        type="submit"
        className="w-full m-auto max-w-[384px] h-12 bg-[#0166FF] py-[10px] rounded-[20px] gap-1 text-white text-xl font-normal"
      >
        Go to Dashboard
      </button>
    </form>
  );
}
