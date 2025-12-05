"use client";

import { IProduct } from "@/interfaces/product.interface";
import { createContext, useEffect, useState, useContext } from "react";
import { useAuth } from "./AuthContext";
import { showToast } from "nextjs-toast-notify";


interface CartContextProps {
  cartItems: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  getIdItems: () => number[];
  getTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  getIdItems: () => [],
  getTotal: () => 0,
  getItemCount: () => 0,
});

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [initialized, setInitialized] = useState(false);
  const { dataUser } = useAuth();

  // 1️⃣ Leer carrito al montar (solo una vez)
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const cartdata = localStorage.getItem("cart");
      if (cartdata) {
        try {
          const parsed = JSON.parse(cartdata) as IProduct[];
          setCartItems(parsed);
        } catch (error) {
          console.error("Error parsing cart from localStorage", error);
        }
      }
    }
    setInitialized(true);
  }, []);

  // 2️⃣ Guardar carrito en localStorage cuando cambie (solo después de inicializar)
  useEffect(() => {
    if (!initialized) return;

    if (cartItems.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cartItems, initialized]);

  // 3️⃣ Vaciar carrito al hacer logout (cuando dataUser pasa a null)
  useEffect(() => {
    if (!initialized) return;

    // Si NO hay usuario logueado, vaciamos carrito y localStorage
    if (!dataUser) {
      setCartItems([]);
      if (typeof window !== "undefined" && window.localStorage) {
        localStorage.removeItem("cart");
      }
    }
  }, [dataUser, initialized]);

  const addToCart = (product: IProduct) => {
    if (!dataUser) {
      // alert("Debes iniciar sesion❌");
      showToast.warning("¡Debes iniciar sesion!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "popUp",
        icon: "",
        sound: true,
      });
      return;
    }

    const productExist = cartItems.some((item) => item.id === product.id);
    if (productExist) {
      // alert("Ya tienes este item en el carro de compras");
      showToast.error("¡Ya tienes este item en el carro de compras!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "popUp",
        icon: "",
        sound: true,
      });
      return;
    } else {
      // alert("Producto agregado al carrito 🛒");
      showToast.success("¡Producto agregado al carrito! 🛒", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "popUp",
        icon: "",
        sound: true,
      });
    }

    setCartItems((prev) => [...prev, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getIdItems = () => {
    return cartItems
      .map((item) => item.id)
      .filter((id): id is number => typeof id === "number");
  };

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const getItemCount = () => {
    return cartItems.length;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getIdItems,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
