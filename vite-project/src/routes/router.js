import { loadView } from "../helpers/loadView.js";
import { inicioController } from "../views/inicio/inicioController.js";
import { categoriaController } from "../views/categorias/categoriaController.js";
import { productoController } from "../views/productos/productoController.js";
import { crearCategoriaController } from "../views/categorias/crearCategoriaController.js";
import { editarControllerCat } from "../views/categorias/editarController.js";
import { editarControllerPro } from "../views/productos/editarController.js";
import { crearProductoController } from "../views/productos/crearProductoController.js";
import { registroController } from "../views/registro/registroController.js";
import { loginController } from "../views/login/loginController.js";
import { estaAutenticado } from "../helpers/auth.js";

const routes = {
  inicio: {
    template: "inicio/index.html",
    controlador: inicioController,
    private: false,
  },
  productos: {
    template: "productos/index.html",
    controlador: productoController,
    private: true,
  },
  producto: {
    template: "productos/crear.html",
    controlador: crearProductoController,
    private: true,
  },
  categorias: {
    template: "categorias/index.html",
    controlador: categoriaController,
    private: true,
  },
  categoria: {
    template: "categorias/crear.html",
    controlador: crearCategoriaController,
    private: true,
  },
  "editarcategoria/:id": {
    template: "categorias/editar.html",
    controlador: editarControllerCat,
    private: true,
  },
  "editarproducto/:id": {
    template: "productos/editar.html",
    controlador: editarControllerPro,
    private: true,
  },
  login: {
    template: "login/index.html",
    controlador: loginController,
    private: false,
  },
  registro: {
    template: "registro/index.html",
    controlador: registroController,
    private: false,
  },
};

export const router = async (app) => {
  const hash = location.hash.slice(1);
  const [rutas, params] = matchRoute(hash);
  if (!rutas) {
    await loadView(app, "inicio/index.html");
    inicioController();
    return;
  }

  if (rutas.private && !estaAutenticado()) {
    location.hash = "#login"
    return;
  }
  // Llamando la vista
  await loadView(app, rutas.template);
  // Ejecutar el controldor
  rutas.controlador(params);

  };

const matchRoute = (hash) => {
  const arreglo = hash.split("/");

  for (const route in routes) {
    const b = route.split("/");

    if (b.length !== arreglo.length) continue;

    const params = {};

    const matched = b.every((parte, i) => {
      if (parte.startsWith(":")) {
        const partName = parte.slice(1);
        const value = arreglo[i];
        params[partName] = value;
        return true;
      }
      if (parte === arreglo[i]) {
        return true;
      }
    });

    if (matched) {
      return [routes[route], params];
    }
  }
  return [null, null];
};
