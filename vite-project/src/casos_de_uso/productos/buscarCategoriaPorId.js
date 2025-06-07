import { encabezados } from "../../helpers/solicitudes";

export const buscar_categoria_por_id = async (id) => {
    const solicitud = await fetch(`http://localhost:3000/api/productos/${id}`, {
        method: 'GET',
        headers: encabezados
    });
    const respuesta = await solicitud.json();
    return respuesta;
}

