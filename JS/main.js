
 //Declarar Funciones

//codigo DOM
//funciones capturo div productos, inputs
let articuloDiv = document.getElementById("accesorios1")
let inputBuscador = document.getElementById("buscador")


function verArticulo(array){
    
for(let articulo of array){
    let articuloNuevo = document.createElement("div")

    articuloNuevo.innerHTML = `
    <div id="${articulo.id} " class="compras">
        <img id="imagenArticulo" src="/imageneswep/${articulo.imagen}" alt="joystick" class="joys">
        <h5>${articulo.nombre}</h5>
        <p>Iluminacion:${articulo.iluminacion} Conexion:${articulo.conexion}<br>Precio: $${articulo.precio}</p>
        <button id="btnAgregarArticulo${articulo.id}" href="" class="agregar-a-carrito">Agregar a carrito</button>
    </div>
    `
    articuloDiv.append(articuloNuevo) 
    let btnAgregarArticulo = document.getElementById(`btnAgregarArticulo${articulo.id}`)
    btnAgregarArticulo.addEventListener("click", ()=>alert(`${articulo.nombre} se agrego a carrito`))
}

}
verArticulo(inventario)

//function buscar por nombre y conexion

function buscar(buscado, array){
    
    let busquedaArray = array.filter(
        (articulo)=> articulo.nombre.toLowerCase().includes(buscado.toLowerCase()) || articulo.conexion.toLowerCase().includes(buscado.toLowerCase()))
    if (busquedaArray.length == 0){
        articuloDiv.innerHTML = `<h3>No hay coincidencias con su busqueda </h3>`
        verArticulo(busquedaArray)    
        
        
    }else{
        articuloDiv.innerHTML = ""
        verArticulo(busquedaArray)
        
}

}

inputBuscador.addEventListener("input", ()=>{
    console.log(inputBuscador.value)
    console.log(inventario)
    buscar(inputBuscador.value, inventario)
    })

