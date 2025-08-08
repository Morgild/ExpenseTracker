"use client";
import { HeaderDashboard } from "../Components/HeaderDashboard";
import { useRouter } from "next/navigation";
import { useText } from "../Components/provider/AuthProvider";
import { Loading } from "../Components/Loading";
import { useEffect } from "react";

export default function Education() {
  const router = useRouter();
  const { isReady, isLoading, isLoggedIn, currency } = useText();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  useEffect(() => {
    if (!currency.includes("education")) router.push("/");
  }, [isLoggedIn]);

  if (isLoading) return <Loading />;
  if (!isReady) return <Loading />;
  if (!currency.includes("education")) return <Loading />;

  return (
    <main className="relative flex min-h-screen h-full w-full bg-[#F3F4F6] flex-col">
      <HeaderDashboard />
      <p>Education</p>
      <div className="w-full gap-6 flex md:px-[120px] px-[40px] py-[32px] max-w-[1440px] m-auto"></div>
    </main>
  );
}
