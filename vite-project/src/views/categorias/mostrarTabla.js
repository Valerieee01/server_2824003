
import eliminar_categorias_por_id from "../../casos_de_uso/categoria/eleminarCategoriaPorId.js";
import listarCategorias from "../../casos_de_uso/categoria/listarCategorias.js";

export const cargar_tabla = async (tabla) => {
    const categorias = await listarCategorias();
    const tBody = tabla.querySelector("tbody");
    tBody.innerHTML = '';
    
    (categorias.data).forEach(categoria => {
        crearFila(categoria, tabla);
    });    
}

export const crearFila = ({ id, nombre, descripcion }, tabla) => {
    
    const tBody = tabla.querySelector("tbody");
    const tr = tBody.insertRow(0);
    const tdId = tr.insertCell(0);
    const tdNombre = tr.insertCell(1);
    const tddescripcion = tr.insertCell(2);
    const tdBotonera = tr.insertCell(3); 

    // Agregar el contenido a las celdas
    tdId.textContent = id;
    tdNombre.textContent = nombre;
    tddescripcion.textContent = descripcion;
    
    const div = document.createElement("div");
    const btnEliminar = document.createElement("a");
    const btnEditar = document.createElement("a");
  
    btnEditar.setAttribute("data-id", id)
    btnEditar.setAttribute("href", `#editarcategoria/${id}`)

    btnEliminar.setAttribute("data-id", id)
  
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";
  
    div.classList.add("botonera");
    btnEditar.classList.add("btn", "btn--samall", "editar");
    btnEliminar.classList.add("btn", "btn--samall", "btn--danger", "eliminar");
    div.append(btnEditar, btnEliminar);
    tdBotonera.append(div);
  
    tr.setAttribute("id", `user_${id}`);

}

export const agregarEventosBotones = async() => {
     const tabla = document.querySelector("#tablaCategorias");
        tabla.addEventListener('click', async (e) => {
        if (e.target.classList.contains('eliminar')) {
            if (confirm("¿Estás seguro de eliminar este producto?")) {
                await eliminar_categorias_por_id(e.target.dataset.id);
                await cargar_tabla(tabla); 
            }
        }
    });
};