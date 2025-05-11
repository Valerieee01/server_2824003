export const eliminar_categorias_por_id = async (id) => {
    fetch(`http://localhost:3000/api/categorias/${id}`, {
      method: 'DELETE',
    });
}

export default eliminar_categorias_por_id;