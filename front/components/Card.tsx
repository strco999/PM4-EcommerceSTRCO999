// import { IProduct } from "@/interfaces/product.interface";
// import Image from "next/image";
// import Link from "next/link";

// interface CardProps {
//   product: IProduct;
// }

// function Card({ product }: CardProps) {
//   return (
//     <div className=" w-[300px] h-[800px] flex flex-col items-center justify-start gap-4 text-center">
//       <Image
//         src={product.image}
//         alt={`product image ${product.name}`}
//         width={250}
//         height={300}
//         className="object-contain"
//       />

//       {/* <Link href={`product/${product.id}`}>
//         <h3>COP$ {product.price}</h3>
//       </Link> */}
//       <p className="text-center font-bold">{product.name}</p>

//       {/* <p className="overflow-">{product.description}</p> */}

//       <p className="font-bold flex justify-center items-center">
//         COP$ {product.price}
//       </p>

//       <div className="flex justify-center items-center">
//         <Link href={`product/${product.id}`} className="">
//           <button
//             type="submit"
//             className="flex justify-center items-center bg-azulapple cursor-pointer text-amber-50 rounded-lg px-4 py-2 w-full lg:w-auto"
//           >
//             Ver Producto
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Card;

import { IProduct } from "@/interfaces/product.interface";
import Image from "next/image";
import Link from "next/link";

interface CardProps {
  product: IProduct;
}

function Card({ product }: CardProps) {
  return (
    <div
      className="
        w-full 
        max-w-xs sm:max-w-sm 
        min-h-[380px] 
        flex flex-col 
        items-center 
        justify-between 
        gap-4 
        text-center 
        bg-white/10 
        rounded-2xl 
        shadow-lg 
        p-4 sm:p-5
      "
    >
      <div className="w-full flex justify-center">
        <Image
          src={product.image}
          alt={`product image ${product.name}`}
          width={250}
          height={250}
          className="object-contain"
        />
      </div>

      <p className="text-center font-bold text-sm sm:text-base line-clamp-2">
        {product.name}
      </p>

      <p className="font-bold text-lg sm:text-xl flex justify-center items-center">
        COP$ {product.price}
      </p>

      <div className="w-full flex justify-center items-center mt-2">
        <Link href={`product/${product.id}`} className="w-full">
          <button
            type="button"
            className="
              bg-azulapple 
              cursor-pointer 
              text-amber-50 
              rounded-lg 
              px-4 
              py-2 
              w-full
              hover:bg-azulapple/80 
              transition
            "
          >
            Ver Producto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
