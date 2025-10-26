document.addEventListener("DOMContentLoaded", () => {
  const btnLogin = document.getElementById("btnLogin");
  const modalLogin = new bootstrap.Modal(document.getElementById("modal_login"));

  btnLogin.addEventListener("click", () => {
    modalLogin.show();
  });
});


// Filtrado por equipos para la pagina equipos.html
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

if (document.getElementById('filtroEquipo')) {
  filtrarPorEquipo('filtroEquipo', '[data-type="team"]');
}


// Filtrado por equipo, liga y nombre
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

    selectEquipo.addEventListener("change", mostrarElementos);
    selectLiga.addEventListener("change", mostrarElementos);
    inputNombre.addEventListener("input", mostrarElementos);

    mostrarElementos();
}

if (
  document.getElementById('filtroEquipo') &&
  document.getElementById('filtroLiga') &&
  document.getElementById('buscarNombre')
) {
  filtrarJugadores('filtroEquipo', 'filtroLiga', 'buscarNombre', '[data-type="player"]');
}
