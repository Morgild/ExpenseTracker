"use client";
import { HeaderDashboard } from "../Components/HeaderDashboard";
import { Button } from "../Components/Button";
import { CategoryList } from "../Components/CategoryList";
import { useRouter } from "next/navigation";
import { SingleRecord } from "../Components/SingleRecord";
import { AddRecord } from "../Components/AddRecord";
import { AddCategory } from "../Components/AddCategory";
import { useText } from "../Components/provider/AuthProvider";
import { Loading } from "../Components/Loading";
import { useEffect } from "react";


export default function Records() {
  const router = useRouter();
  const {
    isReady,
    addRecord,
    setAddRecord,
    addCat,
    setAddCat,
    setExpense,
    days,
    minusDays,
    plusDays,
    isLoading,
    isLoggedIn,
    profileLog,
    setProfileLog,
    categories,
    setCategories,
    records,
    setRecords,
    filterCategory,
    setFilterCategory,
    getCategories,
    getRecords,
    refresh,
    setRefresh
  } = useText();


  useEffect(()=>{
    if(!isLoggedIn) router.push("/")
  },[isLoggedIn])

    if(isLoading) return <Loading/>

    if(!isReady) return <Loading/>

  return (
    <main className="relative flex h-screen w-full bg-[#F3F4F6] flex-col">
      <HeaderDashboard />
      {addRecord && <AddRecord />}
      {addCat && <AddCategory />}
      <div
        onClick={() => {
          setProfileLog(false);
        }}
        className="w-full gap-6 flex md:px-[120px] px-[40px] py-[32px]"
      >
        <aside className="hidden w-4/12 bg-[#F9FAFB] border border-solid border-[#E5E7EB] md:flex flex-col rounded-xl py-6 px-4 gap-6">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl text-black font-semibold">Records</h2>
            <div
              onClick={() => {
                setAddRecord(true);
              }}
            >
              <Button text="Add" />
            </div>
          </div>
          <input
            className="rounded-lg py-1 px-4 border border-[#D1D5DB] bg-[#F3F4F6]"
            type="text"
            placeholder="Search"
          />
          <div className="TYPES flex flex-col gap-4">
            <h4 className="text-base font-semibold text-[#1F2937]">Types</h4>
            <label className="flex py-1 px-3 gap-2 items-center">
              <input
                className="h-4 w-4 opacity-50 border border-[#374151]"
                type="radio"
                name="radio"
              />
              All
            </label>
            <label className="flex py-1 px-3 gap-2 items-center">
              <input
                className="h-4 w-4 opacity-50 border border-[#374151]"
                type="radio"
                name="radio"
              />
              Income
            </label>
            <label className="flex py-1 px-3 gap-2 items-center">
              <input
                className="h-4 w-4 opacity-50 border border-[#374151]"
                type="radio"
                name="radio"
              />
              Expense
            </label>
          </div>
          <div className="CATEGORY w-full flex flex-col gap-4">
            <div className="flex justify-between py-1">
              <h3 className="text-[#1F2937] text-base font-semibold">
                Category
              </h3>
              <p className="text-[#1F2937] text-base font-normal opacity-20 mr-3">
                Clear
              </p>
            </div>
            <div className="flex w-full flex-col ">
              {Object.keys(categories).map((item, index) => (
                <div key={index}>
                <CategoryList categoryName={categories[item].category} />
                </div>
              ))}
            </div>
            <div
              onClick={() => {
                setAddCat(true);
              }}
              className="flex w-full hover:bg-gray-200 items-center gap-2  py-1 px-3 cursor-pointer"
            >
              <img className="w-5 h-5" src="/plusblue.png" />
              <p className="font-normal text-base text-[#1F2937]">
                Add Category
              </p>
            </div>
            <div className="flex flex-col justify-between py-1 gap-4">
              <h3 className="text-[#1F2937] text-base font-semibold">
                Amount Range
              </h3>
              <div className="w-full grid grid-cols-2 gap-4">
                <input
                  className="rounded-lg border border-[#D1D5DB] flex py-3 px-4 bg-[#F3F4F6]"
                  type="text"
                  value={0}
                />
                <input
                  className="rounded-lg border border-[#D1D5DB] flex py-3 px-4 bg-[#F3F4F6]"
                  type="text"
                  value={1000}
                />
              </div>
              <div className="w-full">
                <input className="w-full" type="range" min={10} max={1000} />
                <div className="flex justify-between">
                  <p>min</p>
                  <p>max</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
        <section className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <div className="flex gap-4 items-center">
              <span
                onClick={minusDays}
                className="w-8 h-8 flex items-center justify-center bg-[#E5E7EB] rounded-[8px] p-[6px] font-semibold cursor-pointer"
              >
                <img src="/left_arrow.png" />
              </span>
              <p>Last {days} Days</p>
              <span
                onClick={plusDays}
                className="w-8 h-8 rotate-180 flex items-center justify-center bg-[#E5E7EB] rounded-[8px] p-[6px] font-semibold cursor-pointer"
              >
                <img src="/left_arrow.png" />
              </span>
            </div>
            <div className="flex items-center relative">
              <select className="bg-transparent text-base font-semibold text-[#1F2937] flex gap-5">
                <option>Newest</option>
                <option>Oldest</option>
              </select>
              {/* <p className="font-semibold text-[#1F2937] text-base">Newest</p>
              <p className="font-semibold text-[#1F2937] text-base absolute bottom-[-100%]">
                Oldest
              </p> */}
              {/* <img className="w-6 h-6 rotate-90" src="/leading.png" />
              <img
                className="w-6 h-6 rotate-90 absolute bottom-[-100%] right-[-0%]"
                src="/leading.png"
              /> */}
            </div>
          </div>
          <div className="flex bg-white px-6 py-3 justify-between border border-solid border-[#E5E7EB] rounded-lg">
            <div className="flex gap-4">
              <input
                className="w-6 h-6 rounded-[4px] opacity-20 border border-solid border-[#1F2937]"
                type="checkbox"
                id="selectAll"
                name="selectAll"
                value={"SelectAll"}
              />
              <label>Select All</label>
            </div>
            <p className="font-semibold text-[#94A3B8] text-base">
              Total value
            </p>
          </div>
          <div className="flex flex-col gap-3 mt-[24px]">
          {Object.keys(records).map((item, index) => (
                <SingleRecord key={index} color={records[item].categoryColor} category={records[item].category} amount={records[item].amount} />
              ))}
            <SingleRecord />
          </div>
        </section>
      </div>
    </main>
  );
}
