import { encabezados } from "../../helpers/solicitudes";
import { editarCategoriaController } from "./editarCategoriasController";

export const editarControllerCat = async (a) => {
    // declaracion de variables
    const nombre = document.querySelector('#nombre')
    const descripcion = document.querySelector('#descripcion')

    // Solicitud a la API
    const request = await fetch(`http://localhost:3000/api/categorias/${a.id}`,{
        method: 'GET',
        headers: encabezados
    });
    const { data } = await request.json();

    //Llenando los campos
    nombre.value = data.nombre;
    descripcion.value = data.descripcion;
    
    editarCategoriaController(a)

}