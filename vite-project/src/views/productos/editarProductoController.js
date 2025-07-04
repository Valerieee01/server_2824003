import Swal from "sweetalert2";
import { encabezados } from "../../helpers/solicitudes.js";
export const editarProductoController =  (a) => {
    console.log(a);
    
    // Declaración de variables
    const form = document.querySelector('form');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    const precio = document.querySelector('#precio');
    const categoria_id = document.querySelector('#categoria_id');


    // Declaración de métodos
    const enviar = async (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            precio:precio.value,
            categoria_id: categoria_id.value
        }
        const request = await fetch(`http://localhost:3000/api/productos/${a.id}`, {
            method: 'PATCH',
            body: JSON.stringify(data),
            headers: encabezados
        });
        const response = await request.json();
        if (response.success) {
            form.reset()
             Swal.fire({
                title: 'Muy bien!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            location.hash = "#productos";
        }else{
            console.log(response);   
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
         
        }        
    }

    // Declaración de eventos
    form.addEventListener('submit', enviar)    
}