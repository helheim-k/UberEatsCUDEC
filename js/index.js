let contenido = "";

document.addEventListener('DOMContentLoaded', function() {
  // nav menu
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, {edge: 'right'});
  // add recipe form
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, {edge: 'left'});
});
function mostrarPlatillo(platillo, id) {
    let contenido = `
    <div class="card-panel recipe white row" id="${id}" data-id="${id}">
        <div class="recipe-details">
            <div class="recipe-title">
                ${platillo.nombre}
            </div>
            <div class="recipe-ingredients">
                ingredientes: ${platillo.ingredientes}
            </div>
            <div class="recipe-price">
                $${platillo.precio}
            </div>
            <div class="recipe-delete">
              <i class="material-icons" data-id="${id}">
              delete_outline</i>
        </div>
    </div>
    `;

    document.querySelector('.recipes').innerHTML += contenido;
}
function actualizarPlatillo(platillo, id) {
    let tarjeta = document.getElementById(`${id}`);
    tarjeta.querySelector('.recipe-title').innerHTML = platillo.nombre;
    tarjeta.querySelector('.recipe-ingredients').innerHTML = `ingredientes: ${platillo.ingredientes}`;
    tarjeta.querySelector('.recipe-price').innerHTML = `$${platillo.precio}`;
}
const borrarPlatillo =(id) => {
    const platillo = document.querySelector(`.recipe[data-id=${id}]`);
    platillo.remove();
}
