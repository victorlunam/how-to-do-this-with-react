# Almacenamiento en el Navegador

## Introducción

El almacenamiento web es una forma de almacenar datos en el navegador del usuario.

A diferencia de las cookies, el almacenamiento web permite almacenar una cantidad mucho mayor de datos y no se envía automáticamente con cada solicitud HTTP

Para iniciar el proyecto ejecutar los siguientes comandos

```bash
npm install
```
```bash
npm run dev
```

## Tipos de almacenamiento web - [Ejemplo](./src/App.jsx)

### LocalStorage

El almacenamiento local (`localStorage`) permite almacenar datos en el navegador de forma persistente. Los datos almacenados en `localStorage` no caducan y no se eliminan automáticamente.

```javascript
// Guardar un valor en localStorage
localStorage.setItem('nombre', 'valor');

// Obtener un valor de localStorage
let valor = localStorage.getItem('nombre');

// Eliminar un valor de localStorage
localStorage.removeItem('nombre');

// Eliminar todos los valores de localStorage
localStorage.clear();
```

### SessionStorage

El almacenamiento de sesión (`sessionStorage`) permite almacenar datos en el navegador de forma temporal. Los datos almacenados en `sessionStorage` se eliminan automáticamente cuando se cierra la pestaña o el navegador.

```javascript
// Guardar un valor en sessionStorage
sessionStorage.setItem('nombre', 'valor');

// Obtener un valor de sessionStorage
let valor = sessionStorage.getItem('nombre');

// Eliminar un valor de sessionStorage
sessionStorage.removeItem('nombre');

// Eliminar todos los valores de sessionStorage
sessionStorage.clear();
```