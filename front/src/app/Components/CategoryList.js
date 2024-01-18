import { useText } from "./provider/AuthProvider";

export function CategoryList({category}) {
  const { categoryFilter, setCategoryFilter, refresh, setRefresh, isClear } =
    useText();

  return (
    <div className="w-full flex py-1 px-3 justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          onClick={() => {
            if (categoryFilter.includes(category)) {
              setCategoryFilter(
                categoryFilter.filter((item) => item !== category)
              );
            } else {
              setCategoryFilter([...categoryFilter, category]);
              setRefresh(refresh + 1);
            }
          }}
          className="h-[14px]"
          src={
            categoryFilter.includes(category)
              ? "/eyeoff.png"
              : "/eye.png"
          }
        />
        <p className="font-normal text-base text-[#1F2937] cursor-pointer">
          {category}
        </p>
      </div>
      <img className="w-5 h-5 cursor-pointer" src="/leading.png" />
    </div>
  );
}
