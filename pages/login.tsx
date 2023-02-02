import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import loginbg from "../public/loginbg.jpg";
import logo from "../public/logo.svg";
import { useForm, SubmitHandler } from "react-hook-form";
import { async } from "@firebase/util";
import useAuth from "@/hooks/useAuth";
interface Inputs {
  email: string;
  password: string;
}

function login() {
  const [login, setLogin] = useState(false);
  const {
    // register寄存器
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const { signIn, signUp } = useAuth();
  // const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (login) {
      await signIn(email, password);
    } else {
      await signUp(email, password);
    }
  };
  return (
    // transparent透明
    <div className=" relative flex h-screen w-screen flex-col bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        fill
        src={loginbg}
        className="-z-10 !hidden opacity-60 sm:!inline object-cover"
        alt="/"
        sizes="(min-width: 60em) 24vw,
        (min-width: 28em) 45vw,
        100vw"
      />
      <Image
        width={100}
        height={100}
        src={logo}
        className=" absolute top-4 left-4 cursor-pointer object-contain md:left-10 md:top-6"
        alt="/"
        sizes="(min-width: 60em) 24vw,
        (min-width: 28em) 45vw,
        100vw"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative mt-24 space-y-8 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14"
      >
        <h1 className="text-4xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input
              type="email"
              placeholder="Email"
              className="input"
              {...register("email", { required: true })}
            />
            {errors.password && (
              <p className=" p-1 text-md  text-orange-500">
                Please enter a valid email
              </p>
            )}
          </label>
          <label className="inline-block  w-full">
            <input
              type="password"
              placeholder="Password"
              className="input"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className=" p-1 text-md  text-orange-500">
                Please enter a valid password
              </p>
            )}
          </label>
        </div>
        <button
          onClick={() => setLogin(true)}
          className=" w-full rounded bg-[#e50914] font-semibold py-3 "
        >
          Sign In
        </button>
        <div className=" text-[gray] ">
          New to Netflix?
          <button
            onClick={() => setLogin(false)}
            type="submit"
            className=" text-white hover:underline pl-2"
          >
            Sign up now
          </button>
        </div>
      </form>
    </div>
  );
}

export default login;
