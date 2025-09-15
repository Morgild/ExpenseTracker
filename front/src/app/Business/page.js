"use client";
import { HeaderDashboard } from "../Components/HeaderDashboard";
import { useRouter } from "next/navigation";
import { useText } from "../Components/provider/AuthProvider";
import { Loading } from "../Components/Loading";
import { useEffect } from "react";

export default function Business() {
  const router = useRouter();
  const { isReady, isLoading, isLoggedIn, currency } = useText();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  useEffect(() => {
    if (!currency.includes("business")) router.push("/");
  }, [isLoggedIn]);

  if (isLoading) return <Loading />;
  if (!isReady) return <Loading />;
  if (!currency.includes("business")) return <Loading />;

  return (
    <main className="flex h-full w-full bg-[#F3F4F6] flex-col">
      <HeaderDashboard />
      <iframe
        className="w-full absolute bottom-0 h-[90%]"
        title="Business"
        width="100%"
        height="100%"
        src="https://app.powerbi.com/reportEmbed?reportId=4ee15820-8189-411d-b213-e977285c8c30&autoAuth=true&ctid=5675f83e-42b7-4852-85e3-99c98350c6f6"
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </main>
  );
}
