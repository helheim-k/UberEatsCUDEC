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

    let contenido = `
    <div class="card-panel recipe white row" id="${id}" data-id="${id}">
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

            <div class="recipe-delete">
                <i class="material-icons" data-id="${id}">
                    delete_outline
                </i>
            </div>
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
const btnFoto = document.getElementById('btnFoto');

btnFoto.addEventListener('click', function () {
    navigator.mediaDevices
        .getUserMedia({ 
            video: true, 
            audio: false 
        })
        .then((stream) => {
            video.srcObject = stream;
            video.play();
        })
        .catch((error) => {
            console.log(error);
        });
})