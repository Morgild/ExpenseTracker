export const PasswordStrength = (props) => {
    return (
      <div className="AboutMeTitle flex absolute bottom-[10px] items-center w-full gap-[1px] justify-start">
        <span
          className={`w-1/3 h-[10px] ${
            props.setPassStrength(props.pass) == ""
              ? "bg-[#E5E7EB]"
              : props.setPassStrength(props.pass) == "Weak"
              ? "bg-red-500"
              : props.setPassStrength(props.pass) == "Medium"
              ? "bg-orange-500"
              : props.setPassStrength(props.pass) == "Strong"
              ? "bg-green-500"
              : "bg-[#E5E7EB]"
          } px-5 py-1 justify-self-center`}
        >
          {props.text}
        </span>
        <span
          className={`w-1/3 h-[10px] ${
            props.setPassStrength(props.pass) == ""
              ? "bg-[#E5E7EB]"
              : props.setPassStrength(props.pass) == "Medium"
              ? "bg-orange-500"
              : props.setPassStrength(props.pass) == "Strong"
              ? "bg-green-500"
              : "bg-[#E5E7EB]"
          } px-5 py-1 justify-self-center`}
        >
          {props.text}
        </span>
        <span
          className={`w-1/3 h-[10px] ${
            props.setPassStrength(props.pass) == ""
              ? "bg-[#E5E7EB]"
              : props.setPassStrength(props.pass) == "Strong"
              ? "bg-green-500"
              : "bg-[#E5E7EB]"
          } px-5 py-1 justify-self-center`}
        >
          {props.text}
        </span>
      
      </div>
    );
  };