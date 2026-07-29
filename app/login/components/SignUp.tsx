import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Input from "./Input";
import PrimaryButton from "@/app/components/btns/PrimaryButton";
import Divider from "./Divider";
import GoogleButton from "@/app/components/btns/GoogleButton";
import { signupSchema } from "@/app/libs/schema";
import { api } from "@/app/utils/api";

type FormData = z.infer<typeof signupSchema>;

export default function SignUp({
  setTab,
}: {
  setTab: (page: "Login") => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: FormData) => {
    const res = await api.post("register", data);
    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input label="نام">
        <input type="text" placeholder="علی میرزایی" {...register("name")} />
      </Input>
      <div className="h-6">
        {errors.name && (
          <p className="text-red-500 text-xs mb-2">{errors.name.message}</p>
        )}
      </div>
      <Input label="ایمیل">
        <input
          type="email"
          placeholder="example@email.com"
          dir="ltr"
          {...register("email")}
        />
      </Input>
      <div className="h-6">
        {errors.email && (
          <p className="text-red-500 text-xs mb-2">{errors.email.message}</p>
        )}
      </div>

      <Input label="رمز عبور">
        <input
          type="password"
          placeholder="حداقل ۸ کاراکتر"
          dir="ltr"
          {...register("password")}
        />
      </Input>
      <div className="h-6">
        {errors.password && (
          <p className="text-red-500 text-xs mb-2">{errors.password.message}</p>
        )}
      </div>

      <PrimaryButton disabled={isSubmitting}>
        {isSubmitting ? "در حال ثبت..." : "ایجاد حساب"}
      </PrimaryButton>

      <Divider />
      <GoogleButton />

      <p className="text-[12px] text-neutral-400 text-center mt-5">
        حساب دارید؟{" "}
        <span
          onClick={() => setTab("Login")}
          className="text-neutral-900 underline underline-offset-2 cursor-pointer"
        >
          وارد شوید
        </span>
      </p>
    </form>
  );
}
