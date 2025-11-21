import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";


interface CardProps {
    product: IProduct;
}

function Card ({ product }: CardProps) {
    return (
         <div className="W-[350px] h-[600px] border-2 ">
               <Image
               src={product.image} 
               alt={`product image ${product.name}`}
               width={350} 
               height={300}
               />           
               <h3>{product.name}</h3>
               <p className="overflow">{product.description}</p>
               <p>{product.price}</p>
             </div>

    );
}

export default Card;