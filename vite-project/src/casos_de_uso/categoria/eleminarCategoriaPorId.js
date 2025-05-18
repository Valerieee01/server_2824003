import Swal from "sweetalert2";
export const eliminar_categorias_por_id = async (id) => {
     const request = await fetch(`http://localhost:3000/api/categorias/${id}`, {
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
        location.hash = "#categorias";
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

export default eliminar_categorias_por_id;