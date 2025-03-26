"use client";

import Image from "next/image";
import { login } from "../_lib/actions";

const LoginButton = () => {
  return (
    <button
      onClick={() => login()}
      className="w-[20rem] mx-auto bg-white border-2 border-solid border-black text-black rounded-sm py-3 text-xl font-bold cursor-pointer flex items-center justify-center gap-3"
    >
      <span>Github</span>
      <Image
        src="https://authjs.dev/img/providers/github.svg"
        alt="Github logo"
        height="24"
        width="24"
      />
    </button>
  );
};

export default LoginButton;
