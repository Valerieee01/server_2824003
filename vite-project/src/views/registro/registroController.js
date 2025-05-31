import { error, success } from "../../helpers/alerts";
export const registroController = () => {
      // Declaración de variables
        const form = document.querySelector('form');
        const nombre = document.querySelector('#nombre');
        const correo = document.querySelector('#correo');
        const contrasena = document.querySelector('#contrasena');
    
        // Declaración de métodos
        const enviar = async (e) => {
            e.preventDefault()
            const data = {
                nombre: nombre.value,
                email: correo.value,
                password: contrasena.value
            }
            const request = await fetch('http://localhost:3000/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
            const response = await request.json();
            if (response.success) {
                form.reset()
                  success(response);
                location.hash = "#login";
            }else{
                console.log(response);   
                error(response);
             
            }        
        }
    
        // Declaración de eventos
        form.addEventListener('submit', enviar)    
    
}