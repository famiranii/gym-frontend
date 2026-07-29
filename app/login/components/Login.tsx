import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import PrimaryButton from "@/app/components/btns/PrimaryButton";
import GoogleButton from "@/app/components/btns/GoogleButton";
import Divider from "./Divider";
import Input from "./Input";
import { loginSchema } from "@/app/libs/schema";
import { api } from "@/app/utils/api";

type FormData = z.infer<typeof loginSchema>;

export default function Login({
  setTab,
}: {
  setTab: (page: "Signup") => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await api.post("register" , data)
    console.log(res)
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="ایمیل">
        <input
          type="email"
          placeholder="example@email.com"
          dir="ltr"
          {...register("email")}
        />
      </Input>
      <div className="h-8">
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email.message}</p>
        )}
      </div>

      <Input label="رمز عبور">
        <input
          type="password"
          placeholder="••••••••"
          dir="ltr"
          {...register("password")}
        />
      </Input>
      <div className="h-8">
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password.message}</p>
        )}
      </div>
      <div className="flex justify-start mb-5">
        <span className="text-[11px] text-neutral-400 underline underline-offset-2 cursor-pointer">
          رمز را فراموش کردید؟
        </span>
      </div>

      <PrimaryButton disabled={isSubmitting}>
        {isSubmitting ? "در حال ورود..." : "ورود"}
      </PrimaryButton>

      <Divider />
      <GoogleButton />

      <p className="text-[12px] text-neutral-400 text-center mt-5">
        حساب ندارید؟{" "}
        <span
          onClick={() => setTab("Signup")}
          className="text-neutral-900 underline underline-offset-2 cursor-pointer"
        >
          ثبت‌نام کنید
        </span>
      </p>
    </form>
  );
}
