
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

//arrays articulos tienda
let productosMouses = []
let productosTeclados = []
let productosAudifonos = []


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