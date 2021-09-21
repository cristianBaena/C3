function ir(){

    var contraseña=123456789;
    var usuario= 'prueba123';

    if(document.form.usuario.value==usuario && document.form.contraseña.value==contraseña){
    alert('Bienvenido');
    window.location="principal.html";
    }
    else{
    alert('ingresa un usuario y contraseña correctos');
    }
}