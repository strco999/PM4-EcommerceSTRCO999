"use client";
import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./loginSchema";

function LoginForm() {
  //1 Valores iniciales
  //2 Esquema de validacion => se construye con YUP
  //3 onSubmit para saber que hace el formulario al pulsar el boton

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-amber-600 w-screen h-[500px]">
      <form
        className="flex flex-col w-[1500px] items-center gap-8"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="bg-amber-50 w-100"
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <p className="text-amber-50">{formik.errors.email}</p>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Contraseña</label>
          <input
            className="bg-amber-50 w-100"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <p className="text-amber-50">{formik.errors.password}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-azulapple w-[200] text-cyan-50 border cursor-pointer rounded-2xl
        "
        >
          iniciar sesion
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
