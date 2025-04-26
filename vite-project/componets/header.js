const header = async () => {

    const divApp = document.querySelector('#app');
    const header = document.querySelector('.header');
    const divHeader = document.createElement('div')
    const aProductos = document.createElement('a');
    const aCategorias = document.createElement('a');
    
    // clases 
    header.classList.add('container-header');
    divHeader.classList.add('container-menu');
    aProductos.classList.add('link-menu-a');
    aCategorias.classList.add('link-menu-a');
    divApp.classList.add('container')
    
    
    // asignar atrubutos
    aCategorias.setAttribute('href', '#categorias' )
    aProductos.setAttribute('href', '#productos' )
    
    // contenidos de texto
    aProductos.textContent = 'Productos';
    aCategorias.textContent = 'Categorias';
    
    // añadir los elementos
    divHeader.append(aProductos, aCategorias);
    header.append(divHeader);
}

export default header;
