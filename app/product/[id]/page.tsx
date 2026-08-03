import Gallery from "./components/Gallery";
import Comments from "./components/Comments";
import Stars from "./components/Stars";
import RatingBar from "./components/RatingBar";
import Descriptions from "./components/Descriptions";
import { ProductType } from "@/types/productType";
import { api } from "@/app/utils/api";

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

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product: ProductType = await api.get("products/" + id);
  const distribution = product.distribution?.map((d) => ({
    stars: d.stars,
    count: d.count,
    pct: product.rating_count > 0 ? (d.count / product.rating_count) * 100 : 0,
  }));
  return (
    <div className="max-w-5xl mx-auto px-4 py-8" dir="rtl">
      {/* product grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* gallery */}
        <Gallery images={product.images} image_url={product.image_url} />
        {/* info */}
        <Descriptions product={product} />
      </div>

      {/* reviews */}
      <div>
        <h2 className="text-base font-medium text-zinc-900 mb-4 pb-3 border-b border-zinc-200">
          نظرات کاربران
        </h2>

        {/* summary */}
        <div className="bg-zinc-50 rounded-2xl border border-zinc-200 p-5 mb-5 flex gap-6 items-center">
          {/* <div className="text-center shrink-0">
            <div className="text-5xl font-bold text-zinc-900">
              {product.rating}
            </div>
            <Stars rating={product.rating} size="md" />
            <div className="text-xs text-zinc-400 mt-1">
              از {product.reviewCount} نظر
            </div>
          </div> */}
          <div className="flex-1 flex flex-col gap-1.5">
            {distribution?.map((b, i) => (
              <RatingBar rate={b} key={i} />
            ))}
          </div>
        </div>
        <Comments reviews={reviews} />
      </div>
    </div>
  );
}
