let nombreUsuarioSeleccionado;
let imgUsuarioSeleccionado;

const perfil = document.querySelector('.elegir-perfil');

perfil.addEventListener('click', e => {
    addPerfil(e)
})

const addPerfil = e => {
    if (e.target.classList.contains('usuarioImg')) {
        elementosUsuarioSeleccionadoImg(e.target.parentElement);
    } else if (e.target.classList.contains('usuarioNombre')) {
        elementosUsuarioSeleccionadoNombre(e.target.parentElement);
    }
    e.stopPropagation();
}

const elementosUsuarioSeleccionadoImg = objeto => {
    const usuario = {
        img: objeto.querySelector('.usuarioImg').src
    }
    localStorage.setItem("usuario", usuario.img);
    abrirPestanaHomepage('homepage.html');
}

const elementosUsuarioSeleccionadoNombre = objeto => {
    let labelNombre = objeto.querySelector('.usuarioNombre');
    const usuario = {
        img: labelNombre.getAttribute("name")
    }
    localStorage.setItem("usuario", usuario.img);
    abrirPestanaHomepage('homepage.html');
}

function abrirPestanaHomepage(url) {
    // Abrir nueva pestaña
    var win = window.open(url);
    window.close();
    // Cambiar el foco a la nueva pestaña
    win.focus();
}