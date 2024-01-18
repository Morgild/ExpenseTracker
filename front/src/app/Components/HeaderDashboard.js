"use client";
import { useRouter, usePathname } from "next/navigation";
import { useText } from "./provider/AuthProvider";


export function HeaderDashboard() {
  const router = useRouter();
  const { setAddRecord, isDbActive, setIsDbActive, signOut,profileLog,setProfileLog,handleProfileLog } = useText();
  const pathname = usePathname();


  if (pathname.includes("Dashboard")) {
    setIsDbActive(true);
  } else {
    setIsDbActive(false);
  }

  return (
    <nav className="flex w-full justify-between py-4 md:px-[120px] px-[40px] bg-white h-[72px] ">
      <div className="w-full max-w-[1200px] m-auto flex justify-between">
      <div className="nav-left flex md:flex-row flex-col md:gap-6 gap-1 items-left md:items-center">
        <img
          onClick={() => {
            router.push("/"), setIsDbActive(true);
          }}
          className="h-[27.4px] hidden md:flex"
          src="/logo.png"
        />

        <h3
          onClick={() => {
            router.push("/Dashboard");
          }}
          className={`text-base ${
            isDbActive ? "font-semibold" : "font-normal"
          } cursor-pointer`}
        >
          Dashboard
        </h3>
        <h3
          onClick={() => {
            router.push("/Records");
          }}
          className={`text-base ${
            isDbActive ? "font-normal" : "font-semibold"
          } cursor-pointer`}
        >
          Records
        </h3>
      </div>
      <div className="nav-right relative flex items-center gap-6">
        <div
          onClick={() => {
            setAddRecord(true);
          }}
          className="flex h-8 py-1 px-4 w-fit items-center justify-center gap-1 rounded-[20px] bg-[#0166FF] cursor-pointer"
        >
          <img className="w-5 h-5" src="/plus.png" />
          <span className="font-normal text-base text-white">Record</span>
        </div>
        <img
          onClick={() => {
          handleProfileLog()
          }}
          className="w-10 h-10 cursor-pointer"
          src="/Avatar.png"
        />
        {profileLog&&<div className="absolute z-[10] w-full right-0 top-[100%] flex flex-col gap-3 p-3 bg-[#F3F4F6] rounded-md font-normal text-base text-[#1F2937] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] cursor-pointer">
          <p className="w-full flex items-center justify-center text-center">Profile</p>
          <p onClick={() => {
            signOut();
            handleProfileLog()
          }} className="w-full pt-2 flex items-center justify-center border-t border-[#D1D5DB]">Log Out</p>
        </div>}
      </div>
      </div>
    </nav>
  );
}
