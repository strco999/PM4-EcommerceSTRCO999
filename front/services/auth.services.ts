import { ILoginFormValues } from "@/components/loginform/loginSchema";
import { IRegisterFormValues } from "@/components/registerform/registerSchema";

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
      alert("Registro Fallido❌");
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
      alert("Logueo Fallido❌");
      throw new Error("Logueo Fallido");
    }
  } catch (error) {
    throw new Error(error as string);
  }
};
