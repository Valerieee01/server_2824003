import { loadView } from "../helpers/loadView.js";
import { inicioController } from "../views/inicio/inicioController.js";
import  {categoriaController}  from "../views/categorias/categoriaController.js";
import { productoController } from "../views/productos/productoController.js";

const routes = {

    inicio: {
        "template": "inico/index.html",
        controlador: inicioController
      },
    productos: {
      "template": "productos/index.html",
      controlador: productoController
    },
    categorias: {
      "template": "categorias/index.html",
      controlador: categoriaController
    }
  };

  export const router = async (app) => {
    const hash = location.hash.slice(1);
    const { template, controlador } = matchRoute(hash);

    await loadView(app, template); 
    controlador(); 
};

export const matchRoute = (hash) => {
    if (!hash) {
        return routes['inicio']
    }
    for(const route in routes){
        if (route === hash) {
            return routes[route];
        }
    }
    
}

