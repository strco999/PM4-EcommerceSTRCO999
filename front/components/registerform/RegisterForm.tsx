"use client";
import { useFormik } from "formik";
import {
  registerInitialValues,
  registerValidationSchema,
} from "./registerSchema";

function RegisterForm() {
  const formik = useFormik({
    initialValues: registerInitialValues,
    validationSchema: registerValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-amber-600 w-full min-h-[500px] flex justify-center items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full max-w-md items-stretch gap-6 bg-white/20 p-6 rounded-2xl"
      >
        {/* Email */}
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            className="bg-amber-50 w-full px-2 py-1 rounded"
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-600 text-sm">{formik.errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col">
          <label htmlFor="password">Contraseña</label>
          <input
            className="bg-amber-50 w-full px-2 py-1 rounded"
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && (
            <p className="text-red-600 text-sm">{formik.errors.password}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div className="flex flex-col">
          <label htmlFor="confirmPassword">Confirmar Contraseña</label>
          <input
            className="bg-amber-50 w-full px-2 py-1 rounded"
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <p className="text-red-600 text-sm">
              {formik.errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Nombre */}
        <div className="flex flex-col">
          <label htmlFor="name">Nombre</label>
          <input
            className="bg-amber-50 w-full px-2 py-1 rounded"
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Dirección */}
        <div className="flex flex-col">
          <label htmlFor="address">Dirección</label>
          <input
            className="bg-amber-50 w-full px-2 py-1 rounded"
            id="address"
            name="address"
            type="text"
            value={formik.values.address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        {/* Teléfono */}
        <div className="flex flex-col">
          <label htmlFor="phone">Teléfono</label>
          <input
            className="bg-amber-50 w-full px-2 py-1 rounded"
            id="phone"
            name="phone"
            type="text"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>

        <button
          type="submit"
          className="bg-azulapple w-[200px] self-center text-cyan-50 border cursor-pointer rounded-2xl py-2"
        >
          Registrate
        </button>
      </form>
    </div>
  );
}

export default RegisterForm;
