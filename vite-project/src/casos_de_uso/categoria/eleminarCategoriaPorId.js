export const elimar_categoria_por_id = (id) => {
    fetch(`http://localhost:3000/usuarios/${id}`, {
      method: 'DELETE',
    });
}