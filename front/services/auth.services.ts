import { ILoginFormValues } from "@/components/loginform/loginSchema";
import { IRegisterFormValues } from "@/components/registerform/registerSchema";
import { showToast } from "nextjs-toast-notify";


const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (userData: IRegisterFormValues) => {
  try {
    const responseRegister = await fetch(`${APIURL}/users/register`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (responseRegister.ok) {
      return responseRegister.json();
    } else {
      // alert("Registro Fallido❌");
      showToast.error("¡Registro Fallido!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "popUp",
        icon: "",
        sound: true,
      });
      throw new Error("Registro Fallido");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};

export const loginUser = async (userData: ILoginFormValues) => {
  try {
    const responseRegister = await fetch(`${APIURL}/users/login`, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (responseRegister.ok) {
      return responseRegister.json();
    } else {
      showToast.error("¡Datos incorrectos!", {
        duration: 4000,
        progress: true,
        position: "top-center",
        transition: "popUp",
        icon: "",
        sound: true,
      });
      throw new Error("Logueo Fallido");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
