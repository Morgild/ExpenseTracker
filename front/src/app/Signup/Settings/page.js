"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Step1 } from "@/app/Components/Step1";
import { Step2 } from "@/app/Components/Step2";
import { Step3 } from "@/app/Components/Step3";
import { useText } from "@/app/Components/provider/AuthProvider";

export default function Settings() {
  const {step, setStep, changeStep}=useText();
  const router=useRouter();

  return (
    <main className="flex overflow-hidden">
      <div className="flex w-full flex-col gap-[40px] mt-10">
      <div className="m-auto w-full flex items-center justify-center max-h-[34.31px] max-w-[92.34px] gap-[9.46px] p-[5.4px]">
              <img className="object-contain max-h-[34.31px] max-w-[92.34px]" src="/logo.png" />
              <img className="object-contain max-h-[34.31px] max-w-[92.34px]" src="/Geld.png" />
            </div>
        <figure className="flex justify-center items-center text-sm font-normal]">
          <div className="relative flex flex-col gap-1">
            <p className="w-6 h-6 rounded-full bg-[#0166FF] flex items-center justify-center text-white">
              1
            </p>
            <p className="absolute bottom-[-100%] left-[50%] translate-x-[-50%]">
              Currency
            </p>
          </div>
          <div className={`w-[92px] h-2 bg-[${step>=200?'#0166FF':'#E5E7EB'}]`}></div>
          <div className="relative flex flex-col gap-1">
            <p
              className={`w-6 h-6 rounded-full bg-[${step>=200?'#0166FF':'#E5E7EB'}] text-${step>=200?'white':"[#0F172A]"} flex items-center justify-center`}
            >
              2
            </p>
            <p className="absolute bottom-[-100%] left-[50%] translate-x-[-50%]">
              Balance
            </p>
          </div>
          <div
            className={`w-[92px] h-2 bg-[${step>=300?'#0166FF':'#E5E7EB'}]`}
          ></div>
          <div className="relative flex flex-col gap-1">
            <p className={`w-6 h-6 rounded-full bg-[${step>=300?'#0166FF':'#E5E7EB'}] text-${step>=300?'white':"[#0F172A]"} flex items-center justify-center`}>
              3
            </p>
            <p className="absolute bottom-[-100%] left-[50%] translate-x-[-50%]">
              Finish
            </p>
          </div>
        </figure>
        <section className="flex w-full flex-col m-auto mt-[141px] gap-[32px]">
          <aside className={`flex w-full relative`}>
            {step==100?<Step1/>:null}
            {step==200?<Step2/>:null}
            {step==300?<Step3/>:null}
          </aside>
        </section>
      </div>
    </main>
  );
}
