

document.addEventListener("click", async (e) => {
    // Evento para el botón editar en latabla que creamos en el SENA
    // Llamar la función para llenar el formulario
    if (e.target.matches(".editar")) llenado(e);
    if (e.target.matches(".eliminar")) {
      eliminar_usuario_por_id(e.target.dataset.id);
    }
  })