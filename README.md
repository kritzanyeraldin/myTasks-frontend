# Reto técnico de Softtek (frontend)

Este proyecto es una aplicación web construida con **React** y **Vite** como parte de un reto técnico para **Softtek**.

## Requisitos

Debe tener instalado [`Node`](https://nodejs.org/en/download/package-manager) a partir de la versión 20 en adelante.

El proyecto utiliza [`pnpm`](https://pnpm.io/es/) como manejador de paquetes por su gestión eficiente y rápida. Puede instalarlo con [`npm`](https://pnpm.io/es/installation#usando-pnpm) a través del siguiente comando.

```sh
npm install -g pnpm
```

## Instalación

Primero, debe clonar el repositorio y luego instalar las dependencias:

```sh
# con https
git clone https://github.com/kritzanyeraldin/softtek-challenge-frontend.git
# o con ssh
git clone git@github.com:kritzanyeraldin/softtek-challenge-frontend.git

cd softtek-challenge-frontend
pnpm install
```

También debe crear un archivo `.env` en la raíz del proyecto que contenga las siguientes variables de entorno:

```sh
# archivo .env
VITE_APP_API_URL=http://localhost:8000
```

**Nota**: Se deja el valor de las variables aquí por motivos prácticos, sin embargo es incorrecto.

## Ejecución

Para iniciar el servidor de desarrollo, ejecute:

```sh
pnpm dev

VITE v6.3.5  ready in 404 ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

Esto iniciará la aplicación en [http://localhost:5173](http://localhost:5173) y escuchará cambios en el proyecto de forma local.

## Scripts disponibles

- **pnpm dev**: Inicia el servidor de desarrollo.
- **pnpm build**: Crea un bundle del código para producción.
- **pnpm lint**: Ejecuta ESLint para verificar la calidad del código.
- **pnpm preview**: Inicia una vista previa del bundle para producción en local.
- **pnpm format**: Ejecuta Prettier para formatear el código acorde al 'code style'.
- **pnpm typecheck**: Ejecuta tsc para verificar errores con TypeScript.
- **pnpm prepare**: Ejecuta husky para generar los scripts default.

## Estructura del proyecto

```txt
📦To-Do
 ┣ 📂.husky                       # Scripts de husky revisar y formatear el código antes de hacer commit
 ┣ 📂src                          # Código fuente
 ┃ ┣ 📂api                        # Ficheros relacionados a llamadas a servicios
 ┃ ┃ ┣ 📜Task.adapters.ts         # Adaptadores para la entrada o salida de datos
 ┃ ┃ ┣ 📜Task.data.ts             # Llamada a endpoints del backend
 ┃ ┃ ┣ 📜Task.services.ts         # Servicios a usar en los componentes (con los datos adaptados)
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂assets                     # Contiene recursos estáticos como imágenes y fuentes
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📜CreateTaskForm.tsx       # Componente para crear una nueva tarea
 ┃ ┃ ┣ 📜TaskCard.tsx             # Componente para mostrar una tarea
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂config
 ┃ ┃ ┣ 📜api.ts                   # Configuración de axios
 ┃ ┃ ┣ 📜env.ts                   # Mapeo de las variables de entorno
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂hooks
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜useCreateTask.ts         # Hook reutilizable para crear una tarea
 ┃ ┃ ┣ 📜useDebounce.ts           # Hook reutilizable para crear un debounce de datos
 ┃ ┃ ┣ 📜useDeleteTask.ts         # Hook reutilizable para eliminar una tarea
 ┃ ┃ ┣ 📜useGetAllTasks.ts        # Hook reutilizable para obtener las tareas
 ┃ ┃ ┗ 📜useUpdateTask.ts         # Hook reutilizable para actualizar una tarea
 ┃ ┣ 📂schemas
 ┃ ┃ ┗ 📜task.schema.ts           # Esquemas para las tareas (crear, actualizar)
 ┃ ┣ 📂types
 ┃ ┃ ┣ 📜Task.dto.ts              # Tipos para la entrada o salida de datos
 ┃ ┃ ┣ 📜Task.type.ts             # Tipos usados en los componentes
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜App.tsx                    # Componente raíz de la aplicación
 ┃ ┣ 📜index.css                  # Archivo de estilos raíz de la aplicación
 ┃ ┗ 📜main.tsx                   # Punto de entrada de la aplicación
 ┣ 📜.env                         # Variables de entorno
 ┣ 📜.env.example                 # Ejemplo de estructura de variables de entorno
 ┣ 📜.gitignore                   # Archivo para ignorar carpetas o ficheros con git
 ┣ 📜README.md                    # Documentación del proyecto
 ┣ 📜eslint.config.js             # Configuración de eslint
 ┣ 📜index.html                   # Archivo HTML principal
 ┣ 📜package.json                 # Información del proyecto y scripts
 ┗ 📜vite.config.ts               # Configuración de Vite
```

## Tecnologías utilizadas

- [**axios**](https://github.com/axios/axios?tab=readme-ov-file#installing): Cliente HTTP basado en promesas para realizar peticiones a la API desde el frontend.
- [**tailwindcss**](https://tailwindcss.com/docs/installation/using-vite): Framework de utilidades CSS para construir interfaces de usuario personalizables y responsivas.
- [**zod**](https://zod.dev/): Librería de validación y parsing de esquemas para asegurar que los datos cumplan con la forma esperada antes de ser utilizados o enviados.
- [**clsx**](https://github.com/lukeed/clsx#readme): Utilidad para combinar condicionalmente clases CSS en componentes, útil para manejar estilos dinámicos.

## Dependencias de desarrollo utilizadas

El proyecto utiliza varias herramientas para mantener una alta calidad de código y mejorar el flujo de desarrollo:

- [**eslint**](https://www.npmjs.com/package/eslint): Para asegurar consistencia en el estilo del código y detectar posibles errores.
- [**prettier**](https://www.npmjs.com/package/prettier): Formateador de código automático para mantener un estilo consistente.
- [**husky**](https://typicode.github.io/husky/): Para ejecutar scripts antes de los commits, asegurando que el código esté limpio.
- [**lint-staged**](https://www.npmjs.com/package/lint-staged): Ejecuta linters en los archivos que han sido 'stageados' para commit.
- [**typescript**](https://www.npmjs.com/package/typescript): Superconjunto de JavaScript que añade tipado estático.
- [**vite**](https://www.npmjs.com/package/vite): Bundler ultrarrápido para aplicaciones web modernas.
- [**clsx**](https://www.npmjs.com/package/clsx): Utilidad para manejar clases condicionales en React de manera eficiente.
