import listarCategorias from "../../casos_de_uso/categoria/listarCategorias.js"

export const cargar_select = async (form, selccionado = 0) => {
    const categorias = await listarCategorias();
    const select = form.querySelector("#categoria_id");
    const op = document.createElement("option");
    op.textContent = "Seleccione..."
    select.append(op);
    (categorias).forEach(categoria => {
        crearOption(categoria, form, selccionado);
    });    
}

export const crearOption =  async ({id, nombre}, form, selccionado) => {
    
    const select = form.querySelector("#categoria_id");
    const option = document.createElement("option");

    option.value = id;    
    option.textContent = nombre;

    if (id === selccionado) {
        option.selected = true;        
    }

    select.append(option);
}

