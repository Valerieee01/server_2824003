import { loadView } from "../helpers/loadView.js";
import { categoriaController } from "../views/categorias/categoriaController.js";
import { productoController } from "../views/productos/productoController.js";

const routes ={
    productos: {
        template: "productos/index.html", 
        controlador: productoController
    },
    categorias: {
        template: "categorias/index.html", 
        controlador: categoriaController
    
    }
}


export const router = (element) => {
    const hash = location.hash.slice(1);
    const {template, controlador} = matchRoute(hash);
    console.log(template, controlador);

    controlador()

    loadView(hash, element)
}

export const matchRoute = (hash) => {
    for(const route in routes){
        if (route === hash) {
            return route[route];
        }
    }
    
}

