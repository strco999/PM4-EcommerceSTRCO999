"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserSession } from "@/interfaces/usersession.interface";

// 1) Tipo de los datos del contexto

interface AuthContextProps {
  dataUser: IUserSession | null;
  setDataUser: (dataUser: IUserSession | null) => void;
  logout: () => void;
  isLoadingUser: boolean;
}

const AUTH_KEY = "userSession";

// 2) Contexto (valor real en tiempo de ejecución)
export const AuthContext = createContext<AuthContextProps>({
  dataUser: null,
  setDataUser: () => {},
  logout: () => {},
  isLoadingUser: true,
});

// 3) Props del provider
interface AuthProviderProps {
  children: React.ReactNode;
}

// 4) Provider
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [dataUser, setDataUser] = useState<IUserSession | null>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(true);

  // Guardar sesión en localStorage cuando cambia
  useEffect(() => {
    try {
      const userdata = localStorage.getItem(AUTH_KEY);
      if (userdata) {
        const parsed = JSON.parse(userdata) as IUserSession;
        setDataUser(parsed);
      }
    } catch (error) {
      console.error("Error leyendo userSession de localStorage:", error);
      setDataUser(null);
    } finally {
      setIsLoadingUser(false);
    }
  }, []);

  // Guardar / limpiar sesión cuando cambia dataUser
  useEffect(() => {
    if (dataUser) {
      localStorage.setItem(AUTH_KEY, JSON.stringify(dataUser));
    } else {
      localStorage.removeItem(AUTH_KEY);
    }
  }, [dataUser]);

  const logout = () => {
    setDataUser(null);
    localStorage.removeItem(AUTH_KEY);
  };

  return (
    <AuthContext.Provider
      value={{ dataUser, setDataUser, logout, isLoadingUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// 6) Hook de acceso
export const useAuth = () => useContext(AuthContext);
