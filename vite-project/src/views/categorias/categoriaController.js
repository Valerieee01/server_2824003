import{ cargar_tabla }from './mostrarTabla.js';

export const categoriaController = () => {
    const tabla = document.querySelector("#tablaCategorias");
    cargar_tabla(tabla)
}

