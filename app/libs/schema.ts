import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("لطفا ایمیل معتبر وارد کنید"),
  password: z.string().min(2, "رمز باید بیشتر از 6 حرف باشد"),
});
export const signupSchema = z.object({
  name: z.string().min(6, "نام و نام خانوادگی را به دقت وارد کنید"),
  email: z.string().email("لطفا ایمیل معتبر وارد کنید"),
  password: z.string().min(6, "رمز باید بیشتر از 6 حرف باشد"),
});
