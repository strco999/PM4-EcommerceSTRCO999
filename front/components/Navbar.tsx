"use client";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Navbar() {
  const { dataUser, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // limpia el contexto / localStorage
    router.push("/"); // redirige al Home
    alert("Salida Exitosa"); // mensaje
  };

  return (
    <div className="w-full flex justify-between items-center h-16 px-6 bg-black text-white">
      <Link href="/">
        <section>STRCO999™</section>
      </Link>

      <section>
        <nav>
          <ul className="flex gap-7 text-sm sm:text-base">
            <Link href="/">Home</Link>

            {dataUser && <Link href="/dashboard">Dashboard</Link>}
            <Link href="/cart">Cart</Link>

            {dataUser ? (
              <div className="flex gap-4">
                <p>{dataUser.user.name}</p>
                <button
                  className="cursor-pointer hover:underline text-red-600 "
                  onClick={handleLogout}
                >
                  {" "}
                  Logout{" "}
                </button>
              </div>
            ) : (
              <div className="flex gap-4">
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </div>
            )}
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default Navbar;
