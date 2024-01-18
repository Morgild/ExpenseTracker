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
import { format } from "date-fns";
import { FaArrowUp } from "react-icons/fa";

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
    dashboardRecords,
    numberFormatter,
    setOld,
    setDays,
    setCurrency,
    currency,
  } = useText();

  const router = useRouter();
  ChartJS.register(ArcElement, Tooltip, Legend);
  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  useEffect(() => {
    setOld(false);
    setDays(90);
  }, []);

  const currentMonth = format(new Date(), "yyyy-MM");
  const prevMonth = format(new Date(), "MM") - 1;
  // const previous
  function previousMonth() {
    if (prevMonth == 0) {
      return 12;
    } else {
      return format(new Date(), "MM") - 1;
    }
  }
  function previousYear() {
    if (prevMonth == 0) {
      return format(new Date(), "yyyy") - 1;
    } else {
      return format(new Date(), "yyyy");
    }
  }
  console.log(`${previousYear()}-${previousMonth()}`);

  // previous month income sum
  const previousMonthIncome = dashboardRecords
    .filter((record) => {
      return record.type == "income";
    })
    .filter((record) => {
      return (
        format(record.date, "yyyy-MM") == `${previousYear()}-${previousMonth()}`
      );
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

  // previous month expense sum
  const previousMonthExpense = dashboardRecords
    .filter((record) => {
      return record.type == "expense";
    })
    .filter((record) => {
      return (
        format(record.date, "yyyy-MM") == `${previousYear()}-${previousMonth()}`
      );
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

  // current month income sum
  const currentMonthExpense = dashboardRecords
    .filter((record) => {
      return record.type == "expense";
    })
    .filter((record) => {
      return format(record.date, "yyyy-MM") == currentMonth;
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

  // current month income sum
  const currentMonthIncome = dashboardRecords
    .filter((record) => {
      return record.type == "income";
    })
    .filter((record) => {
      return format(record.date, "yyyy-MM") == currentMonth;
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

  const incomeDiff =
    ((currentMonthIncome - previousMonthIncome) / previousMonthIncome) * 100;
  const expenseDiff =
    ((currentMonthExpense - previousMonthExpense) / previousMonthExpense) * 100;
  // Total Income
  const totalIncome = dashboardRecords
    .filter((record) => {
      return record.type == "income";
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);
  // Total Expense
  const totalExpense = dashboardRecords
    .filter((record) => {
      return record.type == "expense";
    })
    .reduce((sum, currentValue) => {
      return sum + currentValue.amount;
    }, 0);

  if (isLoading) return <Loading />;

  if (!isReady) return <Loading />;

  return (
    <main className="flex h-full w-full bg-[#F3F4F6] flex-col">
      <HeaderDashboard />
      {addRecord && <AddRecord />}
      {addCat && <AddCategory />}
      <section
        onClick={() => {
          setProfileLog(false);
        }}
        className="md:px-[120px] px-[40px] py-[32px]  max-w-[1440px] w-full m-auto"
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
              <p className="text-2xl font-semibold text-white">
                {numberFormatter.format(totalIncome - totalExpense)}
                {currency}
              </p>
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
              <h3 className="text-black font-semibold text-4xl">
                {numberFormatter.format(currentMonthIncome)}
                {currency}
              </h3>
              <p className="text-[#64748B] font-normal text-lg">
                Your Income Amount
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-full h-6 w-6 bg-orange-400"
                  style={{
                    backgroundColor: incomeDiff > 0 ? "#84CC16" : "#F54949",
                  }}
                >
                  <FaArrowUp
                    fill="#fff"
                    size={12}
                    style={{ rotate: incomeDiff > 0 ? "0deg" : "180deg" }}
                  />
                </div>
                <p className="text-lg font-normal text-black">
                  {numberFormatter.format(incomeDiff)}% from last month
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
                {numberFormatter.format(currentMonthExpense)}
                {currency}
              </h3>
              <p className="text-[#64748B] font-normal text-lg">
                Your Expense Amount
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="flex items-center justify-center rounded-full h-6 w-6 bg-orange-400"
                  style={{
                    backgroundColor: expenseDiff > 0 ? "#F54949" : "#84CC16",
                  }}
                >
                  <FaArrowUp
                    fill="#fff"
                    size={12}
                    style={{ rotate: expenseDiff > 0 ? "0deg" : "180deg" }}
                  />
                </div>
                <p className="text-lg font-normal text-black">
                  {numberFormatter.format(expenseDiff)}% from last month
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
              <DoughnutChart />
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
