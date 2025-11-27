import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <div className="w-[300px] h-[800px] border ">
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

      <p className="flex justify-center items-center">COP$ {product.price}</p>

      <div className="flex justify-center items-center">
        <Link href={`product/${product.id}`} className="">
          <button
            type="submit"
            className=" flex justify-center items-center bg-azulapple cursor-pointer text-amber-50 rounded-lg px-4 py-2 w-full lg:w-auto"
          >
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
