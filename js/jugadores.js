document.addEventListener("DOMContentLoaded", () => {
  const filasJugadores = document.querySelectorAll('tr[data-type="player"]');
  
  filasJugadores.forEach(fila => {
    fila.style.cursor = "pointer";
    fila.addEventListener("click", () => {
      const nombre = fila.dataset.name;
      const equipo = fila.dataset.team;
      const liga = fila.dataset.league;
      const kda = fila.children[4].textContent;
      const hs = fila.children[5].textContent;
      const rol = fila.children[6].textContent;

      const modalHtml = `
        <div class="modal fade" id="modalJugador" tabindex="-1" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content text-center">
              <div class="modal-header">
                <h5 class="modal-title">${nombre}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div class="modal-body">
                <img src="assets/images/jugadores/${nombre}.webp" 
                     alt="${nombre}" 
                     class="img-fluid rounded mb-3" 
                     style="max-height: 250px; object-fit: cover;">
                <p><strong>Equipo:</strong> ${equipo}</p>
                <p><strong>Liga:</strong> ${liga}</p>
                <p><strong>KDA:</strong> ${kda}</p>
                <p><strong>%HS:</strong> ${hs}</p>
                <p><strong>Rol:</strong> ${rol}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      `;

      const modalContainer = document.createElement("div");
      modalContainer.innerHTML = modalHtml;
      document.body.appendChild(modalContainer);

      const modalJugador = new bootstrap.Modal(modalContainer.querySelector("#modalJugador"));
      modalJugador.show();

      modalContainer.addEventListener("hidden.bs.modal", () => modalContainer.remove());
    });
  });
});