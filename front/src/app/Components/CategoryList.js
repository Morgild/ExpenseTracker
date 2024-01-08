import { useText } from "./provider/AuthProvider";
import { useState } from "react";

export function CategoryList(props) {
  const { categoryFilter, setCategoryFilter, refresh, setRefresh, isClear } =
    useText();

  return (
    <div className="w-full flex py-1 px-3 justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          onClick={(event) => {
            if (categoryFilter.includes(props.categoryName)) {
              setCategoryFilter(
                categoryFilter.filter((item) => item !== props.categoryName)
              );
            } else {
              categoryFilter.push(props.categoryName);
              setCategoryFilter(categoryFilter);
              setRefresh(refresh + 1);
            }
          }}
          className="h-[14px]"
          src={
            categoryFilter.includes(props.categoryName)
              ? "/eyeoff.png"
              : "/eye.png"
          }
        />
        <p className="font-normal text-base text-[#1F2937] cursor-pointer">
          {props.categoryName}
        </p>
      </div>
      <img className="w-5 h-5 cursor-pointer" src="/leading.png" />
    </div>
  );
}
