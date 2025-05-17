const listarCategorias = async () => {
    try {
        const envio = await fetch("http://localhost:3000/api/categorias");
        const { data } = await envio.json();        
        return data
      } catch (error) {
        console.error(error);
      }
    
}

export default listarCategorias;