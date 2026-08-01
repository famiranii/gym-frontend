"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { api } from "@/app/utils/api";
import { addProductSchema } from "@/app/libs/schema";

import { z } from "zod";
import MainInput from "@/app/components/inputs/MainInput";

type FormData = z.infer<typeof addProductSchema>;

export default function AddProductPage() {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(addProductSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("description", data.description);
      formData.append("price", String(data.price));
      formData.append("stock", String(data.stock));
      formData.append("image", data.image);

      await api.post("/admin/products/new", formData);
    } catch (err) {
      console.error(err);
    }

    reset();
  };

  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-2xl rounded-3xl border border-neutral-200 bg-white p-10 shadow-xl">
        <h1 className="mb-8 text-center text-3xl font-bold">افزودن محصول</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <MainInput
            label="نام محصول"
            placeholder="نام محصول"
            error={errors.name?.message}
            {...register("name")}
          />

          <MainInput
            textarea
            rows={5}
            label="توضیحات"
            placeholder="توضیحات محصول..."
            error={errors.description?.message}
            {...register("description")}
          />

          <div className="grid grid-cols-2 gap-5">
            <MainInput
              label="قیمت"
              type="number"
              placeholder="2500000"
              error={errors.price?.message}
              {...register("price", { valueAsNumber: true })}
            />

            <MainInput
              label="موجودی"
              type="number"
              placeholder="10"
              error={errors.stock?.message}
              {...register("stock", { valueAsNumber: true })}
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium">تصویر محصول</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) setValue("image", file, { shouldValidate: true });
              }}
              className="w-full rounded-xl border border-neutral-200 p-2 text-sm"
            />
            {errors.image && (
              <p className="text-sm text-red-500">{errors.image.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="h-12 w-full rounded-2xl bg-black font-semibold text-white transition hover:bg-neutral-800 disabled:opacity-60"
          >
            {isSubmitting ? "در حال ثبت..." : "ثبت محصول"}
          </button>
        </form>
      </div>
    </main>
  );
}
