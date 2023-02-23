

//codigo DOM
//funciones capturo div productos, inputs
let articuloDiv = document.getElementById("accesorios1")
let inputBuscador = document.getElementById("buscador")
let agregarCarrito = document.getElementById("agregarCarritoBody")
let botonCarrito = document.getElementById("carrito")
let pagoTotal = document.getElementById("pagoTotal")
//Agregar a carrito storage
let productosEnCarrito
    if(localStorage.getItem("carrito")){
        productosEnCarrito += JSON.parse(localStorage.getItem("carrito"))
    }else{
        productosEnCarrito = []
        localStorage.setItem("carrito", productosEnCarrito)
    }
//Declarar Funciones

/* function actualizarCarrito(){
    
    } */
    
function agregarArticulo(articulo){
	Swal.fire({
		position: 'center',
		icon: 'success',
		title: 'Articulo Agregado a Carrito',
		showConfirmButton: false,
		timer: 1500
	})
        //sumar productos en carrito
        carrito.push(articulo)
        //setear carrito
        localStorage.setItem("carrito", JSON.stringify(carrito))
    
    }  



		//funcion cargar articulos en carrito
function cargarArticulosCarrito(array){
    agregarCarrito.innerHTML = ""
    array.forEach((articuloCarrito) => {
		agregarCarrito.innerHTML += `
			<div class="card" id="articulo${articuloCarrito.id}" style="max-width: 540px;">
			    <div class="compras">
					<img id="imagenArticulo" src="/imageneswep/${articuloCarrito.imagen}" alt="joystick" class="joys">
					<h5>${articuloCarrito.nombre}</h5>
					<p> Iluminacion:${articuloCarrito.iluminacion} Conexion:${articuloCarrito.conexion}</p>
					<p class="${articuloCarrito.precio <= 700 && "precioRebajado"}" > Precio: $${articuloCarrito.precio} </p>
					<button class = "btn btn-danger" id="btnEliminarArticulo${articuloCarrito.id}" href=""><img src="../imageneswep/bx-trash.svg" alt="Eliminar">
                    </button>
				</div>
			</div>
				 `
			})
		
		
		
		}

function compraTotal(array){
    let acumulador = 0
    for(let articulo of array){
        acumulador = acumulador + articulo.precio
    }
    pagoTotal.innerHTML = `Total a Pagar: $ ${acumulador}`
    return acumulador
}
function verArticulo(array){
    
for(let articulo of array){
    let articuloNuevo = document.createElement("div")

    articuloNuevo.innerHTML = `
    <div id="${articulo.id} " class="compras">
        <img id="imagenArticulo" src="/imageneswep/${articulo.imagen}" alt="joystick" class="joys">
        <h5>${articulo.nombre}</h5>
        <p> Iluminacion:${articulo.iluminacion} Conexion:${articulo.conexion}</p>
        <p class="${articulo.precio <= 700 && "precioRebajado"}" > Precio: $${articulo.precio} </p>
        <button id="btnAgregarArticulo${articulo.id}" href="" class="agregar-a-carrito">
        <img src="../imageneswep/bxs-cart-add.svg" alt="agregar a carrito">
        </button>
    </div>
    `
    articuloDiv.append(articuloNuevo) 
		let btnAgregarCarrito = document.getElementById(`btnAgregarArticulo${articulo.id}`)
		btnAgregarCarrito.addEventListener("click",()=> {agregarArticulo(articulo)})
		
    
}



}

//function buscar por nombre y conexion

function buscar(buscado, array){
    
    let busquedaArray = array.filter(
        (articulo)=> articulo.nombre.toLowerCase().includes(buscado.toLowerCase()) || articulo.conexion.toLowerCase().includes(buscado.toLowerCase()))
    
        busquedaArray.length == 0 ? (articuloDiv.innerHTML = `<h3>No hay coincidencias con su busqueda </h3)>`, verArticulo(busquedaArray)) 
        : (articuloDiv.innerHTML = "", verArticulo(busquedaArray))
    
}
verArticulo(inventario)
compraTotal(carrito)


//Eventos

// 

inputBuscador.addEventListener("input", ()=>{
    buscar(inputBuscador.value, inventario)
    })

botonCarrito.addEventListener("click", ()=>{cargarArticulosCarrito(carrito)})
    
//imprimir articulos en carrito
/* 
btnAgregarCarrito.addEventListener("click", () => {
	cargarArticulosCarrito(carrito)
}) */
