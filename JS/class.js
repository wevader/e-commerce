
//constantes
iva = 0.17
agregar = true


//objetos y arrays
//MOUSES
/* class mouse{
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
} */

//AUDIFONOS
class articulo{
    constructor(id, nombre, conexion, iluminacion, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio,
        this.imagen = imagen
    }
}

//arrays articulos tienda
/* let productosMouses = []
let productosTeclados = []
let productosAudifonos = [] */
let inventario = []


const mouse1 = new articulo(1, "Mouse Razer", "Inalambrico", "RGB", 590, "mouse.jpg")
const mouse2 = new articulo(2, "Mouse Logitech", "Alambrico", "Azul", 650,"mouse.jpg")
const mouse3 = new articulo(3, "Mouse HyperX", "Inalambrico", "RGB", 760, "mouse.jpg")
const audifonos1 = new articulo(4, "Audifonos Razer", "Inalambrico", "Rojo", 780, "razer.jpg")
const audifonos2 = new articulo(5, "Audifonos Logitech", "Alambrico", "RGB", 450, "razer.jpg")
const audifonos3 = new articulo(6, "Audifonos HyperX", "Inalambrico", "RGB", 810, "razer.jpg")

//PUSH PRODUCTOS ARRAYS
/* productosMouses.push(mouse1, mouse2, mouse3) */
/* productosTeclados.push(teclado1, teclado2, teclado3) */
/* productosAudifonos.push() */

inventario.push(mouse1, mouse2, mouse3, audifonos1, audifonos2, audifonos3)