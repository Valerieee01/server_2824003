import Swal from "sweetalert2";
const eliminar_productos_por_id = async (id) => {
   const request = await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: 'DELETE',
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
            Swal.fire({
                title: 'Error!',
                text: response.message,
                icon: 'error',
                confirmButtonText: 'Cool'
            })
          
        }        
}

export default eliminar_productos_por_id;
