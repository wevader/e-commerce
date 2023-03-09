
//objetos y arrays
class Articulo{
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
    inventario = JSON.parse(localStorage.getItem("invetario"))
    for(let articulos of JSON.parse(localStorage.getItem("invetario"))){
        let articulosStorage= new Articulo(articulos.id, articulos.nombre, articulos.conexion, articulos.iluminacion, articulos.precio, articulos.imagen)
        inventario.push(articulosStorage)
    }
    }  
else{
    //si no existe
    cargarInventario() 
} 
