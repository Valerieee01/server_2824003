import connection from "../utils/db.js";

class Producto {
    constructor() {
        
    }

    async getAll(){
        try {
            const [rows] = await connection.query("select * from productos;");
            return rows;
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }        
    }

    async create(nombre, descripcion, categoria_id){
        const [result] = await connection.query("insert into productos(nombre, descripcion, categoria_id) value (?,?,?) ", [nombre, descripcion, categoria_id]);

        return {
            id: result.insertId,
            nombre, 
            descripcion,
            categoria_id
        }
    }

    async delete(id) {
        try {
            const [datos] = await this.getById(id)
            // consulto productos relacionados
            
             // si no tiene se elimina 
            const [eliminado] = await connection.query(`delete from productos where id = ${id}`);
     
                if (eliminado.affectedRows > 0) {
                    return {
                        error: false,
                        message: `Se elimino con exito la categoria con id = ${id}`,
                        data: datos
                    }   
                }else {
                    return {
                        error: true,
                        message: `No se pudo eliminar ninguna producto con id = ${id}`
                    }  
                }
            
        } catch (error) {
            throw new Error("Error al obtener las categorias");
        }
    }

  
    async updatePartial(id,campos) {
        let query  = "UPDATE productos SET ";
        let params = [];
        // contruimos de forma dinamica la consulta para acceder a todos los campos que llegan de la tabla categorias 
        for (const [key, value] of (Object.entries(campos))) {
            query += `${key} = ?, `;
            params.push(value);
        }
        // eliminamos la ultima , y el espacio en blanco de la consulta
        query = query.slice(0, -2);
        query += " WHERE id = ?";   
        params.push(id)    
        console.log(query , params);
         
        try {
            const [result]  = await connection.query(query, params);
            if (result.affectedRows === 0) {
                return {
                    error: true,
                    message: `No se pudo actualizar la productos con id = ${id}`,

                }   
            }   
            
            return {
                error: false,
                message: `Se Actualizo con exito la productis con id = ${id}`,
                data :  result
            }   
        } catch (error) {
            throw new Error("Error al Actualizar los productos");
        }
    
    }


    async getById(id){
        const [consulta] = await connection.query(`select * from productos where id = ${id}`);  
        
        if (!consulta || consulta.length === 0) {
            console.log('No se encontraron resultados para el id:', id);
            return null;
        }
        
        return consulta;
    }
}


export default Producto;