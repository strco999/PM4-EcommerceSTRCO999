"use client";
import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./loginSchema";
import { loginUser } from "@/services/auth.services";
import { useAuth } from "@/context/AuthContext";

function LoginForm() {
  const { setDataUser } = useAuth();

  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: async (values, { resetForm }) => {
      const responseLogin = await loginUser(values);
      setDataUser(responseLogin); // ✅
      alert("Ingreso Exitoso");
      resetForm();
    },
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-negroapple">
      <form
        className=" bg-white/10 w-full max-w-md rounded-xl shadow-lg p-6 sm:p-8 flex flex-col gap-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-amber-50"
          >
            Email
          </label>
          <input
            className="bg-amber-50 w-full px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-azulapple"
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && (
            <p className="text-red-600 text-sm mt-1">{formik.errors.email}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="mb-1 text-sm font-medium text-amber-50"
          >
            Contraseña
          </label>
          <input
            className="bg-amber-50 w-full px-3 py-2 rounded-md outline-none focus:ring-2 focus:ring-azulapple"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && (
            <p className="text-red-600 text-sm mt-1">
              {formik.errors.password}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-azulapple text-cyan-50 font-semibold border border-black cursor-pointer rounded-2xl px-4 py-2 mt-2 w-full sm:w-auto self-center hover:bg-azulapple/90 transition"
        >
          iniciar sesión
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
