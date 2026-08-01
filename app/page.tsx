import { ProductType } from "@/types/productType";
import { api } from "./utils/api";
import ProducsCard from "./components/main-page-components/ProducsCard";
import Banner from "./components/main-page-components/Banner";

export default async function Home() {
  const products = await api.get<ProductType[]>("/products");
  console.log(products);

  return (
    <main className="min-h-screen py-6">
      <div className="max-w-7xl mx-auto px-5">
        <Banner />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProducsCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
