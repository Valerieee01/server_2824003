const listarCategorias = async () => {
    try {
        const envio = await fetch("http://localhost:3000/api/categorias");
        const respuesta = await envio.json();
        return respuesta
      } catch (error) {
        console.error(error);
      }
    
}

export default listarCategorias;