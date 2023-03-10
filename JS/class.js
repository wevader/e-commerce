
//objetos y arrays
class Articulo{
    constructor(id, nombre, conexion, iluminacion, precio, imagen){
        this.id = id,
        this.nombre = nombre,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio,
        this.imagen = imagen,
        this.cantidad = 1
    }
    sumarUnidad(){
        this.cantidad += 1
    }
    restarUnidad(){
        this.cantidad = this.cantidad - 1
        return this.cantidad
    } 
}

//arrays articulos tienda
let carrito = []
let inventario = []


const cargarInventario = async () => {
const resp = await fetch("../stock.json")
const data = await resp.json()
for(let articulos of data){
    let articulosNuevos = new Articulo(articulos.id, articulos.nombre, articulos.conexion, articulos.iluminacion, articulos.precio, articulos.imagen)
    inventario.push(articulosNuevos)
}
console.log(inventario)
localStorage.setItem("inventario", JSON.stringify(inventario))
}

if(localStorage.getItem("inventario")){
    //existe algo en storage
    for(let articulos of JSON.parse(localStorage.getItem("inventario"))){
        let articulosStorage= new Articulo(articulos.id, articulos.nombre, articulos.conexion, articulos.iluminacion, articulos.precio, articulos.imagen)
        inventario.push(articulosStorage)
    }
    console.log(inventario)
    }else{
    //si no existe
    cargarInventario() 
} 
