import { loadView } from "../helpers/loadView.js";
import { inicioController } from "../views/inicio/inicioController.js";
import  {categoriaController}  from "../views/categorias/categoriaController.js";
import { productoController } from "../views/productos/productoController.js";
import { crearCategoriaController } from "../views/categorias/crearCategoriaController.js"
import { editarController } from "../views/categorias/editarController.js";
import { crearProductoController } from "../views/productos/crearProductoController.js";

const routes = {
  "/": {
      "template": "inico/index.html",
      controlador: inicioController
    }, 
  productos: {
    "template": "productos/index.html",
    controlador: productoController
  },
  producto: {
    "template": "productos/crear.html",
    controlador: crearProductoController
  },
  categorias: {
    "template": "categorias/index.html",
    controlador: categoriaController
  },
  categoria: {
    "template": "categorias/crear.html",
    controlador: crearCategoriaController
  },
  "editarcategoria/:id": {
    "template": "categorias/editar.html",
    controlador: editarController
  }

  
};

export const router = async (app) => {  
  const hash = location.hash.slice(1);
  const [ rutas, params ] = matchRoute(hash)
  // Llmando la vista
  await loadView(app, rutas.template);
  // Ejecutar el controldor
  rutas.controlador(params)

}

const matchRoute = (hash) => {  
  const arreglo = hash.split('/') ;  

  for (const route in routes) {
    const b = route.split('/') ;    
    
    if (b.length !== arreglo.length) continue
    
    const params = {}

    const matched = b.every( (parte, i) => {      
      if (parte.startsWith(":")) {   
        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true
      }
      if (parte === arreglo[i]){
        return true
      }
    });


    if (matched) {
      return [routes[route], params];
    }
  }
  return [null, null]

}