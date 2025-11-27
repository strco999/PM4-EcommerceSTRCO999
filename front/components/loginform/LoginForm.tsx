// "use client";
// import { useFormik } from "formik";
// import { loginInitialValues, loginValidationSchema } from "./loginSchema";

// function LoginForm() {
//   //1 Valores iniciales
//   //2 Esquema de validacion => se construye con YUP
//   //3 onSubmit para saber que hace el formulario al pulsar el boton

//   const formik = useFormik({
//     initialValues: loginInitialValues,
//     validationSchema: loginValidationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//     },
//   });

//   return (
//     <div className="bg-gray-500 w-screen h-[500px] flex justify-center items-center">
//       <form
//         className="flex flex-col w-[1500px] gap-8"
//         onSubmit={formik.handleSubmit}
//       >
//         <div className="flex flex-col">
//           <label htmlFor="email">Email</label>
//           <input
//             className="bg-amber-50 w-100"
//             id="email"
//             name="email"
//             type="email"
//             value={formik.values.email}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.email && (
//             <p className="text-amber-50">{formik.errors.email}</p>
//           )}
//         </div>
//         <div className="flex flex-col">
//           <label htmlFor="">Contraseña</label>
//           <input
//             className="bg-amber-50 w-100"
//             id="password"
//             name="password"
//             type="password"
//             value={formik.values.password}
//             onChange={formik.handleChange}
//           />
//           {formik.errors.password && (
//             <p className="text-amber-50">{formik.errors.password}</p>
//           )}
//         </div>
//         <button
//           type="submit"
//           className="bg-azulapple w-[150] text-cyan-50 border-black cursor-pointer rounded-2xl
//         "
//         >
//           iniciar sesion
//         </button>
//       </form>
//     </div>
//   );
// }

// export default LoginForm;

"use client";
import { useFormik } from "formik";
import { loginInitialValues, loginValidationSchema } from "./loginSchema";

function LoginForm() {
  const formik = useFormik({
    initialValues: loginInitialValues,
    validationSchema: loginValidationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="w-full h-full flex items-center justify-center bg-negroapple">
      <form
        className="w-full max-w-md bg-white/90 rounded-xl shadow-lg p-6 sm:p-8 flex flex-col gap-6"
        onSubmit={formik.handleSubmit}
      >
        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="mb-1 text-sm font-medium text-gray-800"
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
            className="mb-1 text-sm font-medium text-gray-800"
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

