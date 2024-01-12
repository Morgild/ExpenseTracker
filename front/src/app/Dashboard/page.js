"use client";
import { useEffect, useState } from "react";
import { HeaderDashboard } from "../Components/HeaderDashboard";
import { useText } from "../Components/provider/AuthProvider";
import { AddRecord } from "../Components/AddRecord";
import { AddCategory } from "../Components/AddCategory";
import { Loading } from "../Components/Loading";
import { useRouter } from "next/navigation";
import { DashboardRecords } from "../Components/DashboardRecords";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { BarChart } from "../Components/BarChart";
import { DoughnutChart } from "../Components/DoughnutChart";

export default function Dashboard() {
  const {
    addRecord,
    setAddRecord,
    addCat,
    setAddCat,
    setExpense,
    isLoggedIn,
    setIsLoggedIn,
    isLoading,
    isReady,
    profileLog,
    setProfileLog,
    records,
    numberFormatter
  } = useText();
  const router = useRouter();
  ChartJS.register(ArcElement, Tooltip, Legend);
  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);



  const expenseSum =records
    .filter((record)=>{
      return record.type=='expense';
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0) 

    const incomeSum =records
    .filter((record)=>{
      return record.type=='income';
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0) 

  if (isLoading) return <Loading />;

  if (!isReady) return <Loading />;

  return (
    <main className="flex h-screen w-full bg-[#F3F4F6] flex-col">
      <HeaderDashboard />
      {addRecord && <AddRecord />}
      {addCat && <AddCategory />}
      <section
        onClick={() => {
          setProfileLog(false);
        }}
        className="md:px-[120px] px-[40px] py-[32px]"
      >
        <div className="Total cards grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-6">
          <div className="w-full relative bg-[#0166FF] rounded-[18px] h-[219.66px] overflow-hidden">
            <div className="absolute z-[5]">
              <img
                className="mt-8 z-3 ml-8 h-[29.86px]"
                src="/logo-white.png"
              />
            </div>
            <img className="w-full h-full absolute top-[0]" src="/cardbg.png" />
            <img
              className="h-[100%] w-[80%] object-fill absolute right-0 bottom-[-10%]"
              src="/Shape.png"
            />
            <div className="absolute left-8 bottom-8">
              <p className="text-base font-normal text-white opacity-50 ">
                Cash
              </p>
              <p className="text-2xl font-semibold text-white">{numberFormatter.format(incomeSum-expenseSum)}</p>
            </div>
            <img
              className="h-[40.2px] absolute bottom-[20px] right-[20px]"
              src="/wifi.png"
            />
          </div>
          <div className="w-full  bg-white rounded-[18px] h-[219.66px] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] border-solid">
              <div className="w-2 h-2 bg-[#84CC16] rounded-full ml-6"></div>
              <p className="text-base font-semibold my-4">Your Income</p>
            </div>
            <div className="py-[20px] px-[24px] gap-4 flex flex-col">
              <h3 className="text-black font-semibold text-4xl">{numberFormatter.format(incomeSum)}</h3>
              <p className="text-[#64748B] font-normal text-lg">
                Your Income Amount
              </p>
              <div className="flex items-center gap-2">
                <img className="h-6 w-6" src="/growth.png" />
                <p className="text-lg font-normal text-black">
                  32% from last month
                </p>
              </div>
            </div>
          </div>
          <div className="w-full  bg-white rounded-[18px] h-[219.66px] overflow-hidden">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] border-solid">
              <div className="w-2 h-2 bg-[#0166FF] rounded-full ml-6"></div>
              <p className="text-base font-semibold my-4">Total Expenses</p>
            </div>
            <div className="py-[20px] px-[24px] gap-4 flex flex-col">
              <h3 className="text-black font-semibold text-4xl">
                {numberFormatter.format(expenseSum)}
              </h3>
              <p className="text-[#64748B] font-normal text-lg">
                Your Income Amount
              </p>
              <div className="flex items-center gap-2">
                <img className="h-6 w-6 rotate-180" src="/growth.png" />
                <p className="text-lg font-normal text-black">
                  32% from last month
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="IncomeExpense max-h-[300px] mt-6 grid md:grid-cols-2 grid-cols-1 gap-6">
          <div className="w-full  bg-white rounded-[12px]">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] border-solid">
              <p className="text-base font-semibold my-4 ml-6">
                Income-Expense
              </p>
            </div>
            <div className="px-[24px] gap-4 flex flex-col w-full">
              <BarChart />
            </div>
          </div>
          <div className="w-full  bg-white rounded-[12px] ">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] border-solid">
              <p className="text-base font-semibold my-4 ml-6">
                Expense by Category
              </p>
            </div>
            <div className="py-[20px] px-[24px] gap-4 flex flex-col">
              <DoughnutChart/>
            </div>
          </div>
        </div>
        <div className="w-full mt-[24px]  bg-white rounded-[12px] overflow-hidden">
          <div className="flex items-center gap-2 border-b border-[#E2E8F0] border-solid">
            <p className="text-base font-semibold my-4 ml-6">Last Records</p>
          </div>
          <div className="px-6 pb-6 flex flex-col">
            <DashboardRecords />
          </div>
        </div>
      </section>
    </main>
  );
}
