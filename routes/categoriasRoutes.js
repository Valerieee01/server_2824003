import express from 'express';
import CategoriasController from '../controllers/CategoriaController.js';


const categoriasRouters = express();

categoriasRouters.get('/' , CategoriasController.getAllCategorias);

categoriasRouters.post('/' , CategoriasController.createCategoria);

export default categoriasRouters;

