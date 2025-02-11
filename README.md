# react-client-side-seed

> Se necesita una versión **>=22** de [Node.js](https://nodejs.org/)

## ¿Qué incluye?

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Zustand](https://zustand.docs.pmnd.rs/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React-router](https://reactrouter.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Biome](https://biomejs.dev/)

## Instalación

Para instalar las dependencias, ejecutá el siguiente comando:

```bash
npm install
```

## Scripts Disponibles

### `dev`

```bash
# Node.js task runner
node --run dev

# NPM runner
npm run dev
```

Inicia el servidor de desarrollo de Webpack. La URL que se utiliza es [http://localhost:5000](http://localhost:5000).

> Si cambiaste el puerto en los `.env`, la url cambiará.

### `build`

```bash
# Node.js task runner
node --run build

# NPM runner
npm run build
```

Compila la aplicación con Webpack para producción y genera la carpeta `dist` con los archivos compilados.

### `prod`

```bash
# Node.js task runner
node --run prod

# NPM runner
npm run prod
```

Inicia la web app en modo producción, utilizando los archivos compilados de la carpeta `dist`.

> Anteriormente recordá ejecutar el comando `build` antes de `prod`.

### `lint`

```bash
# Node.js task runner
node --run lint

# NPM runner
npm run lint
```

Ejecuta el linter de TypeScript para verificar errores de tipo y formatea el código utilizando Biome.
