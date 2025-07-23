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
        <div className="flex max-w-[200px] flex-col gap-[40px]">
          <Link href={"/"}>
            <div className="m-auto w-full flex items-center justify-center h-[50px] w-[120px] gap-[9.46px] p-[5.4px]">
              <img className="object-contain" src="/group.png" />
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
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="Email"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Email: admin"
            />
            <input
              type="password"
              name="Password"
              className="w-full h-12 p-4 rounded-xl bg-[#F3F4F6]"
              placeholder="Password: admin"
            />
            <button
              type="sumbit"
              className="w-full h-12 bg-[#0166FF] rounded-[20px] gap-1 text-white text-xl font-normal"
            >
              Log in
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#0166FF] md:w-1/2 hidden md:flex h-screen text-white  grid grid-rows-3 grid-cols-2 gap-3 items-center justify-center cursor pointer">
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-jeans.png" />
        </div>
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-factory.png" />
        </div>
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-moda.png" />
        </div>
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-uniform.png" />
        </div>
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-business.png" />
        </div>
        <div>
          <img className="cursor-pointer w-[120px]" src="/w-shop.png" />
        </div>
      </div>
    </main>
  );
}
