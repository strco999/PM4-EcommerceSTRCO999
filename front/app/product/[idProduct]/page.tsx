import { IProduct } from "@/interfaces/product.interface";
import { getProductById } from "@/services/products.services";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: {
    idProduct: string;
  };
}

async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { idProduct } = await params;

  let product: IProduct;

  try {
    product = await getProductById(idProduct);
  } catch (error) {
    notFound();
  }

  return (
    <div className="bg-white">
      <div className="pt-6">
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6">
          <img
            alt={"Image error"}
            src={product.image}
            className="row-span-2 aspect-4/5 size-full object-cover sm:rounded-lg lg:aspect-3/4"
            width={800} // requerido
            height={800} // requerido
          />
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl tracking-tight text-gray-900">
              COP$ {product.price}
            </p>
          </div>

          <button type="submit" className="bg-azulapple cursor-pointer text-amber-50">
            Agregar al Carrito
          </button>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pr-8 lg:pb-16">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              {/* <h3 className="text-sm font-medium text-gray-900">Highlights</h3> */}

              <div className="mt-4"></div>
            </div>

            <div className="mt-10">
              {/* <h2 className="text-sm font-medium text-gray-900">Detalles</h2> */}

              {/* <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.description}</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;
