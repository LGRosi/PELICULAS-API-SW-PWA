window.addEventListener('offline', (event) => {
    console.log('Estoy offline!');
    document.querySelector('#idSw').classList.add('offline');
});

window.addEventListener('online', (event) => {
console.log('Estoy online! Puedo navegar!');
document.querySelector('#idSw').classList.add('online');
});

if (!navigator.onLine) {
console.log('Estoy sin conexión!');
}


//PELIS
const btnBuscar = document.querySelector('.btnBuscar');
const inputPeliculas = document.getElementById('inputPeliculas');

const estructuraDeLaPublicacion = document.querySelector('.catalogo');

btnBuscar.addEventListener('click', () => {
    buscarEnLaApi(inputPeliculas.value);
});


function buscarEnLaApi (buscarValor) {

    fetch(`https://www.omdbapi.com/?t=${buscarValor}&apikey=6cba305d`)
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log('Imprimo JSON:', data);
        obtenerValores(data);
        guardarResultados(data);
    })
    .catch(error => {
        console.log('Error:', error);
    });
} 

function obtenerValores (data) {

    estructuraDeLaPublicacion.innerHTML =
        `<div class="contenedorPeli">
            <figure class="figurePoster">
                <img class="poster" src=${data.Poster} alt=${data.Title} />
            </figure>
            <div>
                <h2 class="titulo"><b>Titulo:</b> ${data.Title}</h2>
                <p class="año"><b>Año:</b> ${data.Year}</p>
                <p class="genero"><b>Género:</b> ${data.Genre}</p>
                <p class="lenguaje"><b>Lenguaje:</b> ${data.Language}</p>
                <p class="tipo"><b>Tipo:</b> ${data.Type}</p>
                <p class="duracion"><b>Duración:</b> ${data.Runtime}</p>
                <button type="button" class="btn btn-primary btnAgregar">Agregar</button>
            </div>
        </div>`;

}


function guardarResultados (data) {
    const btnAgregar = document.querySelector('.btnAgregar');
    btnAgregar.addEventListener('click', () => {
       localStorage.setItem('peliculas', JSON.stringify(data));
    });
}

