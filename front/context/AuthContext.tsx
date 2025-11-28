"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserSession } from "@/interfaces/usersession.interface";

// 1) Tipo de los datos del contexto

interface AuthContextProps {
  dataUser: IUserSession | null;
  setDataUser: (dataUser: IUserSession | null) => void;
  logout: () => void;
}

// 2) Contexto (valor real en tiempo de ejecución)
export const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
});

// 3) Props del provider
interface AuthProviderProps {
  children: React.ReactNode;
}

// 4) Provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<IUserSession | null>(null);

  // Guardar sesión en localStorage cuando cambia
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem("userSession", JSON.stringify(dataUser));
    }
  }, [dataUser]);

  // Leer sesión al montar
  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userdata = localStorage.getItem("userSession");
      if (userdata) {
        setDataUser(JSON.parse(userdata));
      }
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("userSession");
    setDataUser(null);
  };

  return (
    <AuthContext.Provider value={{ dataUser, setDataUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
