# El Barrigon

El Barrigon es una aplicación web progresiva (PWA) desarrollada para facilitar la consulta de platillos y la realización de pedidos de comida.

**Tipo de aplicación:** Progressive Web App (PWA)  
**Materia:** Taller de Programación Avanzada II  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Alumno:** Erika Alvarez Lopez  
**Grupo:** 09ISC182  
**Institución:** CUDEC  

## 1. Título del proyecto
### El Barrigon
El Barrigon es una Progressive Web App (PWA) orientada a la consulta de platillos y realización de pedidos de comida. La aplicación permite seleccionar un platillo, registrar los datos del cliente y generar un código QR con información del pedido.

## 2. Descripción del proyecto
El Barrigon es una aplicación web desarrollada para facilitar el proceso de consulta y realización de pedidos de comida.
La aplicación permite a los usuarios consultar los platillos disponibles, seleccionar un platillo y registrar los datos necesarios para realizar un pedido, como el nombre del cliente y la dirección de entrega.
El problema que busca resolver es facilitar y organizar el proceso de realizar pedidos de comida mediante una aplicación web accesible desde diferentes dispositivos.
Los principales usuarios de la aplicación son clientes que desean consultar platillos y realizar pedidos de comida de una manera sencilla y rápida.
La información de los platillos y pedidos se almacena utilizando Firebase Cloud Firestore. Al finalizar un pedido, la aplicación genera un código QR con información relacionada con el platillo seleccionado y el cliente.


## 3. Objetivos

### Objetivo general
Desarrollar una Progressive Web App que permita a los usuarios consultar platillos y realizar pedidos de comida de manera sencilla, almacenando la información del pedido y generando un código QR con información principal del mismo.

### Objetivos específicos
- Permitir la consulta de los platillos disponibles.
- Mostrar información de los platillos, como nombre, ingredientes, precio e imagen.
- Permitir al usuario seleccionar un platillo.
- Registrar el nombre del cliente.
- Registrar la dirección de entrega.
- Almacenar la información de los platillos.
- Almacenar la información de los pedidos realizados.
- Generar un código QR con información del pedido.
- Implementar una interfaz sencilla y adaptable.
- Utilizar Firebase Cloud Firestore para almacenar y gestionar información.
- Implementar características propias de una Progressive Web App.

## 4. Características principales
La aplicación cuenta con las siguientes funcionalidades:
- **Inicio:** permite acceder a las principales funciones de la aplicación.
- **Consulta de platillos:** permite visualizar los platillos disponibles.
- **Información de platillos:** muestra el nombre, ingredientes, precio e imagen de cada platillo.
- **Realizar pedido:** permite seleccionar un platillo y registrar la información necesaria.
- **Datos del cliente:** permite ingresar el nombre del cliente.
- **Dirección de entrega:** permite registrar la dirección donde se entregará el pedido.
- **Almacenamiento de información:** guarda los datos de los platillos y pedidos en Firebase Cloud Firestore.
- **Generación de código QR:** genera un código QR con información relacionada con el pedido.
- **Acerca:** proporciona información sobre la aplicación.
- **Contacto:** proporciona información de contacto y soporte.
- **PWA:** incorpora características de una aplicación web progresiva.
- **Diseño responsivo:** permite visualizar la aplicación en diferentes dispositivos.


## 5. Tecnologías utilizadas
Para el desarrollo de El Barrigon se utilizaron las siguientes tecnologías:
- **HTML5:** utilizado para crear la estructura de las páginas.
- **CSS3:** utilizado para definir los estilos y diseño de la aplicación.
- **JavaScript:** utilizado para implementar la lógica y funcionalidades de la aplicación.
- **Materialize CSS:** utilizado para el diseño de la interfaz y componentes visuales.
- **Firebase:** utilizado para la conexión y gestión de los datos.
- **Cloud Firestore:** utilizado como base de datos para almacenar platillos y pedidos.
- **QRCode.js:** utilizado para generar los códigos QR.
- **Service Worker:** utilizado para implementar funcionalidades de la PWA.
- **Web App Manifest:** utilizado para configurar la aplicación como PWA.
- **Visual Studio Code:** utilizado como entorno de desarrollo.

Las bibliotecas utilizadas se encuentran dentro del proyecto, incluyendo:
- `materialize.min.css`
- `materialize.min.js`
- `qrcode.min.js`

## 6. Estructura del proyecto
La estructura principal del proyecto está organizada de la siguiente manera:

UBEREATSCUDEC/
│
├── css/
│   ├── materialize.min.css
│   └── styles.css
│
├── iconos/
│
├── img/
│   └── dish.png
│
├── js/
│   ├── db.js
│   ├── firebase.js
│   ├── index.js
│   ├── materialize.min.js
│   ├── pedidos.js
│   └── qrcode.min.js
│
├── pages/
│   ├── about.html
│   ├── contact.html
│   └── pedidos.html
│
├── index.html
├── manifest.json
├── sw.js
└── README.md


## 7. Evidencias

A continuación se presentan las principales evidencias de funcionamiento de la aplicación.

### Inicio

Evidencia de la pantalla principal de la aplicación, donde el usuario puede acceder a las funciones disponibles.

### Registrar platillo

Evidencia de la sección utilizada para consultar y gestionar la información de los platillos disponibles.

### Realizar pedido

Evidencia de la pantalla que permite seleccionar un platillo e ingresar los datos necesarios para realizar el pedido.

### Pedido finalizado

Evidencia de la pantalla mostrada después de realizar un pedido, incluyendo la generación del código QR correspondiente.

### Acerca

Evidencia de la sección que proporciona información general sobre la aplicación.

### Contacto

Evidencia de la sección que proporciona información de contacto y soporte.


## 8. Base de datos

### Motor utilizado

La aplicación utiliza **Firebase Cloud Firestore** como motor de base de datos para almacenar y gestionar la información de los platillos y pedidos.

### Colecciones utilizadas

La base de datos cuenta con dos colecciones principales:

#### Colección `platillos`

Almacena la información de los platillos disponibles.

| Campo | Descripción |
|---|---|
| `foto` | Imagen del platillo |
| `ingredientes` | Ingredientes del platillo |
| `nombre` | Nombre del platillo |
| `precio` | Precio del platillo |

#### Colección `pedidos`

Almacena la información de los pedidos realizados.

| Campo | Descripción |
|---|---|
| `nombre` | Nombre del cliente |
| `direccion` | Dirección de entrega |
| `platillo` | Identificador del platillo seleccionado |

La información almacenada permite mostrar los platillos disponibles, registrar los pedidos realizados y generar el código QR correspondiente.


## 9. Licencia
### MIT License
Este proyecto utiliza la **Licencia MIT**.

Este proyecto fue desarrollado exclusivamente con fines académicos como parte de la carrera **Ingeniería en Sistemas Computacionales**, para la materia **Taller de Programación Avanzada II**, del **grupo 09ISC182** en **CUDEC**.

**Alumno:** Erika Alvarez Lopez  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Materia:** Taller de Programación Avanzada II  
**Grupo:** 09ISC182  
**Institución:** CUDEC  
**Año:** 2026