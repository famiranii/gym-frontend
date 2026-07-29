// app/layout.tsx
import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  variable: "--font-vazir",
  display: "swap",
});

export const metadata: Metadata = {
  title: "جیم‌شاپ — تجهیزات بدنسازی حرفه‌ای",
  description:
    "خرید آنلاین تجهیزات بدنسازی و فیتنس با ارسال سریع و ضمانت اصالت کالا",
  keywords: ["بدنسازی", "تجهیزات ورزشی", "جیم‌شاپ", "خرید دمبل", "خرید هالتر"],
  openGraph: {
    title: "جیم‌شاپ",
    description: "تجهیزات بدنسازی حرفه‌ای",
    locale: "fa_IR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={vazir.variable}>
      <body className={`${vazir.className}  font-vazir antialiased`}>
        {children}
      </body>
    </html>
  );
}
