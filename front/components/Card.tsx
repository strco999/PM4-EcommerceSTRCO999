import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <div className="w-[300px] h-[800px] border-2 ">
      <Image
        src={product.image}
        alt={`product image ${product.name}`}
        width={250}
        height={300}
      />

      <Link href={`product/${product.id}`}>
        <h3>COP$ {product.price}</h3>
      </Link>
      <p className="overflow-">{product.description}</p>
      <p>COP$ {product.price}</p>
      <Link
        href={`product/${product.id}`}
        className="border border-black bg-amber-500 w-[250px] h-[60px] w-[] "
      >
        Ver Producto
      </Link>
    </div>
  );
}

export default Card;
