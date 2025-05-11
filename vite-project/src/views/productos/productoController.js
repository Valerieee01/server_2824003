import { cargar_tabla, agregarEventosBotones } from './mostrarTabla.js';

export const productoController = async () => {
    const tabla = document.querySelector("#tablaProductos");
    
    if (!tabla) {
        console.error("No se encontró la tabla con ID #tablaProductos");
        return;
    }

    try {
        await cargar_tabla(tabla);
        await agregarEventosBotones();
    } catch (error) {
        console.error("Error en productoController:", error);
    }
}