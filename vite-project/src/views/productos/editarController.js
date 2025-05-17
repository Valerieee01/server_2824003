import { editarProductoController } from "./editarProductoController";
import { cargar_select } from "./listarCategoriasForm";
import listarCategorias from "../../casos_de_uso/categoria/listarCategorias.js";
export const editarControllerPro = async (a) => {

    // declaracion de variables
    const form = document.querySelector('#formProductos');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    const precio = document.querySelector('#precio');
    const categoria_id = document.querySelector('#categoria_id');

    const categorias = await listarCategorias();

    // Solicitud a la API
    const request = await fetch(`http://localhost:3000/api/productos/${a.id}`);
    const {data} = await request.json();

    //Llenando los campos
    nombre.value = data.nombre;
    descripcion.value = data.descripcion;
    precio.value = data.precio    
   
    await cargar_select(form, data.categoria_id)
    editarProductoController(a)
}