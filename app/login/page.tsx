"use client";

import { useState } from "react";

import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Image from "next/image";

export default function AuthPage() {
  const [tab, setTab] = useState<"Login" | "Signup">("Login");

  const setTabHandler = (page: "Login" | "Signup") => {
    setTab(page);
  };
  return (
    <div
      dir="rtl"
      className={`min-h-screen bg-[#F5F0E8] flex flex-col items-center justify-center px-4`}
    >
      <div>
        <Image
          src="/images/notbg-logod.png"
          alt="chehel"
          width={200}
          height={200}
        />
      </div>
      <div className="w-full max-w-sm">
        <div className="flex gap-8 border-b border-[#d6d0c4] mb-8">
          {(["Login", "Signup"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`text-[13px] pb-1.5 border-b transition-colors duration-150 ${
                tab === t
                  ? "text-neutral-900 border-neutral-900"
                  : "text-neutral-400 border-transparent"
              }`}
            >
              {t === "Login" ? "ورود" : "ثبت‌نام"}
            </button>
          ))}
        </div>

        {tab === "Login" && <Login setTab={setTabHandler} />}

        {tab === "Signup" && <SignUp setTab={setTabHandler} />}
      </div>
    </div>
  );
}
