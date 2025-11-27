// import Link from "next/link";
// import React from "react";

// function Footer() {
//   return (
//     <footer className=" bg-black text-white bg-neutral-primary-soft rounded-base shadow-xs border border-default m-4">
//       <div className="w-full mx-auto max-w-7xl p-4 md:flex md:items-center md:justify-between">
//         <span className="text-sm text-body sm:text-center">
//           © 2025{" "}
//           <Link href="https://strco999.com/" className="hover:underline">
//             Strco999™
//           </Link>
//           . All Rights Reserved.
//         </span>
//         <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-body sm:mt-0">
//           <li>
//             <Link href="#" className="hover:underline me-4 md:me-6">
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:underline me-4 md:me-6">
//               Privacy Policy
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:underline me-4 md:me-6">
//               Licensing
//             </Link>
//           </li>
//           <li>
//             <Link href="#" className="hover:underline">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </footer>
//   );
// }

// export default Footer;

import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t border-neutral-800">
      <div className="w-full mx-auto max-w-7xl p-4 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <span className="text-sm text-gray-300 sm:text-center">
          Copyright © 2025{" "}
          <Link
            href="https://strco999.com/"
            className="hover:underline font-medium"
          >
            Strco999™
          </Link>
          . Todos los derechos reservados.
        </span>
        <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-400">
          <li>
            <Link href="#" className="hover:underline">
              About.
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Aviso legal.
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Política de privacidad.
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:underline">
              Colombia.
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
