import { useText } from "./provider/AuthProvider";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
export function CategoryList(props) {
  const {categories, setCategories,filterCategory,setFilterCategory}=useText();
  return (
    <div className="w-full flex py-1 px-3 justify-between items-center">
      <div className="flex items-center gap-2">
      <img onClick={(event)=>{
        console.log(event.target.src)
        if (event.target.src=="http://localhost:3000/eye.png"){
          event.target.src="http://localhost:3000/eyeoff.png"
        } else {event.target.src="http://localhost:3000/eye.png"}
      }} className="h-[14px]" src="/eye.png"/>
        <p className="font-normal text-base text-[#1F2937] cursor-pointer">{props.categoryName}</p>
      </div>
      <img className="w-5 h-5 cursor-pointer" src="/leading.png"/>
    </div>
  );
}
