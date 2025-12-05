import * as Yup from "yup";

// 1- Defino la interfaz
export interface ILoginFormValues {
  email: string;
  password: string;
}
//2- Definimos los valores iniciales de mi formulario.

export const loginInitialValues: ILoginFormValues = {
  email: "",
  password: "",
};

// 3- Construimos el esquema de validacion
export const loginValidationSchema = Yup.object({
  email: Yup.string()
      .email("Email invalido.")
      .matches(/\.com$/i, "El email debe terminar en .com")
      .required("Este campo es obligatorio"),
  password: Yup.string()
    .min(6, "Minimo 6 Caracteres")
    .required("Este campo es obligatorio"),
});
