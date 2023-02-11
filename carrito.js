 //Carrito de compra

//constantes
iva = 0.17
agregar = true


//objetos y arrays
//MOUSES
class mouse{
    constructor(id, nombre, conexion, iluminacion, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio,
        this.imagen = imagen
    }
}
//TECLADOS
class teclado{
    constructor(id, nombre, conexion, iluminacion, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio,
        this.imagen = imagen
    }
}

//AUDIFONOS
class audifonos{
    constructor(id, nombre, conexion, iluminacion, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio,
        this.imagen = imagen
    }
}

const productosMouses = []
const productosTeclados = []
const productosAudifonos = []

const mouse1 = new mouse(1, "Mouse Razer", "Inalambrico", "RGB", 590, "mouse.jpg")
const mouse2 = new mouse(2, "Mouse Logitech", "Alambrico", "Azul", 650,"mouse.jpg")
const mouse3 = new mouse(3, "Mouse HyperX", "Inalambrico", "RGB", 760, "mouse.jpg")

const teclado1 = new teclado(4, "Teclado Razer", "Inalambrico", "RGB", 660, "teclado.png")
const teclado2 = new teclado(5, "Teclado Logitech", "Alambrico", "Rojo", 620, "teclado.png")
const teclado3 = new teclado(6, "Teclado HyperX", "Inalambrico", "Morado", 800, "teclado.png")

const audifonos1 = new audifonos(7, "Audifonos Razer", "Inalambrico", "Rojo", 780, "razer.jpg")
const audifonos2 = new audifonos(8, "Audifonos Logitech", "Alambrico", "RGB", 450, "razer.jpg")
const audifonos3 = new audifonos(9, "Audifonos HyperX", "Inalambrico", "RGB", 810, "razer.jpg")

//PUSH PRODUCTOS ARRAYS
productosMouses.push(mouse1, mouse2, mouse3)
productosTeclados.push(teclado1, teclado2, teclado3)
productosAudifonos.push(audifonos1, audifonos2, audifonos3)

 //Declarar Funciones

//codigo DOM
//funciones capturo div productos
let productosMousesDiv = document.getElementById("accesorios1")
let productosTecladosDiv = document.getElementById("accesorios2")
let productosAudifonosDiv = document.getElementById("accesorios3")

//
function articuloAgregado(){
    alert("Articulo Agregado a Carrito")
}

//mouses div
function verMouses(array){
    
for(let mouse of array){
    let articuloNuevo = document.createElement("div")

    articuloNuevo.innerHTML = `
    <div id ="${mouse.id} " class="compras" >
        <img src="/imageneswep/${mouse.imagen} " alt="joystick" class="joys">
        <h4>${mouse.nombre}</h4>
        <p>Iluminacion: ${mouse.iluminacion} - Conexion: ${mouse.conexion} <br> Precio: ${mouse.precio} MNX </p>
        <button id="btnAgregar" href="" class="agregar-a-carrito">Agregar a carrito</button>
    </div>
    `
    productosMousesDiv.append(articuloNuevo)  

    }

}

//teclados div

function verTeclados(array){
    
for(let teclado of array){
    let articuloNuevo = document.createElement("div")

    articuloNuevo.innerHTML = `
    <div id="${teclado.id} " class="compras">
        <img src="/imageneswep/${teclado.imagen}" alt="joystick" class="joys">
        <h4>${teclado.nombre} </h4>
        <p>Iluminacion: ${teclado.iluminacion} - Conexion: ${teclado.conexion} <br> Precio: ${teclado.precio} MNX </p>
        <button id="btnAgregarTeclado" href="" class="agregar-a-carrito">Agregar a carrito</button>
    </div>
    `
    productosTecladosDiv.append(articuloNuevo)    

    }

}
//audifonos div
function verAudifonos(array){
    
    for(let audifonos of array){
        let articuloNuevo = document.createElement("div")

    articuloNuevo.innerHTML = `
        <div id="${audifonos.id} " class="compras">
            <img src="/imageneswep/${audifonos.imagen} " alt="joystick" class="joys">
            <h4>${audifonos.nombre} </h4>
            <p>Iluminacion: ${audifonos.iluminacion} - Conexion: ${audifonos.conexion} <br> Precio: ${audifonos.precio} MNX </p>
            <button id="btnAgregarAudifonos" href="" class="agregar-a-carrito">Agregar a carrito</button>
        </div>
        `
    productosAudifonosDiv.append(articuloNuevo)  
    
    }
    
}

verMouses(productosMouses)
verTeclados(productosTeclados)
verAudifonos(productosAudifonos)

//Eventos

let btnCarrito = document.querySelector("#btnAgregar") 

btnCarrito.addEventListener("click", articuloAgregado)