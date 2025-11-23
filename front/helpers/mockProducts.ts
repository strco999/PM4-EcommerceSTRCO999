import { IProduct } from "@/interfaces/product.interface";

export const mockProducts: IProduct[] = [
  {
    name: "iPhone 17 Pro",
    price: 6449000,
    description:
      "El iPhone más poderoso hasta ahora. Espectacular pantalla de 6,3 pulgadas, diseño unibody de aluminio, chip A19 Pro, cámaras traseras de 48 MP y una extraordinaria duración de la batería.",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-18067820_m_jpeg_1.jpg?v=1757469508",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "MacBook Air de 13 M4",
    price: 6099000,
    description:
      "Con chip M4 te da toda la velocidad que necesitas para trabajar y jugar. Con Apple Intelligence, su brillante pantalla Liquid Retina, hasta 18 horas de batería2 y su diseño increíblemente delgado, liviano y resistente.",
    image:"https://mac-center.com/cdn/shop/files/IMG-16751976_966015af-38bd-4467-9d6d-0e41cd9ddea2.jpg?v=1741187883",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "iPad Pro de 13 M5",
    price: 7499000,
    description:
      "Diseñado para Apple Intelligence. Gracias a la potencia del chip M5 de Apple, el iPad Pro ofrece un rendimiento descomunal que facilita la productividad y te permite enfrentar flujos de trabajo avanzados con IA. Con una espectacular pantalla Ultra Retina XDR, conexiones Wi-Fi 7 y 5G ultrarrápidas, Neural Accelerators para cargas de trabajo con IA y un nuevo diseño de iPadOS.",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-18277594_m_jpeg_1_e63afb9b-720e-4a93-9a87-9d6b5e6e7e80.jpg?v=1760537420",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Apple Watch Ultra 3",
    price: 4399000,
    description:
      "El compañero perfecto para el deporte y la aventura está diseñado para durar, con una robusta caja de titanio y una pantalla de cristal de zafiro resistente. Tiene una clasificación de resistencia al agua de 100 metros, ideal para nadar y practicar buceo recreativo y deportes acuáticos de alta velocidad.",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-18072531_m_jpeg_1.jpg?v=1757526344",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "AirPods Pro 3",
    price: 1279000,
    description:
      "Hasta 2 veces más Cancelación Activa de Ruido que los AirPods Pro 2. Ahora con detección de la frecuencia cardiaca, Traducción en Vivo, mayor duración de la batería y avances en salud auditiva. Rediseñados para un ajuste más seguro.",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-18067428_m_jpeg_1.jpg?v=1757469538",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Apple TV 4K (3rd generation)",
    price: 899000,
    description:
      "Una impresionante calidad de imagen 4K Dolby Vision y HDR10+. Sonido envolvente, como en el cine, gracias al Audio Espacial y Dolby Atmos. Disfruta Apple TV+, Fotos, Apple Fitness+, Apple Music y Apple Arcade. Todo gracias a un puerto Ethernet para transferir datos a alta velocidad y redes Thread que permiten mejor conectividad.",
    image:
      "https://mac-center.com/cdn/shop/files/IMG-7864480_56ea7eda-01a8-4592-aee7-af3e81bac5a9.jpg?v=1723752350",
    categoryId: 6,
    stock: 10,
  },
];