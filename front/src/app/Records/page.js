"use client";
import { HeaderDashboard } from "../Components/HeaderDashboard";
import { Button } from "../Components/Button";
import { CategoryList } from "../Components/CategoryList";
import { useRouter } from "next/navigation";
import { AddRecord } from "../Components/AddRecord";
import { AddCategory } from "../Components/AddCategory";
import { useText } from "../Components/provider/AuthProvider";
import { Loading } from "../Components/Loading";
import { useEffect } from "react";
import { NewOld } from "../Components/NewOld";
import { DaysFilter } from "../Components/DaysFilter";
import { RadioTypes } from "../Components/RadioTypes";
import { AmountRange } from "../Components/AmountRange";
import { RecordsList } from "../Components/RecordsList";

export default function Records() {
  const router = useRouter();
  const {
    isReady,
    addRecord,
    setAddRecord,
    addCat,
    setAddCat,
    isLoading,
    isLoggedIn,
    setProfileLog,
    categories,
    setCategoryFilter,
    setRefresh,
    refresh
  } = useText();

  useEffect(() => {
    if (!isLoggedIn) router.push("/");
  }, [isLoggedIn]);

  if (isLoading) return <Loading />;

  if (!isReady) return <Loading />;

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
          <RadioTypes />
          <div className="CATEGORY w-full flex flex-col gap-4">
            <div className="flex justify-between py-1">
              <h3 className="text-[#1F2937] text-base font-semibold">
                Category
              </h3>
              <p
                onClick={() => {setCategoryFilter([]),
                setRefresh(refresh+1)}}
                className="text-[#1F2937] text-base font-normal opacity-20 hover:opacity-80 mr-3 cursor-pointer"
              >
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
            <AmountRange />
          </div>
        </aside>
        <section className="w-full flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <DaysFilter />
            <NewOld />
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
          <RecordsList />
        </section>
      </div>
    </main>
  );
}
