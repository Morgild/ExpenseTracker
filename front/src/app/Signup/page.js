"use client";
import Image from "next/image";
import Link from "next/link";
import { PasswordStrength } from "../Components/PasswordStrength";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useText } from "../Components/provider/AuthProvider";
import { toast } from "react-toastify";

export default function Signup() {

  const { signUp,name,email,pass,repass,setName,setEmail,setPass,setRepass } = useText();
  const router = useRouter();
  function isNameValid(name) {
    if (name.length < 1) {
      return "Insert name";
    } else return true;
  }

  function emailValidation(email) {
    let atChar = 0;
    let dotChar = 0;
    let spaceChar = 0;
    for (let i = 0; i < email.length; i++) {
      if (email.charCodeAt(i) == 64) {
        atChar++;
      }
      if (email.charCodeAt(i) == 46) {
        dotChar++;
      }
      if (email.charCodeAt(i) == 32) {
        spaceChar++;
      }
    }
    if (email.length == 0) {
      return "insert E-mail";
    }

    if (email.length < 5) {
      return "Please use proper email type - email length";
    }
    if (atChar != 1) {
      return "Please use proper email type - insert @ sign";
    }
    if (dotChar != 1) {
      return "Please use proper email type - insert dot sign";
    }
    if (spaceChar > 0) {
      return "Please use proper email type - remove spaces";
    } else return true;
  }

  function passwordValidation(password) {
    let capitalLetter = 0;
    let number = 0;
    let specialCharacter = 0;
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) > 64 && password.charCodeAt(i) < 91) {
        capitalLetter++;
      }
      if (password.charCodeAt(i) > 47 && password.charCodeAt(i) < 58) {
        number++;
      }
      if (password.charCodeAt(i) > 33 && password.charCodeAt(i) < 47) {
        specialCharacter++;
      }
      if (password.charCodeAt(i) > 57 && password.charCodeAt(i) < 65) {
        specialCharacter++;
      }
    }
    if (password.length == 0) {
      return "Insert password";
    }

    if (password.length < 8) {
      return "Password length should be min 8 character";
    }
    if (number == 0) {
      return "Password should include number";
    }
    if (capitalLetter == 0) {
      return "Password should include CAPITAL letter";
    }
    if (specialCharacter == 0) {
      return "Password should include special character";
    } else return true;
  }

  function isRepasswordSimilar(password, repassword) {
    if(repassword.length==0){
      return "Please re-enter same password"
    }
    if (password == repassword) {
      return true;
    } else return "Re-entered password not similar";
  }

  function signUpValidation(Name, Email, Password, Repassword) {
    setName(isNameValid(Name));
    setEmail(emailValidation(Email));
    setPass(passwordValidation(Password));
    setRepass(isRepasswordSimilar(Password, Repassword));
  }

  return (
    <main className="flex">
      <div className="bg-white md:w-1/2 w-full h-screen flex flex-col items-center justify-center">
        <div className="flex max-w-[384px] flex-col gap-[40px]">
          <Link href={"/"}>
            <div className="m-auto w-full flex items-center justify-center max-h-[34.31px] max-w-[92.34px] gap-[9.46px] p-[5.4px]">
              <img
                className="object-contain max-h-[34.31px] max-w-[92.34px]"
                src="/logo.png"
              />
              <img
                className="object-contain max-h-[34.31px] max-w-[92.34px]"
                src="/Geld.png"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <h2 className="m-auto text-2xl text-[#0F172A] font-semibold">
              Create Geld account
            </h2>
            <p className="m-auto font-normal text-base text-[#331455]">
              Sign up below to create your Wallet account
            </p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
                if (name * email * pass * repass==1){
                      setName(event.target.Name.value);
                      setEmail(event.target.Email.value);
                      setPass(event.target.Password.value);
                      router.push('/Signup/Settings')
                    };
                      
                  if(name != true)
                  {toast.warn(`${isNameValid(event.target.Name.value)}`, {
                      position: "top-right",
                      autoClose: 3000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    })}
                   if(email != true)
                  {toast.warn(`${emailValidation(event.target.Email.value)}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })}
                  if(pass != true)
                  {toast.warn(`${passwordValidation(event.target.Password.value)}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })}
                  
                  if(repass != true)
                  {toast.error(`${isRepasswordSimilar(event.target.Password.value, event.target.Repassword.value)}`, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    })
                  }
                  // name * email * pass * repass == 1?router.push('/Signup/Settings')
            }}
            className="relative flex flex-col gap-4"
          >
            <input
              type="text"
              name="Name"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Name"
              onChange={(event) => {
                setName(isNameValid(event.target.value));
              }}
            />
            {/* <p className="absolute bottom-[-50%] italic opacity-50 text-red-500">
              {name}
            </p> */}
            <input
              type="text"
              name="Email"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Email"
              onChange={(event) => {
                setEmail(emailValidation(event.target.value));
              }}
            />
            {/* <p className="absolute bottom-[-60%] italic opacity-50 text-red-500">
              {email}
            </p> */}
            <input
              type="password"
              name="Password"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Password"
              onChange={(event) => {
                setPass(passwordValidation(event.target.value));
              }}
            />
            {/* <p className="absolute bottom-[-70%] italic opacity-50 text-red-500">
              {pass}
            </p> */}
            <input
              type="password"
              name="Repassword"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Re-enter password"
              onChange={(event) => {
                setRepass(
                  isRepasswordSimilar(
                    event.target.parentElement.Password.value,
                    event.target.value
                  )
                );
              }}
            />
            {/* <p className="absolute bottom-[-80%] italic opacity-50 text-red-500">
              {repass}
            </p> */}
            <button
              name="submitbtn"
              type="submit"
              className="w-full h-12 bg-[#0166FF] rounded-[20px] gap-1 text-white text-xl font-normal"
            >
              Sing up
            </button>
          </form>
          <div className="relative flex m-auto text-normal text-base items-center  ">
            <p className="text-[#0F172A]">Already have account?</p>
            <Link href={"/"}>
              <button className="text-[#0166FF] px-3 py-1 flex gap-1 bg-white">
                Log in
              </button>
              <p className="absolute left-0"></p>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#0166FF] md:w-1/2 hidden md:flex h-screen cursor-pointer text-white flex items-center justify-center">
        <img
          onClick={() => {
            router.push("/Dashboard");
          }}
          className="cursor-pointer"
          src="/logo-white.png"
        />
      </div>
    </main>
  );
}
