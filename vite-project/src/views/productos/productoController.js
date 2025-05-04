import{ cargar_tabla }from './mostrarTabla.js';

export const productoController = () => {
    const tabla = document.querySelector("#tablaProductos");
    cargar_tabla(tabla)
}

