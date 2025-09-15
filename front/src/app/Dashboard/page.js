"use client";
import { useEffect, useState } from "react";
import { HeaderDashboard } from "../Components/HeaderDashboard";
import { useText } from "../Components/provider/AuthProvider";
import { Loading } from "../Components/Loading";
import { useRouter } from "next/navigation";
import { format } from "date-fns";

export default function Dashboard() {
  const { isLoggedIn, isLoading, isReady, currency } = useText();

  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  if (isLoading) return <Loading />;

  if (!isReady) return <Loading />;

  return (
    <main className="flex h-full w-full bg-black flex-col">
      <div className="flex">
        <div
          onClick={() => {
            router.push("/Uniform");
          }}
          className="bg-[#FCA90D] cursor-pointer w-1/2 w-1/2 flex flex-row h-screen text-white gap-3 items-center justify-center select-none"
        >
          <div>
            <img className="w-[120px]" src="/w-uniform.png" />
          </div>
        </div>
        <div
          onClick={() => {
            router.push("/Business");
          }}
          className="bg-[#0166FF] cursor-pointer w-1/2  flex flex-row h-screen text-white gap-3 items-center justify-center select-none"
        >
          <div>
            <img className="w-[120px]" src="/business.png" />
          </div>
        </div>
      </div>
    </main>
  );
}
