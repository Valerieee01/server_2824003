import { encabezados } from "../../helpers/solicitudes";

const listarProductos = async () => {
  try {
    const envio = await fetch("http://localhost:3000/api/productos", {
      headers: encabezados
    });
    const { data } = await envio.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export default listarProductos;
