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
    <main className="flex h-full w-full bg-[#F3F4F6] flex-col">
      <HeaderDashboard />
      <iframe
        className="w-full absolute bottom-0 h-[90%]"
        title="UBG"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/reportEmbed?reportId=39c6b75b-5ef4-4f45-93a7-b6dea77129e4&autoAuth=true&ctid=5675f83e-42b7-4852-85e3-99c98350c6f6"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </main>
  );
}
