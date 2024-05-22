# Conexion Rest Api

## Introduccíon

API o Application Programming Interface, que en español quiere decir Interfaz de Programación de Aplicaciones, es un conjunto de funciones y procedimientos que permite integrar sistemas, permitiendo que sus funcionalidades puedan ser reutilizadas por otras aplicaciones o software.

Para iniciar el proyecto ejecutar los siguientes comandos dentro de la carpeta del repositorio `../concepts/2. rest-api`

```bash
npm install
```
```bash
npm run dev
```

## Axios para realizar solicitudes HTTP

### Axios [Ejemplo](./src/apiComponent/index.jsx)

Axios es una popular librería de JavaScript que se utiliza para realizar solicitudes HTTP desde el navegador o desde Node.js. Es fácil de usar y soporta promesas, lo que facilita el manejo de respuestas asíncronas. Puedes utilizarlo tanto en el frontend como en el backend de tu aplicación web.


```javascript
// Importa la librería Axios
const axios = require('axios');

// URL de la API a la que deseas conectarte
const apiUrl = 'https://api.example.com/data';

// Realiza una solicitud GET a la API
axios.get(apiUrl)
  .then(response => {
    // Maneja la respuesta de la API
    console.log('Respuesta de la API:', response.data);
  })
  .catch(error => {
    // Maneja cualquier error que ocurra durante la solicitud
    console.error('Error al realizar la solicitud:', error);
  });
```