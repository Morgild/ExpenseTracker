"use client";
import { useRouter, usePathname } from "next/navigation";
import { useText } from "./provider/AuthProvider";

export function HeaderDashboard() {
  const router = useRouter();
  const { setIsDbActive, signOut, handleProfileLog, currency } = useText();
  const pathname = usePathname();
  const division = ["Uniform", "Business"];

  if (pathname.includes("Dashboard")) {
    setIsDbActive(true);
  } else {
    setIsDbActive(false);
  }

  return (
    <nav className="flex w-full justify-between   md:px-[120px] px-1 bg-gray-500 select-none ">
      <div className="w-full max-w-[1400px] m-auto flex items-center">
        <img
          onClick={() => {
            router.push("/Dashboard");
          }}
          className="h-1/4 w-[8%] hidden md:flex cursor-pointer"
          src="/w-uniform.png"
        />

        <div className="flex gap-10 w-full items-center flex-auto justify-center hover">
          {division.map((item, index) => (
            <p
              onClick={() => {
                router.push(item);
              }}
              className="flex items-center py-2 px-4 cursor-pointer select-none hover:bg-gray-200 rounded-md bg-white"
            >
              {item}
            </p>
          ))}
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
