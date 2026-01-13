// "use client";

// import { useAuth } from "@/context/AuthContext";

// function Perfil() {

//     const { dataUser } = useAuth();

//     return (
//       <div>
//         <div>{dataUser?.user.name}</div>
//         <div>{dataUser?.user.email}</div>
//         <div>{dataUser?.user.orders.length}</div>
//       </div>
//     );
// }

// export default Perfil;


"use client"

import { useAuth } from "@/context/AuthContext"


function Perfil() {

  const { dataUser } = useAuth();

  return (
    <div>
      <div>{dataUser?.user.name}</div>
    </div>
  )
}

export default Perfil