// import Link from "next/link";

// function Navbar() {
//   return (
//     <div className="flex justify-evenly items-center h-[50px] bg-black text-white ">
//       <section>Image Logo</section>
//       <section>
//         <nav>
//           <ul className="flex w-full gap-7">
//             <Link href="/">Home</Link>
//             <Link href="/dashboard">Dashboard</Link>
//             <Link href="/cart">Cart</Link>
//           </ul>
//         </nav>
//       </section>
//     </div>
//   );
// }

// export default Navbar;

import Link from "next/link";

function Navbar() {
  return (
    <div className="w-full flex justify-between items-center h-16 px-6 bg-black text-white">
      <Link href="/">
        <section>STRCO999™</section>
      </Link>

      <section>
        <nav>
          <ul className="flex gap-7 text-sm sm:text-base">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/cart">Cart</Link>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
