# El Barrigon

El Barrigon es una aplicación web progresiva (PWA) desarrollada para facilitar la consulta de platillos y la realización de pedidos de comida. La aplicación permite seleccionar un platillo, registrar los datos del cliente y la dirección de entrega, y generar un código QR con la información del pedido.

**Tipo de aplicación:** Progressive Web App (PWA)  
**Materia:** Taller de Programacion Avanzada II 
**Carrera:** Ingenieria en Sistemas Computacionales
**Alumno:** Erika Alvarez Lopez
**Grupo:** 09ISC182
**Institución:** CUDEC  

## 1. Título del proyecto
**El Barrigon**
El Barrigon es una PWA orientada a la consulta de platillos y realización de pedidos de comida. Su objetivo es ofrecer una forma sencilla de seleccionar un platillo, registrar los datos del cliente y generar la información correspondiente al pedido.

## 2. Descripción del proyecto
El proyecto consiste en desarrollar una aplicación web para facilitar el proceso de realizar pedidos de comida.
La aplicación está dirigida a usuarios que desean consultar los platillos disponibles y realizar un pedido proporcionando su nombre y dirección de entrega.
Al finalizar el pedido, la aplicación genera un código QR que contiene información del platillo, del cliente y de la dirección de entrega.
El propósito principal es ofrecer una solución sencilla, accesible y adaptable a diferentes dispositivos mediante el uso de tecnologías web y características de una Progressive Web App.

## 3. Objetivos
### Objetivo general
Desarrollar una Progressive Web App que permita a los usuarios consultar platillos y realizar pedidos de comida de manera sencilla, generando un código QR con la información principal del pedido.
### Objetivos específicos
- Permitir la consulta de platillos disponibles.
- Facilitar la realización de pedidos.
- Registrar el nombre del cliente.
- Registrar la dirección de entrega.
- Almacenar la información relacionada con los pedidos.
- Generar un código QR con los datos del pedido.
- Implementar una interfaz sencilla y adaptable.
- Utilizar Firebase para la gestión de información.
- Implementar características propias de una PWA.

## 4. Características principales
La aplicación cuenta con las siguientes funcionalidades:
- **Inicio:** permite acceder a las principales funciones de la aplicación.
- **Consulta de platillos:** permite visualizar los platillos disponibles.
- **Realizar pedido:** permite seleccionar un platillo y registrar la información necesaria.
- **Datos del cliente:** permite ingresar el nombre del cliente.
- **Dirección de entrega:** permite registrar la dirección donde se entregará el pedido.
- **Finalización del pedido:** permite confirmar el pedido realizado.
- **Código QR:** genera un código QR con el nombre del platillo y nombre del cliente.
- **Acerca:** proporciona información sobre la aplicación.
- **Contacto:** muestra información para establecer contacto.
- **PWA:** permite utilizar características propias de una aplicación web progresiva.
- **Diseño responsivo:** permite visualizar la aplicación en diferentes dispositivos.

## 5. Tecnologías utilizadas
Para el desarrollo de UberEatsCUDEC se utilizaron las siguientes tecnologías:
- **HTML5:** utilizado para crear la estructura de las páginas.
- **CSS3:** utilizado para definir los estilos y diseño de la aplicación.
- **JavaScript:** utilizado para implementar la lógica y funcionalidades.
- **Materialize CSS:** utilizado para facilitar el diseño de la interfaz y componentes visuales.
- **Firebase:** utilizado para la gestión y almacenamiento de información.
- **QRCode.js:** utilizado para generar los códigos QR de los pedidos.
- **Service Worker:** utilizado para implementar funcionalidades de la PWA.
- **Web App Manifest:** utilizado para configurar la aplicación como PWA.
- **Visual Studio Code:** utilizado como entorno de desarrollo.

Las versiones utilizadas corresponden a las tecnologías y bibliotecas incluidas en los archivos del proyecto, como `materialize.min.css`, `materialize.min.js` y `qrcode.min.js`.

## 6. Estructura del proyecto
La estructura principal del proyecto está organizada de la siguiente manera:
```text
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
```

## 7. Evidencias 
A continuación se muestran las principales pantallas de la aplicación.
### Inicio
La pantalla de inicio permite al usuario acceder a la aplicación y consultar los platillos disponibles.
![Inicio](img/inicio.png)

### Registrar platillo
Esta pantalla permite consultar y gestionar los platillos disponibles en la aplicación.
![Registrar platillo](img/registrar-platillo.png)

### Realizar pedido
En esta pantalla el usuario selecciona el platillo e ingresa los datos necesarios para realizar el pedido.
![Realizar pedido](img/realizar-pedido.png)

### Pedido finalizado
Después de realizar el pedido, se muestra la información correspondiente y se genera un código QR que contiene el nombre del platillo, nombre del cliente y dirección de entrega.
![Pedido finalizado](img/pedido-finalizado.png)

### Acerca
Esta sección proporciona información sobre la aplicación y el proyecto.
![Acerca](img/acerca.png)

### Contacto
Esta sección proporciona información para establecer contacto.
![Contacto](img/contacto.png)

## 8. Base de datos
### Motor utilizado
La aplicación utiliza **Firebase** como motor para la gestión y almacenamiento de los datos.
### Información almacenada
La información utilizada por la aplicación incluye principalmente:
- Nombre del cliente.
- Nombre del platillo.
- Dirección de entrega.
- Información del pedido.
Los archivos `firebase.js` y `db.js` se encargan de la conexión y gestión de los datos.
La información del pedido también se utiliza para generar el código QR mostrado al finalizar el pedido.


## 9. Licencia
Este proyecto fue desarrollado con fines académicos como parte de la carrera ingenieria en sistemas, para la materia taller de programacion avanzada II, del grupo: 09ISC182 en CUDEC.

El proyecto fue desarrollado exclusivamente con fines educativos y académicos, por lo que no tiene fines comerciales.

**Alumno:** Erika Alvarez Lopez  
**Carrera:** Ingenieria en sistemas 
**Materia:** Taller de Programacion Avanzada II
**Grupo:** 09ISC182
**Institución:** CUDEC  
**Año:** 2026