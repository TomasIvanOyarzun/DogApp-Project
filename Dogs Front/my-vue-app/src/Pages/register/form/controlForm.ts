export interface form {
    name : string ,
    password : string, 
    confirmPassword : string,
    email : string
}

const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const errorInput = (input : form) => {
    
    let err  = {
        name : '' ,
        password : '', 
        confirmPassword : '',
        email : ''
    }
  
   if(input.name.length >= 25) {
    err.name = '*maximo 25 caracteres'
  
   } else if(input.name.length == 0) {
    err.name = '*nombre requerido'
   }
  
    
    if(input.email.length == 0 ) {
      err.email = '*email requerido'
    } else if (!regex.test(input.email)) {
        err.email = '*email invalido'
    } 
  
    if(input.password.length == 0 ) {
      err.password = '*contraseña requerida'
    } else if (input.password.length < 8 || input.password.length > 25) {
      err.password = '*minimo 8 y maximo 25 caracteres'
    } 
    
    if(input.confirmPassword !== input.password) {
      
      err.confirmPassword = '*la contraseña no coincide con la de arriba'
    } 

   return err
  }