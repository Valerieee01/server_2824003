import Swal from "sweetalert2";
import {cargar_select} from "./listarCategoriasForm.js";
export const crearProductoController = async () => {
    // Declaración de variables
    const form = document.querySelector('#formProductos');
    const nombre = document.querySelector('#nombre');
    const descripcion = document.querySelector('#descripcion');
    const precio =  document.querySelector('#precio');
    const categoria_id = document.querySelector('#categoria_id');

    // Declaración de métodos
    const enviar = async (e) => {
        e.preventDefault()
        const data = {
            nombre: nombre.value,
            descripcion: descripcion.value,
            precio: precio.value,
            categoria_id: categoria_id.value
        }
        const request = await fetch('http://localhost:3000/api/productos', {
            method: 'POST',
            body: JSON.stringify(data), // serializar los datos
            headers: {
                'Content-type': 'application/json; charset=UTF-8', // se envian los datos en formato json
            },
        });
        const response = await request.json(); // se estan transformando los datos a la forma de js
        if (response.success) {
            form.reset()
             Swal.fire({
                title: 'Muy bien!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            location.hash = "#producto";
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

    await cargar_select(form)

    // Declaración de eventos
    form.addEventListener('submit', enviar)    
}