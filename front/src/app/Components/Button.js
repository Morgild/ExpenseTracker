export function Button(props) {
    return (
        <button className="flex items-center justify-center w-full py-1 rounded-[20px] bg-[#0166FF] text-white text-base font-normal">
            <img className="w-5 h-5" src="/plus.png"/>
            <p className="">{props.text}</p>
        </button>
    )
}