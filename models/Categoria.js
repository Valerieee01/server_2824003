import connection from "../utils/db.js";

class Categoria{
    constructor(){      
    }

    async getAll(){
        try {
            const [rows] = await connection.query("select * from categorias;");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }        
    }

    async create(nombre, descripcion){
        const [result] = await connection.query("insert into categorias(nombre, descripcion) value (?,?) ", [nombre, descripcion]);

        return {
            id: result.insertId,
            nombre, 
            descripcion
        }
    }

    async delete(id) {
       const {nombre, descripcion } = this.getById(id)
        const [eliminado] = await connection.query(`delete from categorias where id = ${id}`);
        
        console.log(eliminado);
        
        if (eliminado.affectedRows > 0) {
            console.log(`Se elimino con exito la categoria con id = ${id}`);
        }else {
            console.log(`No se pudo eliminar ninguna Categoria = ${id}`);
        }
        return {
            id: eliminado.id, nombre, descripcion
        }
        
     }

     async getById(id){
        const [consulta] = await connection.query(`select * from categorias where id = ${id}`);  
        if (!consulta || consulta.length === 0) {
            console.log('No se encontraron resultados para el id:', id);
            return null;
        }

        //cambio
        const categoria = consulta[0];
        return {
           id : categoria.nombre,
           id: categoria.descripcion
        }
     }
}
export default Categoria;