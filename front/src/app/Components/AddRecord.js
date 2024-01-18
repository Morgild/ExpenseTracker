import { useText } from "./provider/AuthProvider";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCirclePlus } from "react-icons/fa6";
import { ChooseCategory } from "./ChooseCategory";


export function AddRecord() {
  const {
    setAddRecord,
    expense,
    changeExpense,
    setAddCat,
    getCategories,
    getRecords,
    dropCategory,
    setDropCategory,
    dropDownCategory,
    addNewRecord,
    addNewCategory,
    categoryColor,
    iconName,
  } = useText();
  return (
    <div className="flex justify-center items-center">
      <main
        onClick={() => {
          setAddRecord(false);
        }}
        className="BACKGROUND fixed z-10 top-0 left-0 h-screen w-screen bg-[#00000080]"
      ></main>
      <form
        onSubmit={(event) => {
          event.preventDefault(),
            setAddRecord(false),
            // type, category, amount, date, payee, note, color,icon
            addNewRecord(
              expense ? "expense" : "income",
              addNewCategory !== "Find or choose category"
                ? addNewCategory
                : "Miscellaneous",
              event.target.amount.value,
              event.target.date.value,
              event.target.payee.value,
              event.target.note.value,
              categoryColor,
              iconName
            ),
            getRecords();
        }}
        className="WHITE absolute z-20 top-[50%] translate-y-[-50%] bg-white rounded-xl"
      >
        <div className="HEADING flex justify-between items-center py-5 px-6 border-b border-[#E2E8F0]">
          <h3 className="text-xl text-[#0F172A] font-semibold">Add Record</h3>
          <img
            onClick={() => {
              setAddRecord(false);
            }}
            className="w-[15.76px]"
            src="/x.png"
          />
        </div>
        <div className="grid grid-cols-2 items-stretch">
          <div className="LEFT w-full flex flex-col gap-5 py-5 px-4">
            <div className="ExpenseIcome grid grid-cols-2 rounded-[100px] gap-[4px] bg-[#F3F4F6]">
              <button
                onClick={(event) => {
                  event.preventDefault();
                  changeExpense();
                }}
                className={`w-full py-2 ${
                  expense
                    ? "bg-[#0166FF] text-white"
                    : "bg-transparent text-[#1F2937]"
                } rounded-[20px] font-normal text-base`}
              >
                Expense
              </button>
              <button
                onClick={(event) => {
                  event.preventDefault();
                  changeExpense();
                }}
                className={`w-full py-2 ${
                  expense
                    ? "bg-transparent text-[#1F2937]"
                    : "bg-[#16A34A] text-white"
                } bg-[#16A34A] rounded-[20px] font-normal text-base`}
              >
                Income
              </button>
            </div>
            <div className="w-full bg-[#F3F4F6] flex flex-col rounded-lg border border-[#D1D5DB] py-3 px-4">
              <h4 className="text-[#171717] text-base font-normal">Amount</h4>
              <input
                className="text-[#9CA3AF] text-black text-xl font-normal bg-transparent"
                type="text"
                name="amount"
                defaultValue={1000}
                placeholder="$ 000.00"
              />
            </div>
            <div>
              <h4 className="text-[#171717] text-base font-normal">Category</h4>
              <div className="flex relative">
                <div
                  onClick={() => {
                    dropDownCategory();
                    getCategories();
                  }}
                  className="w-full relative bg-[#F3F4F6] flex flex-col rounded-lg border border-[#D1D5DB] py-3 px-4 text-[#94A3B8]"
                  placeholder="Find or choose category"
                >
                  <p className="text-[#171717]">{addNewCategory}</p>
                  <IoMdArrowDropdown className="absolute text-black right-[10px] top-[50%] translate-y-[-50%]" />
                </div>
                {dropCategory && (
                  <div
                    className="DROPDOWN absolute top-[100%] bg-[#F3F4F6]  w-full rounded-l-lg drop-shadow-[0_4px_12px_rgba(0,0,0,0.25)] cursor-pointer
"
                  >
                    <div
                      onClick={() => {
                        setAddCat(true);
                        setDropCategory(false);
                      }}
                      className="flex items-center p-4 gap-3 border-b border-[#0000001A] cursor-pointer"
                    >
                      <FaCirclePlus className="w-6 h-6" fill="#0166FF" />
                      <p>Add Category</p>
                    </div>
                    <ChooseCategory/>
                  </div>
                )}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <h4 className="text-[#171717] text-base font-normal">Date</h4>
                <div className="w-full bg-[#F3F4F6] flex flex-col rounded-lg border border-[#D1D5DB] py-3 px-4">
                  <input className="bg-transparent" type="date" name="date" />
                </div>
              </div>
              <div>
                <h4 className="text-[#171717] text-base font-normal">Time</h4>
                <div
                  className="w-full bg-[#F3F4F6] flex flex-col rounded-lg border border-[#D1D5DB] py-3 px-4"
                  placeholder="Find or choose category"
                >
                  <input
                    className="bg-transparent"
                    placeholder="Time"
                    name="time"
                    type="time"
                  />
                </div>
              </div>
            </div>
            <button
              type="submit"
              className={`w-full py-2  ${
                expense ? "bg-[#0166FF]" : "bg-[#16A34A]"
              } rounded-[20px] text-white font-normal text-base text-[#F9FAFB] mt-3`}
            >
              Add Record
            </button>
          </div>
          <div className="RIGHT w-full flex flex-col gap-5 py-5 px-4">
            <div className="flex flex-col gap-2">
              <h4 className="text-[#171717] text-base font-normal">Payee</h4>
              <input
                name="payee"
                className="w-full bg-[#F3F4F6] flex flex-col rounded-lg border border-[#D1D5DB] py-3 px-4"
                placeholder="Write here"
              />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-[#171717] text-base font-normal">Note</h4>
              <textarea
                name="note"
                className="w-full min-h-[250px] bg-[#F3F4F6] flex flex-col rounded-lg border border-[#D1D5DB] py-3 px-4"
                placeholder="Write here"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
