import "./main.css";

const divApp = document.querySelector('#app');
const header = document.createElement('header');
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
aCategorias.setAttribute('href', '' )
aProductos.setAttribute('href', '' )

// contenidos de texto
aProductos.textContent = 'Productos';
aCategorias.textContent = 'Categorias';


// añadir los elementos
divHeader.append(aProductos, aCategorias);
header.append(divHeader);
divApp.append(header);



/**
 * Eventos
 */


const loadView = () => {
   console.log(location);
   const hash = location.hash.slice(1);
   console.log(hash);
   fetch(`/vite-project/src/views/categorias/categorias.html`)
   

   
}


window.addEventListener('hashchange', () => {
  console.log('Se modifico la ruta');
  
})


