import { IProduct } from "@/interfaces/product.interface";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProducts = async () => {
  try {
    const res = await fetch(`${APIURL}/products`, {
      method: "GET",
    });
    const productsResponse: IProduct[] = await res.json();
    return productsResponse;
  } catch (error: any) {
    throw new Error(error as string);
  }
};

export const getProductById = async (id: string) => {
  try {
    const AllProducts = await getAllProducts();
    const product = AllProducts.find((product) => product.id === Number(id));
    if (!product) {
      throw new Error(`Producto no encontrado con el ID: ${id} `);
    }
    return product;
  } catch (error) {
    throw new Error(error as string);
  }
};
