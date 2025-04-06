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
        connection.query("insert into categorias(nombre, descripcion) value (?,?) ", [nombre, descripcion])
    }
}
export default Categoria;