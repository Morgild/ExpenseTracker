import { useText } from "./provider/AuthProvider";
import { MdHomeFilled } from "react-icons/md";
import { TiHome } from "react-icons/ti";
import { RiContactsBook2Fill } from "react-icons/ri";
import { MdContactMail } from "react-icons/md";
import { PiLadderFill } from "react-icons/pi";
import { PiIntersectSquareFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { FaMagnifyingGlassPlus } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa6";
import { SiMicrosoftexcel } from "react-icons/si";
import { PiNotepadFill } from "react-icons/pi";
import { ImMenu } from "react-icons/im";
import { PiLeafFill } from "react-icons/pi";
import { PiNumberFiveFill } from "react-icons/pi";
import { PiNumberCircleSevenFill } from "react-icons/pi";
import { PiRoadHorizonFill } from "react-icons/pi";
import { GiSandsOfTime } from "react-icons/gi";
import { PiAnchorSimpleBold } from "react-icons/pi";
import { PiTriangleFill } from "react-icons/pi";
import { PiIntersectBold } from "react-icons/pi";
import { BiLogoFlickrSquare } from "react-icons/bi";
import { FaBaseballBall } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { TbSquareRoundedLetterA } from "react-icons/tb";
import { BsWatch } from "react-icons/bs";
import { PiGlobeSimpleFill } from "react-icons/pi";
import { TbLemon } from "react-icons/tb";
import { FaPeace } from "react-icons/fa";
import { PiToiletPaperFill } from "react-icons/pi";
import { FaPencilAlt } from "react-icons/fa";

const newIcons = [
  <MdHomeFilled />,
  <TiHome />,
  <RiContactsBook2Fill />,
  <MdContactMail />,
  <PiLadderFill />,
  <PiIntersectSquareFill />,
  <FaImage />,
  <FaMagnifyingGlassPlus />,
  <FaMicrophone />,
  <SiMicrosoftexcel />,
  <PiNotepadFill />,
  <ImMenu />,
  <PiLeafFill />,
  <PiNumberFiveFill />,
  <PiNumberCircleSevenFill />,
  <PiRoadHorizonFill />,
  <GiSandsOfTime />,
  <PiAnchorSimpleBold />,
  <PiTriangleFill />,
  <PiIntersectBold />,
  <BiLogoFlickrSquare />,
  <FaBaseballBall />,
  <AiFillQuestionCircle />,
  <TbSquareRoundedLetterA />,
  <BsWatch />,
  <PiGlobeSimpleFill />,
  <TbLemon />,
  <FaPeace />,
  <PiToiletPaperFill />,
  <FaPencilAlt />,
];
const colorChoice = [
  "#0166FF",
  "#01B3FF",
  "#41CC00",
  "#F9D100",
  "#FF7B01",
  "#AE01FF",
  "#FF0101",
];

export function AddCategory() {
  const {
    setAddCat,
    changeExpense,
    icon,
    setIcon,
    showIcons,
    iconChoose,
    iconColor,
    setIconColor,
    newCategory,
  } = useText();
  return (
    <div className="flex justify-center items-center">
      <main
        onClick={() => {
          setAddCat(false);
        }}
        className="BACKGROUND fixed z-30 top-0 left-0 h-screen w-screen bg-[#00000080]"
      ></main>
      <section className="WHITE w-4/12 absolute z-30 top-[50%] translate-y-[-50%] bg-white rounded-xl pt-6">
        <div className="HEADING flex justify-between items-center px-6 pb-6 border-b border-[#E2E8F0]">
          <h3 className="text-xl text-[#0F172A] font-semibold">Add Category</h3>
          <img
            onClick={() => {
              setAddCat(false);
            }}
            className="w-[15.76px] cursor-pointer"
            src="/x.png"
          />
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault(),
              setAddCat(false),
              newCategory(
                `<${icon.type.name}/>`,
                iconColor,
                event.target.newCategory.value
              );
          }}
          className="flex flex-col p-6"
        >
          <div className="flex gap-3">
            <div
              className={`relative  grid grid-cols-2 items-center justify-between border border-[#D1D5DB] gap-4 rounded-lg py-3 px-3 pr-1 cursor-pointer`}
            >
              <figure
                onClick={() => {
                  iconChoose();
                }}
                className={`flex items-center justify-center`}
                style={{ color: iconColor }}
              >
                {icon}
              </figure>
              <img
                className="w-5 h-5 rotate-90"
                src="/leading.png"
                onClick={() => {
                  iconChoose();
                }}
              />
              {showIcons && (
                <div className="absolute left-0 top-[100%] p-6 rounded-md bg-[#ffffff] drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                  <div className="grid  grid-cols-6  w-[312px] gap-6 pb-6 ">
                    {newIcons.map((item, index) => (
                      <div
                        key={index}
                        className="cursor-pointer"
                        onClick={() => {
                          setIcon(item);
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 border-t border-[#E2E8F0] pt-6 gap-4 ">
                    {colorChoice.map((item, index) => (
                      <figure
                        key={index}
                        onClick={() => {
                          setIconColor(item);
                        }}
                        className={`w-6 h-6 rounded-full cursor-pointer`}
                        style={{ backgroundColor: item }}
                      ></figure>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <input
              type="text"
              name="newCategory"
              placeholder="Category name"
              className="border w-full border-[#D1D5DB] bg-[#F9FAFB] gap-1 rounded-lg py-3 px-4"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-[#16A34A] rounded-[20px] text-white font-normal text-base text-[#F9FAFB] mt-5"
          >
            Add Category
          </button>
        </form>
      </section>
    </div>
  );
}
