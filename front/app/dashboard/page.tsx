"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
  const { dataUser } = useAuth();
  const router = useRouter();

  // Proteger la ruta: si no hay usuario logueado, manda a /login
  useEffect(() => {
    if (!dataUser) {
      router.push("/login");
    }
  }, [dataUser, router]);

  if (!dataUser) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-negroapple">
        <p className="text-amber-50">Redirigiendo...</p>
      </div>
    );
  }

  const { user } = dataUser; // asumiendo dataUser.user.{email,name,address,phone}

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-negroapple px-4">
      <section className="w-full max-w-lg bg-white/10 p-6 sm:p-8 rounded-2xl flex flex-col gap-6">
        {/* Header perfil */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-azulapple flex items-center justify-center text-2xl font-bold text-amber-50">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold text-amber-50">
              Mi Perfil
            </h1>
            <p className="text-amber-50/80 text-sm">{user.email}</p>
          </div>
        </div>

        <hr className="border-amber-50/20" />

        {/* Datos del usuario */}
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-amber-50/70 uppercase tracking-wide">
              Nombre
            </p>
            <p className="text-amber-50 text-sm sm:text-base font-medium">
              {user.name}
            </p>
          </div>

          <div>
            <p className="text-xs text-amber-50/70 uppercase tracking-wide">
              Dirección
            </p>
            <p className="text-amber-50 text-sm sm:text-base font-medium">
              {user.address ?? "No registrada"}
            </p>
          </div>

          <div>
            <p className="text-xs text-amber-50/70 uppercase tracking-wide">
              Teléfono
            </p>
            <p className="text-amber-50 text-sm sm:text-base font-medium">
              {user.phone ?? "No registrado"}
            </p>
          </div>
        </div>

        <p className="text-xs text-amber-50/60 text-center mt-2">
          Próximamente podrás editar tus datos desde este panel.
        </p>
      </section>
    </div>
  );
}
