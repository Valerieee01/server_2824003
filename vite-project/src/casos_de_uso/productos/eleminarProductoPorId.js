const eliminar_productos_por_id = async (id) => {
    await fetch(`http://localhost:3000/api/productos/${id}`, {
      method: 'DELETE',
    });
}

export default eliminar_productos_por_id;
