"use client";
import { useRouter, usePathname } from "next/navigation";
import { useText } from "./provider/AuthProvider";

export function HeaderDashboard() {
  const router = useRouter();
  const {
    setAddRecord,
    isDbActive,
    setIsDbActive,
    signOut,
    profileLog,
    setProfileLog,
    handleProfileLog,
  } = useText();
  const pathname = usePathname();

  if (pathname.includes("Dashboard")) {
    setIsDbActive(true);
  } else {
    setIsDbActive(false);
  }

  return (
    <nav className="flex w-full justify-between   md:px-[120px] px-1 bg-gray-500 ">
      <div className="w-full max-w-[1400px] m-auto flex justify-between">
        <div className="nav-left max-h-[70px] flex md:flex-row flex-col md:gap-6 gap-1 items-left md:items-center select-none">
          <img
            // onClick={() => {
            //   router.push("/"), setIsDbActive(true);
            // }}
            className="h-[80%] hidden md:flex cursor-pointer"
            src="/w-uniform.png"
          />
        </div>
        <div className="nav-right relative flex items-center gap-6">
          <button
            onClick={() => {
              signOut();
              handleProfileLog();
            }}
            class="bg-white hover:bg-gray-100 text-gray-800 font-semibold md:py-2 md:px-4 py-1 px-1 border border-gray-400 rounded shadow"
          >
            Гарах
          </button>
        </div>
      </div>
    </nav>
  );
}
