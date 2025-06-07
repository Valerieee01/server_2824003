import Swal from "sweetalert2";
import { encabezados } from "../../helpers/solicitudes.js"
import { refrescarAccessToken } from "../../helpers/solicitudesRefresh.js";

const eliminar_productos_por_id = async (id) => {
   const request = await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: 'DELETE',
      headers: encabezados
    });
    const response = await request.json();
        if (response.success) {
            const tr = document.querySelector(`#user_${id}`)
            tr.remove();
              Swal.fire({
                title: 'Muy bien!',
                text: response.message,
                icon: 'success',
                confirmButtonText: 'Cool'
        })
            location.hash = "#productos";
        }else{
            console.log(response);   
            refrescarAccessToken('DELETE',`http://localhost:3000/api/productos/${id}`)
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
          
        }        
}

export default eliminar_productos_por_id;
