import Card from "@/components/Card";
import { getAllProducts } from "@/services/products.services";

export default async function Home() {
  const allProducts = await getAllProducts();

  return (
    <div className="flex items-center justify-center ">
      <main className="flex flex-col items-center justify-between">
        <h1>STRCO999</h1>
        <p>TECNOLOGIA DE PUNTA</p>
        <h3>DISPONIBLE</h3>
        <section className="flex flex-column w-screen items-center justify-between ">
          {allProducts &&
            allProducts.map((product) => {
              return <Card key={product.name} product={product} />;
            })}
        </section>
      </main>
    </div>
  );
}
