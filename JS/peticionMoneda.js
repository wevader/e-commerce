let cambioMoneda = document.getElementById("cambioMoneda")
fetch("https://www.banxico.org.mx/SieAPIRest/service/v1/series")
.then((res)=> res.json())
.then((data)=>{
    console.log(data)
    for(let moneda of data){
        let nuevaMoneda = document.createElement("div")
        nuevaMoneda.innerHTML =`
        `
    }
})