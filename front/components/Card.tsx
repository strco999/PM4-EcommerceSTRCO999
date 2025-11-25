import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <div className="w-[300px] h-[900px] border-2 ">
      <Image
        src={product.image}
        alt={`product image ${product.name}`}
        width={250}
        height={300}
        className="w-80 h-80 object-cover "
      />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
}

export default Card;
