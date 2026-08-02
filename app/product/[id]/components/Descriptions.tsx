"use client";

import { ProductType } from "@/types/productType";
import { useState } from "react";
import Stars from "./Stars";

export default function Descriptions({ product }: { product: ProductType }) {
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const formatPrice = (n: number) => n.toLocaleString("fa-IR") + " تومان";
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
          جدید
        </span>
        {product.stock > 0  && (
          <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
            موجود در انبار
          </span>
        )}
      </div>

      <h1 className="text-xl font-bold text-zinc-900 leading-snug">
        {product.name}
      </h1>

      {/* <div className="flex items-center gap-3">
        <Stars rating={product.rating} size="md" />
        <span className="text-sm text-zinc-500">
          {product.rating} از ۵ — {product.reviewCount} نظر
        </span>
      </div> */}

      <div className="flex items-baseline gap-3">
        <span className="text-2xl font-bold text-zinc-900">
          {formatPrice(product.price)}
        </span>
        {/* <span className="text-sm text-zinc-400 line-through">
          {formatPrice(product.oldPrice)}
        </span>
        <span className="text-xs px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">
          {product.discount}٪ تخفیف
        </span> */}
      </div>

      <hr className="border-zinc-200" />

      {/* specs */}
      <div className="grid grid-cols-2 gap-2"></div>

      <hr className="border-zinc-200" />

      {/* qty */}
      <div className="flex items-center gap-3">
        <span className="text-sm text-zinc-600">تعداد:</span>
        <div className="flex items-center border border-zinc-300 rounded-lg overflow-hidden">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="w-9 h-9 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 text-lg flex items-center justify-center transition-colors"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-medium text-zinc-800 border-x border-zinc-300">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(10, q + 1))}
            className="w-9 h-9 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 text-lg flex items-center justify-center transition-colors"
          >
            +
          </button>
        </div>
      </div>

      {/* actions */}
      <div className="flex gap-2">
        <button
          onClick={handleAddToCart}
          className="flex-1 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-colors flex items-center justify-center gap-2"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.5 6M7 13l-1-4m12 4l1.5 6M10 19a1 1 0 100 2 1 1 0 000-2zm7 0a1 1 0 100 2 1 1 0 000-2z"
            />
          </svg>
          افزودن به سبد خرید
        </button>
        <button
          onClick={() => setWished((w) => !w)}
          className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors ${
            wished
              ? "border-red-300 bg-red-50 text-red-500"
              : "border-zinc-300 bg-zinc-50 text-zinc-500 hover:text-red-400"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={wished ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {added && (
        <p className="text-sm text-emerald-600 flex items-center gap-1.5">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          به سبد خرید اضافه شد
        </p>
      )}
    </div>
  );
}
