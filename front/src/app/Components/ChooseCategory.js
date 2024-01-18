import { useText } from "./provider/AuthProvider";
import * as icons from "react-icons/fa"
export function ChooseCategory() {
    const {categories, setDropCategory, setAddNewCategory, setCategoryColor, setIconName}=useText();
return (
    <div
    className=""
    onClick={() => {
      setDropCategory(false);
    }}
  >
  {categories.map((item, index) => {
      const Icon = icons[item.icon];
      return (
        <div
          key={index}
          onClick={(event) => {
            setAddNewCategory(item.category);
            setCategoryColor(item.color);
            setIconName(item.icon);
          }}
          className="flex items-center p-4 gap-3 border-b border-[#0000001A] cursor-pointer"
        >
          <Icon fill={item.color}/>
          {item.category}
        </div>
      );
    })}
  </div>
)
}