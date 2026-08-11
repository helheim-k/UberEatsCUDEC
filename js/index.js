let contenido = "";

document.addEventListener('DOMContentLoaded', function () {
    // nav menu
    const menus = document.querySelectorAll('.side-menu');
    M.Sidenav.init(menus, { edge: 'right' });

    // add recipe form
    const forms = document.querySelectorAll('.side-form');
    M.Sidenav.init(forms, { edge: 'left' });
});

function mostrarPlatillo(platillo, id) {
    let fotoPlatillo;

    if (platillo.foto) {
        fotoPlatillo = `<img src="${platillo.foto}" alt="Foto del platillo">`;
    } else {
        fotoPlatillo = `<img src="img/no-image.png" alt="No hay foto">`;
    }

    let contenido = `
    <div class="card-panel recipe white" id="${id}" data-id="${id}">

        <div class="recipe-image">
            ${fotoPlatillo}
        </div>

        <div class="recipe-details">

            <div class="recipe-title">
                ${platillo.nombre}
            </div>

            <div class="recipe-ingredients">
                Ingredientes: ${platillo.ingredientes}
            </div>

            <div class="recipe-price">
                $${platillo.precio}
            </div>

        </div>

        <div class="recipe-delete">
            <i class="material-icons" data-id="${id}">
                delete_outline
            </i>
        </div>

    </div>
    `;

    document.querySelector('.recipes').innerHTML += contenido;
}



function actualizarPlatillo(platillo, id) {
    const tarjeta = document.getElementById(id);

    if (!tarjeta) return;

    tarjeta.querySelector('.recipe-title').textContent = platillo.nombre;
    tarjeta.querySelector('.recipe-ingredients').textContent =
        `Ingredientes: ${platillo.ingredientes}`;
    tarjeta.querySelector('.recipe-price').textContent =
        `$${platillo.precio}`;
}

const borrarPlatillo = (id) => {
    const platillo = document.querySelector(`.recipe[data-id="${id}"]`);

    if (platillo) {
        platillo.remove();
    }
};

let streaming = false;
const width = 320;
let height = 0;
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const foto = document.getElementById('foto');
const btnCamara = document.getElementById('btnCamara');
const btnFoto = document.getElementById('btnFoto');

let stream = null;


// ABRIR CÁMARA
btnCamara.addEventListener('click', function () {
    navigator.mediaDevices
        .getUserMedia({ 
            video:{
                facingMode: {
                    ideal: "environment"
                }
            },
            audio: false
        })
        .then((cameraStream) => {
            stream = cameraStream;
            video.srcObject = stream;
            video.play();
        })
        .catch((error) => {
            console.log(error);
        });
        video.style.display = "block";
});


//CONFIGURAR VIDEO
video.addEventListener('canplay', () => {
    if (!streaming) {
        height = video.videoHeight / (video.videoWidth / width);

        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);

        streaming = true;
    }
});


//TOMAR FOTO
btnFoto.addEventListener('click', function () {

    if (!stream) {
        alert("Primero abre la cámara");
        return;
    }

    tomarFoto();

});

function tomarFoto() {
    const contexto = canvas.getContext('2d');

    if (width && height) {
        canvas.width = width;
        canvas.height = height;

        contexto.drawImage(video, 0, 0, width, height);

        const fotoFinal = canvas.toDataURL('image/png');

        // Mostrar la foto
        document.getElementById("fotoPreview").src = fotoFinal;

        // Guardar la foto temporalmente
        foto.value = fotoFinal;

        // APAGAR LA CÁMARA
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            stream = null;
        }

        // Ocultar el video
        video.srcObject = null;
        video.style.display = "none";
    }
    else {
        limpiarFoto();
    }
}

function limpiarFoto() {
    const contexto = canvas.getContext('2d');
    contexto.fillStyle = "#74fd87";
    contexto.fillRect(0, 0, canvas.width, canvas.height);
}