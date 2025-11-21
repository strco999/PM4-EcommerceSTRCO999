import { mockProducts } from "@/helpers/mockProducts";
import Card from "@/components/Card";



export default function Home() {
  return (
    <div className="">
      <main className="">
      <h1>STRCO999 STORES</h1>
      <p>TECNOLOGIA DE PUNTA</p>
      <h3>PRODUCTOS</h3>
      <section className="flex flex-column w-screen">
      {mockProducts.map((product) => {
                  return<Card key={product.name} product={product} />;               
               })}
      </section>
      </main>
      </div>
  );
}

Image