# PM4 Ecommerce — Full Stack (Monorepo)

Monorepo con **Front (Next.js)** y **Back (Express + TypeORM)** para una app e-commerce.

## 🚀 Repositorio
- Repo: https://github.com/strco999/PM4-EcommerceSTRCO999

## 🧱 Estructura
- `front/` → FrontEnd (Next.js)
- `back/` → BackEnd (Express + TypeORM)

---

## 🛠 Tech Stack

### FrontEnd
- Next.js (App) + React
- TypeScript
- Tailwind CSS
- Formik + Yup

### BackEnd
- Node.js + Express
- TypeORM + PostgreSQL
- JWT Auth + Bcrypt
- Swagger (docs)

---

## ✅ Requisitos
- Node.js (recomendado: 18+ / 20+)
- PostgreSQL (si el back usa DB local)

---

## ⚙️ Setup

### 1) Clonar
```bash
git clone https://github.com/strco999/PM4-EcommerceSTRCO999.git
cd PM4-EcommerceSTRCO999

▶️ Ejecutar el BackEnd
cd back
npm install
npm run start
Variables de entorno (Back)

Crea un archivo back/.env (nombres típicos; ajusta según tu código):

PORT=3001
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=tu_password
DATABASE_NAME=pm4_ecommerce
JWT_SECRET=tu_secret

Si tu código usa otros nombres exactos, cámbialos por los que tengas en back/src.

Swagger

Cuando el server esté arriba, abre:

http://localhost:3001/api-docs (ruta típica de swagger)

▶️ Ejecutar el FrontEnd
cd front
npm install
npm run dev
Variables de entorno (Front)

Crea front/.env.local:

NEXT_PUBLIC_API_BASE_URL=http://localhost:3001

Luego abre:

http://localhost:3000

📌 Scripts útiles
Front (front/)

npm run dev

npm run build

npm run start

npm run lint

Back (back/)

npm run start

📫 Contacto

GitHub: https://github.com/strco999

LinkedIn: https://www.linkedin.com/in/nicolasgsanchezdev/

Email: strco999@gmail.com▶️ Ejecutar el BackEnd
cd back
npm install
npm run start
Variables de entorno (Back)

Crea un archivo back/.env (nombres típicos; ajusta según tu código):

PORT=3001
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=tu_password
DATABASE_NAME=pm4_ecommerce
JWT_SECRET=tu_secret

Si tu código usa otros nombres exactos, cámbialos por los que tengas en back/src.

Swagger

Cuando el server esté arriba, abre:

http://localhost:3001/api-docs (ruta típica de swagger)

▶️ Ejecutar el FrontEnd
cd front
npm install
npm run dev
Variables de entorno (Front)

Crea front/.env.local:

NEXT_PUBLIC_API_BASE_URL=http://localhost:3001

Luego abre:

http://localhost:3000

📌 Scripts útiles
Front (front/)

npm run dev

npm run build

npm run start

npm run lint

Back (back/)

npm run start

📫 Contacto

GitHub: https://github.com/strco999

LinkedIn: https://www.linkedin.com/in/nicolasgsanchezdev/

Email: strco999@gmail.com
