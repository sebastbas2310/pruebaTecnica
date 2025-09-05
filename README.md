## Prueba Técnica para Desarrollador Fullstack

# 🚀 Aplicación Fullstack

Este proyecto es una aplicación web construida con **Next.js**, **Prisma** y **Supabase**.

---

## 🖥️ Cómo ejecutar el proyecto

Sigue estos pasos para correr la aplicación en tu entorno local:

### 1. Clonar el repositorio

### 2. Descargar dependencias 

ejecuta el comando npm i / pnpm i

### 3. correr

npm run dev / pnpm run dev

### 4. problemas

  al no poderse conectar a la base de datos el create user del inicio no esta funcional asi que para ingresar del todo a la pagina pon en la ulr /layout ya en la pagina con logica de programacion hice la simulacion del funcionamiento pero si desean ver la logica que habia detras de la api y sus crud pueden ver el codigo en sustespectivas carpetas app/api apesar de que no funcionan por no tener coneccion con base de datos la logica ya esta implementada

###3dificultados 

El problema no fue de tu código, fue del entorno de red. Supabase, en su capa gratuita, normalmente asigna una dirección IPv6 para las conexiones directas a la base de datos (PostgreSQL).

En Linux (sobre todo en entornos de nube o contenedores como Vercel, Docker, WSL, etc.), si tu sistema no tiene soporte IPv6 habilitado o no puede enrutar tráfico a direcciones IPv6, entonces no puede resolver la dirección de la base de datos y la conexión falla.

A esto se suma que PostgreSQL (como el de Supabase) utiliza un puerto específico (5432) que a veces está bloqueado en redes corporativas o VPS compartidos.

