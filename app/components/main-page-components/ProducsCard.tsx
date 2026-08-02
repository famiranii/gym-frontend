import { ProductType } from "@/types/productType";
import Link from "next/link";

export default function ProducsCard({ product }: { product: ProductType }) {
  return (
    <Link
      href={`product/${product.id}`}
      key={product.id}
      className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
    >
      <img
        src={process.env.NEXT_PUBLIC_API_URL + product.image_url}
        alt={product.name}
        className="w-full aspect-square object-cover"
      />
      <div className="p-5">
        <h2 className="font-semibold text-lg text-neutral-900">
          {product.name}
        </h2>

        <p className="text-sm text-neutral-400 mt-1">موجودی: {product.stock}</p>

        <div className="flex items-center justify-between mt-6">
          <div>
            <p className="text-xl font-bold text-emerald-700">
              {product.price}
            </p>

            <span className="text-xs text-neutral-400">تومان</span>
          </div>

          <button className="bg-black hover:bg-neutral-800 text-white px-5 py-2 rounded-xl transition">
            خرید
          </button>
        </div>
      </div>
    </Link>
  );
}
