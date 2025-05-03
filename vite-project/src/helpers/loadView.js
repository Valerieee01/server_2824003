
export const loadView = async (hash, template) => {
    const response = await fetch(`/src/views/${template}`);
    const html = await response.text();
    hash.innerHTML = html;
}


