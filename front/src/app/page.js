"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useText } from "./Components/provider/AuthProvider";
import { Loading } from "./Components/Loading";

export default function Home() {
  const router = useRouter();
  const { signIn, isLoading, setIsLoading } = useText();

  useEffect(() => {
    fetch("https://expense-tracker-0f16.onrender.com")
      .then((response) => response.text())
      .then((data) => console.log(data));
  }, []);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <main className="flex">
      <div className="bg-white  md:w-1/2 w-full h-screen flex flex-col items-center justify-center">
        <div className="flex max-w-[30%] min-w-[200px] flex-col gap-[40px]">
          <Link href={"/"}>
            <div className="m-auto w-full flex items-center justify-center h-[30px] w-[60px] gap-[9.46px] p-[5.4px]">
              <img
                className="object-contain w-[60px] h-[30px]"
                src="/uniform.png"
              />
            </div>
          </Link>
          <div className="flex flex-col gap-2">
            <h2 className="m-auto text-2xl text-[#0F172A] font-semibold">
              Welcome Back
            </h2>
            <p className="m-auto font-normal text-base text-[#331455]">
              Welcome back, Please enter your details
            </p>
          </div>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              signIn(event.target.Email.value, event.target.Password.value);
              console.log(
                event.target.Email.value,
                event.target.Password.value
              );
            }}
            className="flex flex-col gap-4 w-full"
          >
            <input
              type="text"
              name="Email"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Insert your e-mail"
            />
            <input
              type="password"
              name="Password"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Insert your password"
            />
            <button
              type="sumbit"
              className="w-full h-12 bg-[#0166FF] rounded-[20px] gap-1 text-white text-xl font-normal"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#0166FF] md:w-1/2 hidden md:flex h-screen text-white  grid grid-rows-3 grid-cols-2 gap-3 items-center justify-center select-none">
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-uniform.png" />
        </div>
      </div>
    </main>
  );
}
