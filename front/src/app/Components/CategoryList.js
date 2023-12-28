export function CategoryList(props) {
  return (
    <div className="w-full flex py-1 px-3 justify-between items-center">
      <div className="flex items-center gap-2">
        <img className="w-5 h-5" src="/eye.png" />
        <p className="font-normal text-base text-[#1F2937]">{props.categoryName}</p>
      </div>
      <img className="w-5 h-5" src="/leading.png"/>
    </div>
  );
}
