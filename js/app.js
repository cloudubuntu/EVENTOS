import{campoRequerido,validarNumeros,validarURL,validarGeneral} from './validaciones.js'
import{Producto} from './productoClass.js';
//AGREGADO POR ALAN
let numeros=JSON.parse(localStorage.getItem('arregloNumerosKey')) || [];
console.log(numeros);
//traer el elemento requerido desde el html
/*let campoCodigo = document.querySelector('#codigo');*/
//correccion


let campoProducto = document.querySelector('#producto');
let campoDescripcion = document.querySelector('#descripcion');
let campoCantidad = document.querySelector('#cantidad');
let campoURL = document.querySelector('#url');
let formularioProducto = document.querySelector('#formProducto');
//si hay algo en el arreglo, quiero guardarlo. Si no, que sea un arreglo vacio.
let listaProductos = JSON.parse(localStorage.getItem('arregloProductosKey')) || [];
console.log(listaProductos)




// asociar un evento a un elemento html
/*campoCodigo.addEventListener('blur', () => {
    campoRequerido(campoCodigo)
}); // cuando la funcion no tiene parametros,cono solo poner el nombre de la funcion es necesario. Si no, debemos poner una funcion anonima, y ahi llamar a la nueva funcion*/
campoProducto.addEventListener('blur', () => {
    campoRequerido(campoProducto)
});
campoDescripcion.addEventListener('blur', () => {
    campoRequerido(campoDescripcion)
});
campoCantidad.addEventListener('blur', () => {
    validarNumeros(campoCantidad)
});
campoURL.addEventListener('blur', () => {
    validarURL(campoURL)
});
formularioProducto.addEventListener('submit', guardarProducto);

function guardarProducto(e){
    // verificar que todos los datos sean validados
        e.preventDefault()
        if(validarGeneral(campoProducto,campoDescripcion,campoCantidad,campoURL)){
            //crear un producto
            crearProducto();
        }
    
}

function crearProducto(){
    // crear un objeto producto
    let productoNuevo =new Producto(generarNumero(), campoProducto.value, campoDescripcion.value,campoCantidad.value,campoURL.value);
    //guardar el obj dentro del arreglo del producto
    listaProductos.push(productoNuevo);
    console.log(listaProductos)
    //limpiar formulario
    limpiarFormulario();
    //guardar el arreglo en localStorage
    

}

function limpiarFormulario(){
    formularioProducto.reset();
    //resetear las clases
    //campoCodigo.className = 'form-control'
    campoProducto.className = 'form-control'
    campoDescripcion.className = 'form-control'
    campoCantidad.className = 'form-control'
    campoURL.className = 'form-control'
    //GUARDAR EL ARREGLO DENTRO DE PRODUCTOS DENTRO DEL LOCALSTORAGE
    guardarLocalStorage();
}

function guardarLocalStorage() {
    localStorage.setItem('arregloProductosKey', JSON.stringify(listaProductos))
    localStorage.setItem('arregloNumerosKey', JSON.stringify(numeros));
}


//FUNCION CORREJIDA
function generarNumero() {
    
    do{
        let numero = Math.floor(Math.random() * 999999 + 1);
        if (numeros.includes(numero)) {
            console.log('repetido')
        } else {
            numeros.push(numero);
            numeros.sort()
            return numero;
        } 
    }while(numeros.includes(numero))
    
}

