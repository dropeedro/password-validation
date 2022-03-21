
//Bloquear boton de "Verificar" desde el inicio ya que el campo 'text' está vacío
bloquearVerificar()
function bloquearVerificar(){
    btnValidar.disabled = true;
    //console.log('Campo vacio')
}


function getPassword() {
    const text = document.querySelector('#password').value;

    const btnValidar = document.querySelector('#btnValidar');

    const largo = document.querySelector('#largo');
    const minuscula = document.querySelector('#minuscula');
    const mayuscula = document.querySelector('#mayuscula');
    const numero = document.querySelector('#numero');
    const especial = document.querySelector('#especial');
    const repite = document.querySelector('#repite');

    //Agrega y quita clases según pase validaciones
    verificaLargo(text) ? largo.classList.add('list-group-item-success') : largo.classList.remove('list-group-item-success');
    verificaMinusculas(text) ? minuscula.classList.add('list-group-item-success') : minuscula.classList.remove('list-group-item-success');
    verificaMayusculas(text) ? mayuscula.classList.add('list-group-item-success') : mayuscula.classList.remove('list-group-item-success');
    verificaNumeros(text) ? numero.classList.add('list-group-item-success') : numero.classList.remove('list-group-item-success');
    verificaEspecial(text) ? especial.classList.add('list-group-item-success') : especial.classList.remove('list-group-item-success');

    //Verificar que el campo no esté vacío antes de validar contraseña
    if(!verificaVacio(text)){
        btnValidar.disabled = false;
    }else{
        btnValidar.disabled = true;
    }

    //Verifica que no haya repetición de caracteres.
    if(!(verificaRepeticion(text))){
        repite.classList.remove('list-group-item-danger');
        repite.classList.add('list-group-item-success');
        btnValidar.disabled = false;
    }else{
        repite.classList.remove('list-group-item-success');
        repite.classList.add('list-group-item-danger');
        btnValidar.disabled = true;
    }
    
    if(verificaLargo(text) && verificaMinusculas(text) && verificaMayusculas(text) && verificaNumeros(text) && verificaEspecial){
        return true;
    }else{
        return false;
    }
}

//Funciones con expresiones regulares para dar condiciones a la contraseña
function verificaVacio(text){
    return /^$/.test(text);
}
function verificaLargo(text){
    return text.length >= 8;
}

function verificaMinusculas(text) {
    return /(?=.*[a-z].*[a-z])/.test(text);
}

function verificaMayusculas(text) {
    return /[A-Z]{1,}/g.test(text);
}

function verificaNumeros(text) {
    return /(?=.*[0-9].*[0-9].*[0-9].*[0-9].*[0-9])/.test(text);
}

function verificaEspecial(text) {
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>.\?]/g.test(text);
}
function verificaRepeticion(text) {
    return /([a-z0-9])\1{1,}/i.test(text);
}

//Boton para mostrar la contraseña
function mostrarContraseña() {
    const textInput = document.querySelector('#password');
    const mostrar = document.querySelector('#mostrar');

    textInput.type === "password" ? textInput.type = "text" : textInput.type = "password";
    mostrar.textContent === "Mostrar Contraseña" ? mostrar.textContent = "Ocultar Contraseña" : mostrar.textContent = "Mostrar Contraseña";
}


//Verifica si la contraseña cumple con todos los requisitos
function verificarContraseña(){
    const text = document.querySelector('#password').value;
    if(getPassword()){
        alertify.alert('Contraseña valida',"La contraseña '"+text+"' es valida")
    }else{
        alertify.alert('Contraseña invalida',"La contraseña '"+text+"' es invalida. No cumple con todos los requisitos, intente nuevamente")
    }

}