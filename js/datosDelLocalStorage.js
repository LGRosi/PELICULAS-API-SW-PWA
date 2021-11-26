

    const datosDelStorage = JSON.parse(localStorage.getItem('peliculas'));
    console.log(datosDelStorage);
    
    datosDelStorage.forEach(element => {
        const estructuraDeTuSeleccion = document.querySelector('.catalogoTuSeleccion');
    
        estructuraDeTuSeleccion.innerHTML = 
        `<div class="contenedorPeli">
                <figure class="figurePoster">
                    <img class="poster" src=${element.Poster} alt=${element.Title} />
                </figure>
                <div>
                    <h2 class="titulo"><b>Titulo:</b> ${element.Title}</h2>
                    <p class="año"><b>Año:</b> ${element.Year}</p>
                    <p class="genero"><b>Género:</b> ${element.Genre}</p>
                    <p class="lenguaje"><b>Lenguaje:</b> ${element.Language}</p>
                    <p class="tipo"><b>Tipo:</b> ${element.Type}</p>
                    <p class="duracion"><b>Duración:</b> ${element.Runtime}</p>
                    <button type="button" class="btn btn-primary btnAgregar">Agregar</button>
                </div>
            </div>`;
    
    });
