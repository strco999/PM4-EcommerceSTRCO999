// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import OrderList from "@/components/OrderList";

// export default function DashboardPage() {
//   const { dataUser } = useAuth();
//   const router = useRouter();

//   // Proteger la ruta: si no hay usuario logueado, manda a /login
//   useEffect(() => {
//     if (!dataUser) {
//       router.push("/login");
//     }
//   }, [dataUser, router]);

//   if (!dataUser) {
//     return (
//       <div className="w-full min-h-screen flex justify-center items-center bg-negroapple">
//         <p className="text-amber-50">Redirigiendo...</p>
//       </div>
//     );
//   }

//   const { user } = dataUser; // asumiendo dataUser.user.{email,name,address,phone}

//   return (
//     <div className="w-full min-h-screen flex justify-center items-center bg-negroapple px-4">
//       <section className="w-full max-w-lg bg-white/10 p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
//         {/* Header perfil */}
//         <div className="flex items-center gap-4">
//           <div className="w-14 h-14 rounded-full bg-azulapple flex items-center justify-center text-2xl font-bold text-amber-50">
//             {user.name?.charAt(0).toUpperCase()}
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-xl sm:text-2xl font-bold text-amber-50">
//               Mi Perfil
//             </h1>
//             <p className="text-amber-50/80 text-sm">{user.email}</p>
//           </div>
//         </div>

//         <hr className="border-amber-50/20" />

//         {/* Datos del usuario */}
//         <div className="flex flex-col gap-4">
//           <div>
//             <p className="text-xs text-amber-50/70 uppercase tracking-wide">
//               Nombre
//             </p>
//             <p className="text-amber-50 text-sm sm:text-base font-medium">
//               {user.name}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-amber-50/70 uppercase tracking-wide">
//               Dirección
//             </p>
//             <p className="text-amber-50 text-sm sm:text-base font-medium">
//               {user.address ?? "No registrada"}
//             </p>
//           </div>

//           <div>
//             <p className="text-xs text-amber-50/70 uppercase tracking-wide">
//               Teléfono
//             </p>
//             <p className="text-amber-50 text-sm sm:text-base font-medium">
//               {user.phone ?? "No registrado"}
//             </p>
//           </div>
//         </div>

//         <p className="text-xs text-amber-50/60 text-center mt-2">
//           Próximamente podrás editar tus datos desde este panel.
//         </p>
//       </section>
//       <section>
//         <OrderList/>
//       </section>
//     </div>
//   );
// }

// "use client";

// import { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/context/AuthContext";
// import OrderList from "@/components/OrderList";

// export default function DashboardPage() {
//   const { dataUser } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     if (!dataUser) {
//       router.push("/login");
//     }
//   }, [dataUser, router]);

//   if (!dataUser) {
//     return (
//       <div className="w-full min-h-screen flex justify-center items-center bg-negroapple">
//         <p className="text-amber-50">Redirigiendo...</p>
//       </div>
//     );
//   }

//   const { user } = dataUser;

//   return (
//     <div className="w-full min-h-screen flex justify-center items-start bg-negroapple px-4 py-10">
//       <div className="w-full max-w-3xl bg-white/10 p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
//         <div className="flex items-center gap-4">
//           <div className="w-14 h-14 rounded-full bg-azulapple flex items-center justify-center text-2xl font-bold text-white">
//             {user.name?.charAt(0).toUpperCase()}
//           </div>
//           <div className="flex flex-col">
//             <h1 className="text-2xl font-bold text-white">Mi Cuenta</h1>
//             <p className="text-amber-50/80 text-sm">{user.email}</p>
//           </div>
//         </div>

//         <hr className="border-amber-50/20" />

//         <Field label="Nombre" value={user.name} />
//         <Field label="Dirección" value={user.address ?? "No registrada"} />
//         <Field label="Teléfono" value={user.phone ?? "No registrado"} />

//         <hr className="border-amber-50/20" />

//         <div className="flex flex-col gap-2">
//           <h2 className="text-xl font-semibold text-white">
//             Historial de Compras
//           </h2>
//           <OrderList />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Field({ label, value }: { label: string; value: string }) {
//   return (
//     <div>
//       <p className="text-xs text-amber-50/70 uppercase tracking-wide">
//         {label}
//       </p>
//       <p className="text-amber-50 text-sm sm:text-base font-medium">{value}</p>
//     </div>
//   );
// }

"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import OrderList from "@/components/OrderList";

export default function DashboardPage() {
  const { dataUser, isLoadingUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoadingUser && !dataUser) {
      router.push("/login");
    }
  }, [dataUser, isLoadingUser, router]);

  if (isLoadingUser) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-white">
        <p className="text-black">Cargando tu sesión...</p>
      </div>
    );
  }

  if (!dataUser) {
    // ya se encargará el useEffect de redirigir
    return null;
  }

  const { user } = dataUser;

  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-white px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-6 border border-gray-200">
        {/* Avatar + nombre */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl font-bold">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-black">Mi Perfil</h1>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>

        <hr className="border-gray-300" />

        <Field label="Nombre" value={user.name} />
        <Field label="Dirección" value={user.address ?? "No registrada"} />
        <Field label="Teléfono" value={user.phone ?? "No registrado"} />

        <hr className="border-gray-300" />

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">
            Historial de Compras
          </h2>
          <OrderList />
        </div>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-gray-500 uppercase tracking-wide">{label}</p>
      <p className="text-black text-sm sm:text-base font-medium">{value}</p>
    </div>
  );
}
