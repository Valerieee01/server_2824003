import { editarProductoController } from "./editarProductoController";

export const editarController = async (a) => {
    // declaracion de variables
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    const precio = document.querySelector('#precio');
    const cod_categoria = document.querySelector('#cod_categoria');



    // Solicitud a la API
    const request = await fetch(`http://localhost:3000/api/productos/${a.id}`);
    const {data} = await request.json();

    //Llenando los campos
    nombre.value = data.nombre;
    descripcion.value = data.descripcion;
    precio.value = data.precio
    cod_categoria.value = data.cod_categoria;
    
    editarProductoController(a)

}