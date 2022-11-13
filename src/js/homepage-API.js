//------------------- Extracción de datos de la API ---------------------------
const API_KEY = 'api_key=d1d5ea3c8ccd5007da3b3f360b4de192';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL_RECOMENDADAS = BASE_URL + '/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22&' + API_KEY;
const API_URL_COMEDIA = BASE_URL + '/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc&' + API_KEY;
const API_URL_DRAMAS = BASE_URL + '/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&' + API_KEY;
const API_URL_POPULARES = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const API_URL_CIENCIAFICCION = BASE_URL + '/discover/movie?with_genres=878&primary_release_year=2022&primary_release_year=2021&primary_release_year=2020&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const fragment = document.createDocumentFragment();
const carouselRecomendadas = document.getElementById('recomendadas');
const carouselComedia = document.getElementById('comedia');
const carouselDramas = document.getElementById('dramas');
const carouselPopulares = document.getElementById('populares');
const carouselCienciaFiccion = document.getElementById('ficcion');

getMoviesRecomendadas(API_URL_RECOMENDADAS);
getMoviesComedia(API_URL_COMEDIA);
getMoviesDramas(API_URL_DRAMAS);
getMoviesPopulares(API_URL_POPULARES);
getMoviesFiccion(API_URL_CIENCIAFICCION);

//------------------------------- Primer carousel --------------------------------
function getMoviesRecomendadas(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesRecomendadas(data.results);
    })
}

function showMoviesRecomendadas(data) {
    let contador1 = 0;
    data.forEach(movie => {
        const { backdrop_path, title } = movie;
        if (backdrop_path != null && contador1 < 15) {
            const peliDiv = document.createElement('div');
            peliDiv.classList.add('pelicula');
            peliDiv.classList.add('p1');
            const peliLink = document.createElement('a');
            const peliImg = document.createElement('img');
            peliImg.src = IMG_URL + backdrop_path;
            peliImg.alt = title;
            peliLink.appendChild(peliImg);
            peliDiv.appendChild(peliLink);
            const clone = peliDiv.cloneNode(true);
            fragment.appendChild(clone);
            contador1++;
        }
        // <div class="pelicula p1">
        //     <a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
        // </div>
    })
    carouselRecomendadas.appendChild(fragment);
}

//------------------------------- Segundo carousel --------------------------------
function getMoviesComedia(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesComedia(data.results);
    })
}

function showMoviesComedia(data) {
    let contador2 = 0;
    data.forEach(movie => {
        const { backdrop_path, title } = movie;
        if (backdrop_path != null && contador2 < 15) {
            const peliDiv = document.createElement('div');
            peliDiv.classList.add('pelicula');
            peliDiv.classList.add('p2');
            const peliLink = document.createElement('a');
            const peliImg = document.createElement('img');
            peliImg.src = IMG_URL + backdrop_path;
            peliImg.alt = title;
            peliLink.appendChild(peliImg);
            peliDiv.appendChild(peliLink);
            const clone = peliDiv.cloneNode(true);
            fragment.appendChild(clone);
            contador2++;
        }
        // <div class="pelicula p2">
        //     <a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
        // </div>
    })
    carouselComedia.appendChild(fragment);
}

//------------------------------- Tercer carousel --------------------------------
function getMoviesDramas(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesDramas(data.results);
    })
}

function showMoviesDramas(data) {
    let contador3 = 0;
    data.forEach(movie => {
        const { backdrop_path, title } = movie;
        if (backdrop_path != null && contador3 < 15) {
            const peliDiv = document.createElement('div');
            peliDiv.classList.add('pelicula');
            peliDiv.classList.add('p3');
            const peliLink = document.createElement('a');
            const peliImg = document.createElement('img');
            peliImg.src = IMG_URL + backdrop_path;
            peliImg.alt = title;
            peliLink.appendChild(peliImg);
            peliDiv.appendChild(peliLink);
            const clone = peliDiv.cloneNode(true);
            fragment.appendChild(clone);
            contador3++;
        }
        // <div class="pelicula p3">
        //     <a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
        // </div>
    })
    carouselDramas.appendChild(fragment);
}

//------------------------------- Cuarto carousel --------------------------------
function getMoviesPopulares(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesPopulares(data.results);
    })
}

function showMoviesPopulares(data) {
    let contador4 = 0;
    data.forEach(movie => {
        const { backdrop_path, title } = movie;
        if (backdrop_path != null && contador4 < 15) {
            const peliDiv = document.createElement('div');
            peliDiv.classList.add('pelicula');
            peliDiv.classList.add('p4');
            const peliLink = document.createElement('a');
            const peliImg = document.createElement('img');
            peliImg.src = IMG_URL + backdrop_path;
            peliImg.alt = title;
            peliLink.appendChild(peliImg);
            peliDiv.appendChild(peliLink);
            const clone = peliDiv.cloneNode(true);
            fragment.appendChild(clone);
            contador4++;
        }
        // <div class="pelicula p4">
        //     <a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
        // </div>
    })
    carouselPopulares.appendChild(fragment);
}

//------------------------------- Quinto carousel --------------------------------
function getMoviesFiccion(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showMoviesFiccion(data.results);
    })
}

function showMoviesFiccion(data) {
    let contador5 = 0;
    data.forEach(movie => {
        const { backdrop_path, title } = movie;
        if (backdrop_path != null && contador5 < 15) {
            const peliDiv = document.createElement('div');
            peliDiv.classList.add('pelicula');
            peliDiv.classList.add('p5');
            const peliLink = document.createElement('a');
            const peliImg = document.createElement('img');
            peliImg.src = IMG_URL + backdrop_path;
            peliImg.alt = title;
            peliLink.appendChild(peliImg);
            peliDiv.appendChild(peliLink);
            const clone = peliDiv.cloneNode(true);
            fragment.appendChild(clone);
            contador5++;
        }
        // <div class="pelicula p5">
        //     <a href="#"><img src="${IMG_URL+poster_path}" alt="${title}"></a>
        // </div>
    })
    carouselCienciaFiccion.appendChild(fragment);
}