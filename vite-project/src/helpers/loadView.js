
export const loadView = async (hash, elemento) => {
    const response = await fetch(`/src/views/${hash}`);
    const html = await response.text();
    elemento.innerHTML = html;
}


