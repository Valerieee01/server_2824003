const header = () => {

    const divApp = document.querySelector('#app');
    const header = document.querySelector('.header');
    const divHeader = document.createElement('div')
    const aProductos = document.createElement('a');
    const aCategorias = document.createElement('a');
    const aLogo = document.createElement('a');
    const alogin = document.createElement('a');
    const aRegistro = document.createElement('a');
    
    // clases 
    header.classList.add('container-header');
    divHeader.classList.add('container-menu');
    aProductos.classList.add('link-menu-a');
    aCategorias.classList.add('link-menu-a');
    aLogo.classList.add('link-menu-a');
    divApp.classList.add('container');
    alogin.classList.add('link-menu-a');
    aRegistro.classList.add('link-menu-a');

    
    // asignar atrubutos
    aCategorias.setAttribute('href', '#categorias' );
    aProductos.setAttribute('href', '#productos' );
    aLogo.setAttribute('href', '' );
    alogin.setAttribute('href', '#login' );
    aRegistro.setAttribute('href', '#registro' );


    
    // contenidos de texto
    aProductos.textContent = 'Productos';
    aCategorias.textContent = 'Categorias';
    aLogo.textContent = 'Inicio';
    alogin.textContent = 'Login';
    aRegistro.textContent = 'Registro';


    
    // añadir los elementos
    divHeader.append(aProductos, aCategorias, aLogo, alogin,aRegistro);
    header.append(divHeader);
}

export default header;
