export const setData = (data) => {
    console.log(data); 
    // console.log(data.accessToken);
    // console.log(data.refreshToken);
    localStorage.setItem("accessToken",data.accessToken);
    localStorage.setItem("refreshToken",data.refreshToken);


}

export const getData = () => {
    
}

export const estaAutenticado = () => {
    if (localStorage.accessToken === undefined) {        
        // alert("Usuario no autenticado");
        return false
    }else{
        // alert("Usuario autenticado");
        return true;
    }
}
