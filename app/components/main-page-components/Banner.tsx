import Image from "next/image";

export default function Banner() {
  return (
    <div
      className="mb-12 text-center bg-cover min-h-120 bg-center py-24"
      style={{ backgroundImage: "url('/images/woman.jpg')" }}
    >
      <div className="relative z-10 text-center px-8 py-12 max-w-xl">
        <div className="w-full flex items-center justify-center">
          <Image
            src="/images/notbg-logod.png"
            alt="logo"
            height={100}
            width={100}
          />
        </div>

        <h1 className="text-5xl font-black text-white leading-tight tracking-tight mb-4">
          تجهیزات
          <br />
          <span className="text-emerald-900">حرفه‌ای</span> بدنسازی
        </h1>

        <p className="text-zinc-700 text-base leading-relaxed mb-8 max-w-sm mx-auto">
          بهترین مکمل‌ها و تجهیزات ورزشی با تضمین اصالت کالا و ارسال سریع
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          {[
            { icon: "✓", text: "تضمین اصالت" },
            { icon: "🚚", text: "ارسال سریع" },
            { icon: "★", text: "بهترین قیمت" },
          ].map((b) => (
            <span
              key={b.text}
              className="flex items-center gap-2 bg-white/50 border border-white/10 rounded-full px-4 py-2 text-sm text-zinc-700"
            >
              {b.icon} {b.text}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
