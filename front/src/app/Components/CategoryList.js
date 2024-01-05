import { useText } from "./provider/AuthProvider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
export function CategoryList(props) {
  const { categoryFilter, setCategoryFilter,refresh,setRefresh} = useText();
  return (
    <div className="w-full flex py-1 px-3 justify-between items-center">
      <div className="flex items-center gap-2">
        <img
          onClick={(event) => {
            if (
              categoryFilter.includes(
                event.target.parentNode.lastChild.textContent
              )
            ) {
              setCategoryFilter(categoryFilter.filter(
                (item) => item !== event.target.parentNode.lastChild.textContent
              ));
            
            } else {
              categoryFilter.push(
                event.target.parentNode.lastChild.textContent
              );
              setCategoryFilter(categoryFilter)
              setRefresh(refresh+1)
            }
            console.log(event.target.parentNode.textContent)
            console.log(event.target.src)
            if (!event.target.src.includes('off')) {
              event.target.src = "/eyeoff.png";
            } else {
              event.target.src = "/eye.png";
            }
          }}
          className="h-[14px]"
          src="/eye.png"
        />
        <p className="font-normal text-base text-[#1F2937] cursor-pointer">
          {props.categoryName}
        </p>
      </div>
      <img className="w-5 h-5 cursor-pointer" src="/leading.png" />
    </div>
  );
}
