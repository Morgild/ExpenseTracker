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
