"use client";
import { useAuth } from "@/context/AuthContext";
import { getAllOrders } from "@/services/orders.services";
import { useEffect, useState } from "react";
import { Order } from "@/interfaces/orders.interface";

function OrderList() {
  const { dataUser } = useAuth();

  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!dataUser?.token) {
        setOrders([]);
        return;
      }
      setIsLoading(true);
      setError(null);

      try {
        const ordersResponse = await getAllOrders(dataUser?.token);
        setOrders(ordersResponse);
      } catch (error) {
        console.error("Este es el error:", error);
        setError(`Ups! ${error}`);
        setOrders([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchOrders();
  }, [dataUser?.token]);

  return (
    <div>
      <h2>Mis Ordenes🧾</h2>
      {error && (
        <div>
          <p>{error}</p>
          <button onClick={() => window.location.reload()}>
            Recargas Pagina
          </button>
        </div>
      )}

      {isLoading ? (
        <div>
          <p>Estamos Cargando tus Ordenes...</p>
        </div>
      ) : orders && orders.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-center">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Productos</th>
                <th className="px-4 py-2">Estado</th>
                <th className="px-4 py-2">Fecha</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="text-center">
                  <td>{order.id}</td>
                  <td>{order.products?.length || 0} productos</td>
                  <td className="px-4 py-3">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {order.status || "Procesada"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    {new Date(order.date || Date.now()).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <p>No tienes ordenes aun</p>
        </div>
      )}
    </div>
  );
}

export default OrderList;
