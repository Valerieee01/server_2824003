import{ cargar_tabla, agregarEventosBotones } from './mostrarTabla.js';

export const categoriaController = async () => {
    const tabla = document.querySelector("#tablaCategorias");
    
    if (!tabla) {
        console.error("No se encontró la tabla");
        return;
    }

    try {
        await cargar_tabla(tabla);
        await agregarEventosBotones();
    } catch (error) {
        console.error("Error en productoController:", error);
    }

}

