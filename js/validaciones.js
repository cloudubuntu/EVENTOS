// export function campoRequerido(input) {
//     // console.log('Desde la funcion campo requerido');
//     if (input.value.trim().lenght > 0) {
//         //console.log('aqui esta todo ok');
//         input.className = 'form-control is-valid';
//         return true;
//     } else {
//         //console.log('aqui esta todo mal');
//         input.className = 'form-control is-invalid';
//         return false;
//     }
// }
//funcion copiada de alan----------------------------
export function campoRequerido(input) {
    //console.log('Desde la funcion campo requerido')
    if (input.value.trim().length > 0) {
      //la funcion trim elimina un espacio vacio solanente al inicio
      //console.log('aqui esta todo bien');
      input.className = "form-control is-valid";
      return true;
    } else {
      //console.log('aqui muestro un error');
      input.className = "form-control is-invalid";
      return false;
    }


  }
  //--------------------------------------

 export function validarNumeros(input) {
    // crear expresion regular
    let patron = /^[0-9]{1,3}$/;
    //el metodo test devuelve true, false
    // expresionregular.test(texto a validar)
    if (patron.test(input.value)) {
        //cumple con la expreson regular
        input.className = 'form-control is-valid';
        return true;
    } else {
        input.className = 'form-control is-invalid';
        return false;
    }

}

export function validarURL(input) {
    // crear expresion regular
    let patron = /^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/

    //el metodo test devuelve true, false
    // expresionregular.test(texto a validar)
    if (patron.test(input.value)) {
        //cumple con la expreson regular
        input.className = 'form-control is-valid';
        return true
    } else {
        input.className = 'form-control is-invalid';
        return false
    }
}
//se modifico quitando campoCodigo
export function validarGeneral(campoProducto,campoDescripcion,campoCantidad,campoURL) {
    //prevenir el actualizar del submit
    console.log('desde la funcoin validar general');

    let alerta = document.getElementById('msj');

    if (campoRequerido(campoProducto) &&
        campoRequerido(campoDescripcion) &&
        validarNumeros(campoCantidad) &&
        validarURL(campoURL)
    ) {
        console.log('los datos estan listos para ser enviados')
        alerta.className = 'alert alert-info my-5 d-none';
        return true;
    } else {
        console.log('los datos estan mal');
        alerta.className = 'alert alert-info my-5';
        return false;
    }
}