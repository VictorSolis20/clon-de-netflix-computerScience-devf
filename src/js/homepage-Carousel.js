//----------- Selección de elementos del carousel 1 ------------------
const fila = document.querySelector('.peli-recomendadas');
const peliculas = document.querySelectorAll('.p1');
const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');
//----------- Selección de elementos del carousel 2 ------------------
const fila2 = document.querySelector('.peli-comedia');
const peliculas2 = document.querySelectorAll('.p2');
const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');
//----------- Selección de elementos del carousel 3 ------------------
const fila3 = document.querySelector('.peli-dramas');
const peliculas3 = document.querySelectorAll('.p3');
const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');
//----------- Selección de elementos del carousel 4 ------------------
const fila4 = document.querySelector('.peli-populares');
const peliculas4 = document.querySelectorAll('.p4');
const flechaIzquierda4 = document.getElementById('flecha-izquierda4');
const flechaDerecha4 = document.getElementById('flecha-derecha4');
//----------- Selección de elementos del carousel 5 ------------------
const fila5 = document.querySelector('.peli-ficcion');
const peliculas5 = document.querySelectorAll('.p5');
const flechaIzquierda5 = document.getElementById('flecha-izquierda5');
const flechaDerecha5 = document.getElementById('flecha-derecha5');


// -------------------------- Transiciones para el carousel 1 -----------------------------------
// ----- Event Listener para la flecha derecha --------------
flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la suma del ancho de la fila actual mas el valor del ancho de fila anterior.
    const indicadorActivo = document.querySelector('.I1 .activo');
    if (indicadorActivo.nextSibling) { //Evalua si el indicadorActivo tiene un elemento a la derecha.
        indicadorActivo.nextSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la derecha el indicador activo.
        indicadorActivo.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo actual.
    }
});

// ----- Event Listener para la flecha izquierda --------------
flechaIzquierda.addEventListener('click', () => {
    fila.scrollLeft -= fila.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la resta del ancho de la fila actual menos el valor del ancho de fila anterior.
    const indicadorActivo = document.querySelector('.I1 .activo');
    if (indicadorActivo.previousSibling) { //Evalua si el indicadorActivo tiene un elemento a la izquierda.
        indicadorActivo.previousSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la izquierda el indicador activo.
        indicadorActivo.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo actual.
    }
});

// ----------------- Paginación -----------------------
// const numeroPaginas = Math.ceil(peliculas.length / 5);
// for (let i = 0; i < numeroPaginas; i++) {
for (let i = 0; i < 3; i++) {
    const indicador = document.createElement('button');
    if (i === 0) {
        indicador.classList.add('activo');
    }
    document.querySelector('.I1').appendChild(indicador);
    indicador.addEventListener('click', (e) => {
        fila.scrollLeft = i * fila.offsetWidth;
        document.querySelector('.I1 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// -------------- Hover ------------------
peliculas.forEach((pelicula) => {
    pelicula.addEventListener('mouseenter', (e) => { //Evento que se ejecuta cuando se le pasa el cursor a un elemento.
        const elemento = e.currentTarget; //Obtiene el elemento al cual se le paso el cursor dentro.
        setTimeout(() => { // Hace que el código de adentro se ejecute después de un determinado tiempo.
            peliculas.forEach(pelicula => pelicula.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
            elemento.classList.add('hover'); //Agrega la clase hover al elemento que se le pasa el cursor.
        }, 300);
    });
});

fila.addEventListener('mouseleave', () => { //Evento que se ejecuta cuando se le quita el cursor a un elemento.
    peliculas.forEach(pelicula => pelicula.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
});

// -------------------------- Transiciones para el carousel 2 -----------------------------------
// ----- Event Listener para la flecha derecha --------------
flechaDerecha2.addEventListener('click', () => {
    fila2.scrollLeft += fila2.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la suma del ancho de la fila actual mas el valor del ancho de fila anterior.
    const indicadorActivo2 = document.querySelector('.I2 .activo');
    if (indicadorActivo2.nextSibling) { //Evalua si el indicadorActivo2 tiene un elemento a la derecha.
        indicadorActivo2.nextSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la derecha el indicador activo.
        indicadorActivo2.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo actual.
    }
});

// ----- Event Listener para la flecha izquierda --------------
flechaIzquierda2.addEventListener('click', () => {
    fila2.scrollLeft -= fila2.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la resta del ancho de la fila actual menos el valor del ancho de fila anterior.
    const indicadorActivo2 = document.querySelector('.I2 .activo');
    if (indicadorActivo2.previousSibling) { //Evalua si el indicadorActivo tiene un elemento a la izquierda.
        indicadorActivo2.previousSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la izquierda el indicador activo.
        indicadorActivo2.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo2 actual.
    }
});

// ----------------- Paginación -----------------------
// const numeroPaginas2 = Math.ceil(peliculas2.length / 5);
// for (let i = 0; i < numeroPaginas2; i++) {
for (let i = 0; i < 3; i++) {
    const indicador2 = document.createElement('button');
    if (i === 0) {
        indicador2.classList.add('activo');
    }
    document.querySelector('.I2').appendChild(indicador2);
    indicador2.addEventListener('click', (e) => {
        fila2.scrollLeft = i * fila2.offsetWidth;
        document.querySelector('.I2 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// -------------- Hover ------------------
peliculas2.forEach((pelicula2) => {
    pelicula2.addEventListener('mouseenter', (e) => { //Evento que se ejecuta cuando se le pasa el cursor a un elemento.
        const elemento2 = e.currentTarget; //Obtiene el elemento al cual se le paso el cursor dentro.
        setTimeout(() => { // Hace que el código de adentro se ejecute después de un determinado tiempo.
            peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
            elemento2.classList.add('hover'); //Agrega la clase hover al elemento que se le pasa el cursor.
        }, 300);
    });
});

fila2.addEventListener('mouseleave', () => { //Evento que se ejecuta cuando se le quita el cursor a un elemento.
    peliculas2.forEach(pelicula2 => pelicula2.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
});

// -------------------------- Transiciones para el carousel 3 -----------------------------------
// ----- Event Listener para la flecha derecha --------------
flechaDerecha3.addEventListener('click', () => {
    fila3.scrollLeft += fila3.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la suma del ancho de la fila actual mas el valor del ancho de fila anterior.
    const indicadorActivo3 = document.querySelector('.I3 .activo');
    if (indicadorActivo3.nextSibling) { //Evalua si el indicadorActivo3 tiene un elemento a la derecha.
        indicadorActivo3.nextSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la derecha el indicador activo.
        indicadorActivo3.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo actual.
    }
});

// ----- Event Listener para la flecha izquierda --------------
flechaIzquierda3.addEventListener('click', () => {
    fila3.scrollLeft -= fila3.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la resta del ancho de la fila actual menos el valor del ancho de fila anterior.
    const indicadorActivo3 = document.querySelector('.I3 .activo');
    if (indicadorActivo3.previousSibling) { //Evalua si el indicadorActivo tiene un elemento a la izquierda.
        indicadorActivo3.previousSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la izquierda el indicador activo.
        indicadorActivo3.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo3 actual.
    }
});

// ----------------- Paginación -----------------------
// const numeroPaginas3 = Math.ceil(peliculas3.length / 5);
// for (let i = 0; i < numeroPaginas3; i++) {
for (let i = 0; i < 3; i++) {
    const indicador3 = document.createElement('button');
    if (i === 0) {
        indicador3.classList.add('activo');
    }
    document.querySelector('.I3').appendChild(indicador3);
    indicador3.addEventListener('click', (e) => {
        fila3.scrollLeft = i * fila3.offsetWidth;
        document.querySelector('.I3 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// -------------- Hover ------------------
peliculas3.forEach((pelicula3) => {
    pelicula3.addEventListener('mouseenter', (e) => { //Evento que se ejecuta cuando se le pasa el cursor a un elemento.
        const elemento3 = e.currentTarget; //Obtiene el elemento al cual se le paso el cursor dentro.
        setTimeout(() => { // Hace que el código de adentro se ejecute después de un determinado tiempo.
            peliculas3.forEach(pelicula3 => pelicula3.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
            elemento3.classList.add('hover'); //Agrega la clase hover al elemento que se le pasa el cursor.
        }, 300);
    });
});

fila3.addEventListener('mouseleave', () => { //Evento que se ejecuta cuando se le quita el cursor a un elemento.
    peliculas3.forEach(pelicula3 => pelicula3.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
});

// -------------------------- Transiciones para el carousel 4 -----------------------------------
// ----- Event Listener para la flecha derecha --------------
flechaDerecha4.addEventListener('click', () => {
    fila4.scrollLeft += fila4.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la suma del ancho de la fila actual mas el valor del ancho de fila anterior.
    const indicadorActivo4 = document.querySelector('.I4 .activo');
    if (indicadorActivo4.nextSibling) { //Evalua si el indicadorActivo4 tiene un elemento a la derecha.
        indicadorActivo4.nextSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la derecha el indicador activo.
        indicadorActivo4.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo actual.
    }
});

// ----- Event Listener para la flecha izquierda --------------
flechaIzquierda4.addEventListener('click', () => {
    fila4.scrollLeft -= fila4.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la resta del ancho de la fila actual menos el valor del ancho de fila anterior.
    const indicadorActivo4 = document.querySelector('.I4 .activo');
    if (indicadorActivo4.previousSibling) { //Evalua si el indicadorActivo tiene un elemento a la izquierda.
        indicadorActivo4.previousSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la izquierda el indicador activo.
        indicadorActivo4.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo4 actual.
    }
});

// ----------------- Paginación -----------------------
// const numeroPaginas4 = Math.ceil(peliculas4.length / 5);
// for (let i = 0; i < numeroPaginas4; i++) {
for (let i = 0; i < 3; i++) {
    const indicador4 = document.createElement('button');
    if (i === 0) {
        indicador4.classList.add('activo');
    }
    document.querySelector('.I4').appendChild(indicador4);
    indicador4.addEventListener('click', (e) => {
        fila4.scrollLeft = i * fila4.offsetWidth;
        document.querySelector('.I4 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// -------------- Hover ------------------
peliculas4.forEach((pelicula4) => {
    pelicula4.addEventListener('mouseenter', (e) => { //Evento que se ejecuta cuando se le pasa el cursor a un elemento.
        const elemento4 = e.currentTarget; //Obtiene el elemento al cual se le paso el cursor dentro.
        setTimeout(() => { // Hace que el código de adentro se ejecute después de un determinado tiempo.
            peliculas4.forEach(pelicula4 => pelicula4.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
            elemento4.classList.add('hover'); //Agrega la clase hover al elemento que se le pasa el cursor.
        }, 300);
    });
});

fila4.addEventListener('mouseleave', () => { //Evento que se ejecuta cuando se le quita el cursor a un elemento.
    peliculas4.forEach(pelicula4 => pelicula4.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
});

// -------------------------- Transiciones para el carousel 5 -----------------------------------
// ----- Event Listener para la flecha derecha --------------
flechaDerecha5.addEventListener('click', () => {
    fila5.scrollLeft += fila5.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la suma del ancho de la fila actual mas el valor del ancho de fila anterior.
    const indicadorActivo5 = document.querySelector('.I5 .activo');
    if (indicadorActivo5.nextSibling) { //Evalua si el indicadorActivo5 tiene un elemento a la derecha.
        indicadorActivo5.nextSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la derecha el indicador activo.
        indicadorActivo5.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo actual.
    }
});

// ----- Event Listener para la flecha izquierda --------------
flechaIzquierda5.addEventListener('click', () => {
    fila5.scrollLeft -= fila5.offsetWidth; //Realiza el movimiento del carousel para lo cual al ancho de la fila actual le asigna el valor de la resta del ancho de la fila actual menos el valor del ancho de fila anterior.
    const indicadorActivo5 = document.querySelector('.I5 .activo');
    if (indicadorActivo5.previousSibling) { //Evalua si el indicadorActivo tiene un elemento a la izquierda.
        indicadorActivo5.previousSibling.classList.add('activo'); //Le asigna clase activo al elemento que tiene a la izquierda el indicador activo.
        indicadorActivo5.classList.remove('activo'); //Le elimina la clase activo al indicadorActivo5 actual.
    }
});

// ----------------- Paginación -----------------------
// const numeroPaginas5 = Math.ceil(peliculas5.length / 5);
// for (let i = 0; i < numeroPaginas5; i++) {
for (let i = 0; i < 3; i++) {
    const indicador5 = document.createElement('button');
    if (i === 0) {
        indicador5.classList.add('activo');
    }
    document.querySelector('.I5').appendChild(indicador5);
    indicador5.addEventListener('click', (e) => {
        fila5.scrollLeft = i * fila5.offsetWidth;
        document.querySelector('.I5 .activo').classList.remove('activo');
        e.target.classList.add('activo');
    });
}

// -------------- Hover ------------------
peliculas5.forEach((pelicula5) => {
    pelicula5.addEventListener('mouseenter', (e) => { //Evento que se ejecuta cuando se le pasa el cursor a un elemento.
        const elemento5 = e.currentTarget; //Obtiene el elemento al cual se le paso el cursor dentro.
        setTimeout(() => { // Hace que el código de adentro se ejecute después de un determinado tiempo.
            peliculas5.forEach(pelicula5 => pelicula5.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
            elemento5.classList.add('hover'); //Agrega la clase hover al elemento que se le pasa el cursor.
        }, 300);
    });
});

fila5.addEventListener('mouseleave', () => { //Evento que se ejecuta cuando se le quita el cursor a un elemento.
    peliculas5.forEach(pelicula5 => pelicula5.classList.remove('hover')); //Busca todas las peliculas y a cada una de ellas les va a quitar la clase hover.
});

