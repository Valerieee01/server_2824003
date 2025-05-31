const header = () => {

    const divApp = document.querySelector('#app');
    const header = document.querySelector('.header');
    const divHeader = document.createElement('div')
    const aProductos = document.createElement('a');
    const aCategorias = document.createElement('a');
    const aInicio = document.createElement('a');
    const alogin = document.createElement('a');
    const aRegistro = document.createElement('a');
    
    // clases 
    header.classList.add('container-header');
    divHeader.classList.add('container-menu');
    aProductos.classList.add('link-menu-a');
    aCategorias.classList.add('link-menu-a');
    aInicio.classList.add('link-menu-a');
    divApp.classList.add('container');
    alogin.classList.add('link-menu-a');
    aRegistro.classList.add('link-menu-a');

    
    // asignar atrubutos
    aCategorias.setAttribute('href', '#categorias' );
    aProductos.setAttribute('href', '#productos' );
    aInicio.setAttribute('href', '#inicio' );
    alogin.setAttribute('href', '#login' );
    aRegistro.setAttribute('href', '#registro' );


    
    // contenidos de texto
    aProductos.textContent = 'Productos';
    aCategorias.textContent = 'Categorias';
    aInicio.textContent = 'Inicio';
    alogin.textContent = 'Login';
    aRegistro.textContent = 'Registro';


    
    // añadir los elementos
    divHeader.append(aProductos, aCategorias, aInicio, alogin,aRegistro);
    header.append(divHeader);

    window.addEventListener('nombre', (e) => {
        alert("Escuchamos el evento");
    })

}



export default header;
