"use client";

import { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import OrderList from "@/components/OrderList";

export default function DashboardPage() {
  const { dataUser, isLoadingUser } = useAuth();

  useEffect(() => {
    if (!isLoadingUser && !dataUser) {
      redirect("/");
    }
  }, [dataUser, isLoadingUser]);

  if (isLoadingUser) {
    return (
      <div className="w-full min-h-screen flex justify-center items-center bg-white">
        <p className="text-black">Cargando tu sesión...</p>
      </div>
    );
  }

  if (!dataUser) {
    return null;
  }

  const { user } = dataUser;

  return (
    <div className="w-full min-h-screen flex justify-center items-start bg-white px-4 py-10">
      <div className="w-full max-w-3xl bg-white p-6 sm:p-8 rounded-xl shadow-lg flex flex-col gap-6 border border-gray-200">
        <div className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-black">Mi Perfil 📧</h1>
            <p className="text-gray-600 text-sm">{user.email}</p>
          </div>
        </div>

        <hr className="border-gray-300" />

        <Field label="Nombre" value={user.name} />
        <Field label="Dirección📍" value={user.address ?? "No registrada"} />
        <Field label="Teléfono☎️" value={user.phone ?? "No registrado"} />

        <hr className="border-gray-300" />

        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-black">
            Historial de Compras 🛍️
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
