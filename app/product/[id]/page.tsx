"use client";

import { useState } from "react";
import Gallery from "./components/Gallery";
import Comments from "./components/Comments";
import Stars from "./components/Stars";

const product = {
  id: 1,
  name: "دمبل حرفه‌ای پولاد — سری تایتان",
  weight: "۲۰ کیلوگرم",
  price: 1850000,
  oldPrice: 2200000,
  discount: 16,
  rating: 4.2,
  reviewCount: 38,
  inStock: true,
  images: [
    "/images/dumbbell-1.jpg",
    "/images/dumbbell-2.jpg",
    "/images/dumbbell-3.jpg",
    "/images/dumbbell-4.jpg",
  ],
  specs: [
    { label: "وزن", value: "۲۰ کیلوگرم" },
    { label: "جنس", value: "فولاد آلیاژی" },
    { label: "پوشش", value: "رابر ضد لغزش" },
    { label: "گارانتی", value: "۲ سال" },
  ],
};

const reviews = [
  {
    id: 1,
    name: "علی رضایی",
    initials: "ع.ر",
    date: "۱۴۰۳/۰۴/۱۲",
    rating: 1,
    text: "کیفیت ساخت عالیه، دستگیره ضد لغزش واقعاً کار می‌کنه. بعد از ۶ ماه استفاده روزانه هیچ مشکلی نداره.",
    verified: true,
    color: "blue",
  },
  {
    id: 2,
    name: "سارا محمدی",
    initials: "س.م",
    date: "۱۴۰۳/۰۳/۲۸",
    rating: 4,
    text: "وزن‌گذاری دقیقه و بسته‌بندی محکم بود. ارسال یه روزه داشت که خیلی خوب بود. فقط قیمت کمی بالاست.",
    verified: true,
    color: "green",
  },
  {
    id: 3,
    name: "محمد کریمی",
    initials: "م.ک",
    date: "۱۴۰۳/۰۲/۱۵",
    rating: 3,
    text: "محصول خوبیه ولی انتظار داشتم رنگ‌بندی بیشتری داشته باشه. برای قیمتش قابل قبوله.",
    verified: false,
    color: "amber",
  },
];

const ratingBars = [
  { star: 5, count: 23, pct: 60 },
  { star: 4, count: 9, pct: 25 },
  { star: 3, count: 4, pct: 10 },
  { star: 2, count: 2, pct: 5 },
  { star: 1, count: 0, pct: 0 },
];




export default function Page() {
  const [qty, setQty] = useState(1);
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const formatPrice = (n: number) => n.toLocaleString("fa-IR") + " تومان";

  return (
    <div className="max-w-5xl mx-auto px-4 py-8" dir="rtl">
      {/* product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* gallery */}
        <Gallery images={product.images} />
        {/* info */}
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
              جدید
            </span>
            {product.inStock && (
              <span className="text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                موجود در انبار
              </span>
            )}
          </div>

          <h1 className="text-xl font-bold text-zinc-900 leading-snug">
            {product.name}
          </h1>

          <div className="flex items-center gap-3">
            <Stars rating={product.rating} size="md" />
            <span className="text-sm text-zinc-500">
              {product.rating} از ۵ — {product.reviewCount} نظر
            </span>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-zinc-900">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-zinc-400 line-through">
              {formatPrice(product.oldPrice)}
            </span>
            <span className="text-xs px-2.5 py-1 rounded-full bg-red-50 text-red-600 border border-red-200">
              {product.discount}٪ تخفیف
            </span>
          </div>

          <hr className="border-zinc-200" />

          {/* specs */}
          <div className="grid grid-cols-2 gap-2">
            {product.specs.map((s) => (
              <div key={s.label} className="bg-zinc-50 rounded-lg px-3 py-2.5">
                <div className="text-xs text-zinc-400 mb-1">{s.label}</div>
                <div className="text-sm font-medium text-zinc-800">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

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
      </div>

      {/* reviews */}
      <div>
        <h2 className="text-base font-medium text-zinc-900 mb-4 pb-3 border-b border-zinc-200">
          نظرات کاربران
        </h2>

        {/* summary */}
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-5 mb-5 flex gap-6 items-center">
          <div className="text-center shrink-0">
            <div className="text-5xl font-bold text-zinc-900">
              {product.rating}
            </div>
            <Stars rating={product.rating} size="md" />
            <div className="text-xs text-zinc-400 mt-1">
              از {product.reviewCount} نظر
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1.5">
            {ratingBars.map((b) => (
              <div
                key={b.star}
                className="flex items-center gap-2 text-xs text-zinc-500"
              >
                <span className="w-3">{b.star}</span>
                <div className="flex-1 h-1.5 bg-zinc-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-amber-400 rounded-full"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <span className="w-4 text-left">{b.count}</span>
              </div>
            ))}
          </div>
        </div>
        <Comments reviews={reviews} />
      </div>
    </div>
  );
}
