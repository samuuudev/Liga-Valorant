function filtrarPorEquipo(idSelect, selectorElementos){
    const select= document.getElementById(idSelect);

    function mostrarElemento(){
        const equipoElegido = select.value;

        document.querySelectorAll(selectorElementos).forEach(elemento =>{
            if (equipoElegido === "all" || elemento.dataset.team === equipoElegido){
                elemento.classList.remove("d-none");
            } else {
                elemento.classList.add("d-none");
            }
        });
    }

    select.addEventListener("change", mostrarElemento);
    mostrarElemento();

}

//Equipos
filtrarPorEquipo('filtroEquipo', '[data-type="team"]');


function filtrarJugadores(selectEquipoId, selectLigaId, inputNombreId, selectorElementos) {
    const selectEquipo = document.getElementById(selectEquipoId);
    const selectLiga = document.getElementById(selectLigaId);
    const inputNombre = document.getElementById(inputNombreId);

    function mostrarElementos() {
        const equipoElegido = selectEquipo.value.toLowerCase();
        const ligaElegida = selectLiga.value.toLowerCase();
        const nombreBuscado = inputNombre.value.toLowerCase();

        document.querySelectorAll(selectorElementos).forEach(elemento => {
            const coincideEquipo = (equipoElegido === "all" || elemento.dataset.team.toLowerCase() === equipoElegido);
            const coincideLiga = (ligaElegida === "all" || elemento.dataset.league.toLowerCase() === ligaElegida);
            const coincideNombre = elemento.dataset.name.toLowerCase().includes(nombreBuscado);

            if (coincideEquipo && coincideLiga && coincideNombre) {
                elemento.classList.remove("d-none");
            } else {
                elemento.classList.add("d-none");
            }
        });
    }

    // Escuchar cambios en los selects y en el input
    selectEquipo.addEventListener("change", mostrarElementos);
    selectLiga.addEventListener("change", mostrarElementos);
    inputNombre.addEventListener("input", mostrarElementos);

    // Mostrar inicialmente todos los elementos
    mostrarElementos();
}

// Llamada a la función, añade un input con id="buscarNombre" en tu HTML
filtrarJugadores('filtroEquipo', 'filtroLiga', 'buscarNombre', '[data-type="player"]');


