

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
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }else{
        let carrito = []
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
    let total = array.reduce((acc, carritoCompras) => acc + carritoCompras.precio, 0)
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
            `Total de su compra ${totalFinalizar}`,
            
        )
        carrito = []
        localStorage.removeItem("carrito")
        total = 0

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

compraTotal(carrito)

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
    console.log("tu catalogo es:")
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


