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


##dificultados 

El problema no fue de tu código, fue del entorno de red. Supabase, en su capa gratuita, normalmente asigna una dirección IPv6 para las conexiones directas a la base de datos (PostgreSQL).

En Linux (sobre todo en entornos de nube o contenedores como Vercel, Docker, WSL, etc.), si tu sistema no tiene soporte IPv6 habilitado o no puede enrutar tráfico a direcciones IPv6, entonces no puede resolver la dirección de la base de datos y la conexión falla.

A esto se suma que PostgreSQL (como el de Supabase) utiliza un puerto específico (5432) que a veces está bloqueado en redes corporativas o VPS compartidos.

