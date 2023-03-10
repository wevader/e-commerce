//codigo DOM
const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})
//funciones capturo div productos, inputs
let articuloDiv = document.getElementById("accesorios1")
let inputBuscador = document.getElementById("buscador")
let agregarCarrito = document.getElementById("agregarCarritoBody")
let botonCarrito = document.getElementById("carrito")
let pagoTotal = document.getElementById("pagoTotal")
let cargandoProductos = document.getElementById("cargandoProductos")
let cargandoTexto = document.getElementById("cargandoTexto")
let botonRealizarCompra = document.getElementById("botonRealizarCompra")

//Declarar Funciones

//Agregar a carrito storage

    if(localStorage.getItem("carrito")){
        
        for(let articulos of JSON.parse(localStorage.getItem("carrito"))){
            let unidadesStorage = articulos.cantidad
            let carritoNuevo = new Articulo(articulos.id, articulos.nombre, articulos.conexion, articulos.iluminacion, articulos.precio, articulos.imagen)
            carritoNuevo.cantidad = unidadesStorage
            carrito.push(carritoNuevo)
        }
    }else{
        carrito = []
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

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
    

function compraTotal(array){
    let total = array.reduce((acc, carritoCompras) => acc + (carritoCompras.precio*carritoCompras.cantidad), 0)
    //ternario
    total == 0 ?
    pagoTotal.innerHTML =`Carrito Vacio` : pagoTotal.innerHTML = `Total a pagar: $ ${total}`
    
    return total           
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
                    <p class="${articuloCarrito.precio <= 700 && "precioRebajado"}" > Precio por Unidad: $${articuloCarrito.precio} </p>
                    <p class="${articuloCarrito.cantidad}" > Unidades: ${articuloCarrito.cantidad} </p>
                    <p class="${articuloCarrito.precio <= 700 && "precioRebajado"}" > Sub Total: $${articuloCarrito.precio * articuloCarrito.cantidad} </p>
                    <button id="sumarCarrito${articuloCarrito.id}" class="btn btn-success"><i class=""></i>+1</button>
                    <button id="restarCarrito${articuloCarrito.id}" class="btn btn-danger"><i class=""></i>-1</button>
                    <button class = "btn btn-danger" id="btnEliminarArticulo${articuloCarrito.id}" href=""><img src="../imageneswep/bx-trash.svg" alt="Eliminar">
                    </button>
                    
                </div>
            </div>
                `
                compraTotal(array)
            })
            //for each elimina//sumar//restar productos
            array.forEach((articuloCarrito)=>{

                //function eliminar producto de carrito
                document.getElementById(`btnEliminarArticulo${articuloCarrito.id}`).addEventListener(`click`, ()=>{
                    //borrar del DOM
                    let cardProducto = document.getElementById(`articulo${articuloCarrito.id}`)
                    cardProducto.remove()
            
                    //eliminar del array
                    let articuloEliminar = array.find(articulo => articulo.id == articuloCarrito.id)
                    console.log(articuloEliminar)
                    //buscar indice
                    let posicion = array.indexOf(articuloEliminar)
                    console.log(posicion)
                    //splice(posicion donde trabajar, cantidad de elementos a eliminar)
                    array.splice(posicion, 1)
            
                    //eliminar storage(setear)
                    localStorage.setItem("carrito", JSON.stringify(array))
                    compraTotal(array)
                })
                
                // sumar unidad
            
                document.getElementById(`sumarCarrito${articuloCarrito.id}`).addEventListener("click", ()=>{
                    articuloCarrito.sumarUnidad()
                    localStorage.setItem("carrito", JSON.stringify(carrito))
                    cargarArticulosCarrito(array)
                })
                // restar unidad

                document.getElementById(`restarCarrito${articuloCarrito.id}`).addEventListener("click", ()=>{
                    let cantidad = articuloCarrito.restarUnidad()
                    if(cantidad < 1){
                        let cardProducto = document.getElementById(`articulo${articuloCarrito.id}`)
                        cardProducto.remove()
                        //buscar indice
                        let posicion = array.indexOf(articuloCarrito)
                        //splice(posicion donde trabajar, cantidad de elementos a eliminar)
                        array.splice(posicion, 1)
                         //eliminar storage(setear)
                        localStorage.setItem("carrito", JSON.stringify(array))
                        compraTotal(array)
                        }else{
                        localStorage.setItem("carrito", JSON.stringify(array))
                        }
                
                        cargarArticulosCarrito(array)
                    
                })
            })
            compraTotal(array)
        }
cargarArticulosCarrito(carrito)

function finalizarCompra(array){
    swalWithBootstrapButtons.fire({
        title: 'Seguro que realizara la compra?',
        text: "Compra 100% protegida",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, estoy seguro!',
        cancelButtonText: 'No, no estoy seguro!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            let totalFinalizar = compraTotal(array)
        swalWithBootstrapButtons.fire(
            'Gracias por su compra!',
            `Total de su compra $${totalFinalizar}`
        )
        carrito = []
        localStorage.removeItem("carrito")
        compraTotal(carrito)
        cargarArticulosCarrito(carrito)

        } else if (
        
        result.dismiss === Swal.DismissReason.cancel
        ) {
        swalWithBootstrapButtons.fire(
            'Compra Cancelada',
            'Sus productos siguen en carrito',
            'error'
        )
        }
    })

}

//function buscar por nombre y tipo conexion

function buscar(buscado, array){
    
    let busquedaArray = array.filter(
        (articulo)=> articulo.nombre.toLowerCase().includes(buscado.toLowerCase()) || articulo.conexion.toLowerCase().includes(buscado.toLowerCase()))
    
        busquedaArray.length == 0 ? (articuloDiv.innerHTML = `<h3>No hay coincidencias con su busqueda </h3)>`, verArticulo(busquedaArray)) 
        : (articuloDiv.innerHTML = "", verArticulo(busquedaArray))
    
}


function cargarStock(cargando){
    return new Promise((result, reject) => {
        if(cargando == true){
            setTimeout(()=>{
                result(cargandoTexto.innerText = "",
                cargandoProductos.remove(),
                verArticulo(inventario))
            }, 3000)
        }else{
            setTimeout(()=>{
                reject("Error: No se pudieron cargar articulos")
            }, 2000)
        }
    }
    )
}

cargarStock(true)
.then((result)=>{
    console.log("success")
    console.log(result)
})

.catch((err)=>{
    console.log(err)
} )


//Eventos

inputBuscador.addEventListener("input", ()=>{
    buscar(inputBuscador.value, inventario)
    })

botonCarrito.addEventListener("click", ()=>{cargarArticulosCarrito(carrito)})
botonRealizarCompra.addEventListener("click", ()=>{
    finalizarCompra(carrito)
})



