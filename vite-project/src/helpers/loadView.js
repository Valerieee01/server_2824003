
export const loadView = async (elemento) => {
    const hash = location.hash.slice(1);
    const response = await fetch(`/src/views/${hash}/index.html`);
    const html = await response.text();
    elemento.innerHTML = html;
 
}


