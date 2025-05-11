
export const buscar_categoria_por_id = async (id) => {
    const solicitud = await fetch(`http://localhost:3000/api/productos/${id}`);
    const respuesta = await solicitud.json();
    return respuesta;
}

