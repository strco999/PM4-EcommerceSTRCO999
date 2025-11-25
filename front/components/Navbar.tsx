import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-evenly items-center h-[50px] bg-black text-white ">
      <section>Image Logo</section>
      <section>
        <nav>
          <ul className="flex w-full gap-7">
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
