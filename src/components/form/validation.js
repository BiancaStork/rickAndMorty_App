const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
const regexPassword = /^(?=\w*\d)\S{6,10}$/;



export function validation(userData){
    const errors =[];
    if(!regexEmail.test(userData.username)) errors.username = 'el UserName debe ser un email';
    else if(!userData.username) errors.username= 'el UserName no puede estar vacio';
    else if(!userData.username.length > 35) errors.username= 'el UserName no puede tener mas de 35 caracteres';
    if(!regexPassword.test(userData.password)) errors.password='el password debe contener al menos un numero';
    else if (userData.password.length <6 && userData.password.length >10) errors.password='el password debe tener entre 6 y 10 caracteres'

    //retornar el error
    return errors;
    
}