const inicioSesion = document.querySelector('.iniciasesion');
// Declaración de variables
let usuarioFormulario;
let contrasenaFormulario;
let usuarioContrasenaFormulario;
let arrayDatos;
let respuesta = false;


//Verifica si el documento HTML inicial se ha cargado y analizado por completo.
document.addEventListener('DOMContentLoaded', () => {
    fetchData(); //Extrae los elementos del api.json
})

//Función para extraer los elementos del api.json
const fetchData = async () => {
    try {
        const res = await fetch('api.json'); //Se crea la constante res que recibe la información del api.json
        const data = await res.json(); //Se crea la constante data la cual recibe el array de datos.
        arrayDatos = data; //Le asigna el array de datos extraidos del json a la variable arrayDatos.
    } catch (error) {
        console.log(error);
    }
}

inicioSesion.addEventListener('click', e => {
    addBotonInicio(e); //Función para realizar operaciones al presionar el botón ingresar.
})

//Función para seleccionar los elementos del botón ingresar.
function addBotonInicio(e) {
    //Evalua si existe un elemento con la clase botonInicio
    if (e.target.classList.contains('botonInicio')) {
        validacionUsuarioContrasena(e.target.parentElement)
        validacionDatosFormulario();
    }
}

//Función para extraer el valor de los elementos que se obtuvieron al dar click en el botón ingresar.
const validacionUsuarioContrasena = objeto => {
    const elementosLogin = {
        usuario: objeto.getElementsByTagName('input')[0].value,
        contrasena: objeto.getElementsByTagName('input')[1].value
    }
    usuarioFormulario = elementosLogin.usuario;
    contrasenaFormulario = elementosLogin.contrasena;
    usuarioContrasenaFormulario = usuarioFormulario + contrasenaFormulario;
    arrayDatos.forEach(dato => {
        let usuarioContrasena = dato.usuario + dato.contrasena;
        if (usuarioContrasena == usuarioContrasenaFormulario) { //Evalua el usuario y contraseña ingresado con el guardado del usuario seleccionado.
            respuesta = true;
        }
    })

}

//Función para evaluar el texto ingresado en el formulario del login.
function validacionDatosFormulario() {
    if (usuarioFormulario == "" || contrasenaFormulario == "") {  //Evalua que ningún input del formulario este vacio.
        alert("🚫 No se pueden dejar campos sin rellenar 🚫");
    } else if (respuesta == true) { //Evalua si la contraseña ingresada fue correcta.
        abrirPestanaUsers('users.html'); //Función para abrir una nueva pestaña.
    } else {
        alert("⚠ Usuario y/o contraseña incorrectos ⚠");
    }
}

function abrirPestanaUsers(url) { //Esta función realiza las operaciones para poder abrir otra pestaña.
    // Abrir nueva pestaña
    var win = window.open(url);
    window.close(); //Cierra la pestaña actual.
    // Cambiar el foco al nueva pestaña
    win.focus();
}