const seleccionHeader = document.querySelector('header');
const imgUsuario = document.querySelector('.imagen_usuario');
// Se le asigna el link guardado en el localStorage a la propiedad src de la imagen del header.
imgUsuario.querySelector('img').setAttribute("src", localStorage.getItem("usuario"));
localStorage.removeItem("usuario"); //Elimina el valor guardado en el localStorage.


seleccionHeader.addEventListener('click', e => {
    addLogo(e) //Función para realizar operaciones al presionar el logo.
})

//Función para seleccionar los elementos del logo.
const addLogo = e => {
    //Evalua si existe un elemento con la clase logo.
    if (e.target.classList.contains('logo')) {
        abrirPestanaLogin('index.html'); // Función para abrir la pestaña del login.
    }
    e.stopPropagation();
}

//Función que realiza las operaciones para abrir una nueva pestaña.
function abrirPestanaLogin(url) {
    // Abrir nueva pestana
    var win = window.open(url); //Abre la nueva pestaña.
    window.close(); //Cierra la pestaña actual.
    // Cambiar el foco a la nueva pestaña.
    win.focus();
}