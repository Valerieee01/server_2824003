
import listarCategorias from "../../casos_de_uso/categoria/listarCategorias.js";

export const cargar_tabla = async (tabla) => {
    const categorias = await listarCategorias();
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
    const btnEliminar = document.createElement("button");
    const btnEditar = document.createElement("button");
  
    btnEditar.setAttribute("data-id", id)
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