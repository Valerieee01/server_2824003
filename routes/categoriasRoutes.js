import express from 'express';
import CategoriasController from '../controllers/CategoriaController.js';
import validarDatos from '../middlewarm/createCategoria.js';

const categoriasRouters = express();

categoriasRouters.get('/' , CategoriasController.getAllCategorias);

categoriasRouters.post('/' , validarDatos,  CategoriasController.createCategoria);

categoriasRouters.put('/:id', CategoriasController.updatePartial)

categoriasRouters.patch('/:id',  CategoriasController.updatePartial)

categoriasRouters.delete("/:id", CategoriasController.deleteCategoria );


export default categoriasRouters;

