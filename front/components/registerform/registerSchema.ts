import * as Yup from "yup";

// 1- Defino la interfaz
export interface IRegisterFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  address: string;
  phone: string;
}
//2- Definimos los valores iniciales de mi formulario de registro .

export const registerInitialValues: IRegisterFormValues = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};

// 3- Construimos el esquema de validacion
export const registerValidationSchema = Yup.object({
  email: Yup.string()
    .email("Email invalido.")
    .required("Campo Email Requerido."),
  password: Yup.string()
    .min(6, "Minimo 6 Caracteres")
    .required("Campo Requerido."),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password")], "Las 2 contraseñas deben ser iguales.")
    .required("Campo Requerido."),
  name: Yup.string().required("Este campo es obligatorio"),
  address: Yup.string().required("Este campo es obligatorio"),
  phone: Yup.string()
    .matches(
      /^(\+57\s?)?(3\d{2}|60[1-8])\d{7}$/,
      "Ingresa un número de teléfono colombiano válido")
    .required("El teléfono es obligatorio"),
});
