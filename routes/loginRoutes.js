import express from 'express';
import validarDatos from '../middlewarm/validarCategorias.js';

const loginRoutes = express();

loginRoutes.post('/' , validarDatos,  CategoriasController.createCategoria);
