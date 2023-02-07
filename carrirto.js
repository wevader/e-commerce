//Carrito de compra
//Declarar Funciones
const subTotal = (m1, m2, m3, t1, t2, t3, a1, a2, a3) => (m1 + m2 + m3 + t1 + t2 + t3 + a1 + a2 + a3)
const pagoTotal = (sb, i) => (sb + (sb*i))


//menu principal
const producto = function (seleccion){
    seleccion = prompt(`Que desea comprar: 
    1. Mouse
    2. Teclado
    3. Audifonos
    4. Pagar
    5. Salir`)
    return seleccion

}
 //cantidad de productos a comprar
const productoCompra = function (numUnidades){
    numUnidades = prompt ("Cuantas unidades desea comprar: ")
    return numUnidades
}

//seleccion de producto
const producto1 = function (idProducto){
    idProducto = prompt (`Seleccione la id del producto que desea comprar: `)
    return idProducto
}

//menu de mouses
function mostrarProductos(array){
    console.log("Los productos disponibles son: ")
    for (let elemento of array){
        console.log(elemento.id, elemento.marca, elemento.conexion, elemento.iluminacion, elemento.precio)
    }
}

//funcion constructora
//base de datos de productos en existencia
class mouse{
    constructor(id, marca, conexion, iluminacion, precio){
        this.id = id,
        this.marca = marca,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio
    }
}

class teclado{
    constructor(id, marca, conexion, iluminacion, precio){
        this.id = id,
        this.marca = marca,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio
    }
}

class audifonos{
    constructor(id, marca, conexion, iluminacion, precio){
        this.id = id,
        this.marca = marca,
        this.conexion = conexion,
        this.iluminacion = iluminacion, 
        this.precio = precio
    }
}
//constantes
// productos
iva = 0.17
comprar = true
totalMouse1 = 0
pagarMouse1 = 0
totalMouse2 = 0
pagarMouse2 = 0
totalMouse3 = 0
pagarMouse3 = 0
totalTeclado1 = 0
pagarTeclado1 = 0
totalTeclado2 = 0
pagarTeclado2 = 0
totalTeclado3 = 0
pagarTeclado3 = 0
totalAudifonos1 = 0
pagarAudifonos1 = 0
totalAudifonos2 = 0
pagarAudifonos2 = 0
totalAudifonos3 = 0
pagarAudifonos3 = 0

const mouse1 = new mouse(1, "Razer", "inalambrico", "rbg", 590)
const mouse2 = new mouse(2, "Logitech", "alambrico", "azul", 650)
const mouse3 = new mouse(3, "HyperX", "inalambrico", "rbg", 760)

const teclado1 = new teclado(4, "Razer", "inalambrico", "rbg", 660)
const teclado2 = new teclado(5, "Logitech", "alambrico", "rojo", 620)
const teclado3 = new teclado(6, "HyperX", "inalambrico", "morado", 800)

const audifonos1 = new audifonos(7, "Razer", "Inalambrico", "rojo", 780)
const audifonos2 = new audifonos(8, "Logitech", "Alambrico", "rbg", 450)
const audifonos3 = new audifonos(9, "HyperX", "Inalambrico", "rbg", 810)


//array de productos
const mouses = []
const teclados = []
const audifonoss = []
mouses.push(mouse1, mouse2, mouse3)
teclados.push(teclado1, teclado2, teclado3)
audifonoss.push(audifonos1, audifonos2, audifonos3)

//do while para realizar compra
    do{
    let seleccion2 = producto()
    
    
    
    //seleccion de productos
    switch(seleccion2){
        case "1":
            mostrarProductos(mouses)
            let idMouse = producto1()
            switch(idMouse){
                case "1":
                    let numMouse1 = productoCompra()
                    totalMouse1 = totalMouse1 + numMouse1
                    pagarMouse1 = pagarMouse1 + (mouse1.precio * totalMouse1)
                    console.log("SubTotal:" + pagarMouse1)
                    break
                case "2":
                    let numMouse2 = productoCompra()
                    totalMouse2 = totalMouse2 + numMouse2
                    pagarMouse2 = pagarMouse2 + (mouse2.precio * totalMouse2)
                    console.log("SubTotal:" + pagarMouse2)
                    break
                case "3":
                    let numMouse3 = productoCompra()
                    totalMouse3 = totalMouse3 + numMouse3
                    pagarMouse3 = pagarMouse3 + (mouse3.precio * totalMouse3)
                    console.log("SubTotal:" + pagarMouse3)
                    break
                default:
                    Alert("Producto no existe")
                    break
            }
            
            break

        case "2":
            mostrarProductos(teclados)
            let idTeclado = producto1()
            switch(idTeclado){
                case "4":
                    let numTeclado1 = productoCompra()
                    totalTeclado1 = totalTeclado1 + numTeclado1
                    pagarTeclado1 = pagarTeclado1 + (teclado1.precio * totalTeclado1)
                    console.log("SubTotal:" + pagarTeclado1)
                    break
                case "5":
                    let numTeclado2 = productoCompra()
                    totalTeclado2 = totalTeclado2 + numTeclado2
                    pagarTeclado2 = pagarTeclado2 + (teclado2.precio * totalTeclado2)
                    console.log("SubTotal:" + pagarTeclado2)
                    break
                case "6":
                    let numTeclado3 = productoCompra()
                    totalTeclado3 = totalTeclado3 + numTeclado3
                    pagarTeclado3 = pagarTeclado3 + (teclado3.precio * totalTeclado3)
                    console.log("SubTotal:" + pagarTeclado3)
                    break
                default:
                    Alert("Producto no existe")
                    break
            }
            break

        case "3":
            mostrarProductos(audifonoss)
            let idAudifonos = producto1()
            switch(idAudifonos){
                case "7":
                    let numAudifonos1 = productoCompra()
                    totalAudifonos1 = totalAudifonos1 + numAudifonos1
                    pagarAudifonos1 = pagarAudifonos1 + (audifonos1.precio * totalAudifonos1)
                    console.log("SubTotal:" + pagarAudifonos1)
                    break
                case "8":
                    let numAudifonos2 = productoCompra()
                    totalAudifonos2 = totalAudifonos2 + numAudifonos2
                    pagarAudifonos2 = pagarAudifonos2 + (audifonos2.precio * totalAudifonos2)
                    console.log("SubTotal:" + pagarAudifonos2)
                    break
                case "9":
                    let numAudifonos3 = productoCompra()
                    totalAudifonos3 = totalAudifonos3 + numAudifonos3
                    pagarAudifonos3 = pagarAudifonos3 + (audifonos3.precio * totalAudifonos3)
                    console.log("SubTotal:" + pagarAudifonos3)
                    break
                default:
                    Alert("Producto no existe")
                    break
            }
            break
        
        case "4":
            subTotal(pagarMouse1, pagarMouse2, pagarMouse3, pagarTeclado1, pagarTeclado2, pagarTeclado3, pagarAudifonos1, pagarAudifonos2, pagarAudifonos3 )
            alert(`Pago Total sin IVA: ${subTotal(pagarMouse1, pagarMouse2, pagarMouse3, pagarTeclado1, pagarTeclado2, pagarTeclado3, pagarAudifonos1, pagarAudifonos2, pagarAudifonos3 )}`)
            alert(`Total a Pagar con IVA: ${pagoTotal(subTotal(pagarMouse1, pagarMouse2, pagarMouse3, pagarTeclado1, pagarTeclado2, pagarTeclado3, pagarAudifonos1, pagarAudifonos2, pagarAudifonos3 ), iva)}`)
            alert("Gracias por su compra!")
            break

        case "5":
            alert("Gracias por visitar nuestra tienda")
            comprar = false
            break

        default:
            alert("Error: El producto no existe")
            break
    }

}while(comprar)

