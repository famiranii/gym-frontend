import { ProductType } from "@/types/productType";
import { api } from "./utils/api";
import Image from "next/image";

export default async function Home() {
  const products = await api.get<ProductType[]>("/products");
  console.log(products);

  return (
    <main className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-5">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-neutral-900">محصولات</h1>

          <p className="text-neutral-500 mt-3">
            بهترین مکمل‌های ورزشی با تضمین اصالت
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
            >
              <img
                src={`http://localhost:9000${product.image_url}`}
                alt={product.name}
                className="w-full aspect-square object-cover"
              />

              <div className="p-5">
                <h2 className="font-semibold text-lg text-neutral-900">
                  {product.name}
                </h2>

                <p className="text-sm text-neutral-400 mt-1">
                  موجودی: {product.stock}
                </p>

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
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
