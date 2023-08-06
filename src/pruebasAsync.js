//                                                      EJEMPLO  ASINCRÓNICO CON  CALL BACK ORDINARIO

// -------------------------------BACK-END-----------------------------
// function ApiCall(){
//     setTimeout(()=>{
//         console.log("Api call completed");
//         return {
//             id: "1",
//             name: "mi producto",
//             descripcion: "Excelente producto blabla",
//             stock: 9,
//         };
//     }, 1500);
// }

//----------------------FRONT-END (Nuestra app de React)----------------
// console.log("app iniciada")
// let respuestaApi = ApiCall()
// console.log("no apareció la apiCall")

//                                              AHORA PRUEBA CON PROMESAS

//          PROMERA CUMPLIDA A TIEMPO PORQUE NO HAY DEMORA
// function ApiCall(){
//     return new Promise((resolve, reject) => {
//         resolve({
//              id: "1",
//             name: "mi producto",
//             descripcion: "Excelente producto blabla",
//             stock: 9,
//         });
//         }, 1000)        
//     }

// console.log("app iniciada")
// let respuestaApi = ApiCall()
// console.log(ApiCall())
// console.log("no apareció la apiCall")

//                  PROMESA PENDIENTE (Le damos setTimeout para que demore el cumplimiento y figure en el console.log como pendiente)

// function ApiCall(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         resolve({
//              id: "1",
//             name: "mi producto",
//             descripcion: "Excelente producto blabla",
//             stock: 9,
//         });
//         }, 5000);
//     })        
//     }

// console.log("app iniciada")
// let promiseApi = ApiCall()
// console.log(promiseApi)
// console.log("Seguimos trabajando")

//                                              PROMESA PENDIENTE PERO AHORA NOS AVISA CUANDO SE RESOLVIO CON EL METODO THEN (Antes no nos avisaba solo nos decia que estaba pendiente)
// function ApiCall(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         resolve({
//              id: "1",
//             name: "mi producto",
//             descripcion: "Excelente producto blabla",
//             stock: 9,
//         });
//         }, 5000);
//     })        
//     }

// console.log("app iniciada")
// let promiseApi = ApiCall()
// promiseApi.then((respuesta)=>{ //ACA VA A IR LO QUE MUESTRE LA FUNCION RESOLVE (ASI QUE LE PODES PONER EL NOMBRE QUE QUIERAS, SIEMPRE VA A MOSTRAR ESO) ES LA RESPUESTA DE LA PROMESA
//     console.log("llegó la", respuesta)
// })
// console.log(promiseApi)
// console.log("Seguimos trabajando")

// LE SUMAMOS LA POSIBILIDAD DE QUE DE UN ERROR Y LO ATRAPAMOS CON .CATCH
//si le sacamos el .catch vas a ver como se rompe todo!!!
function ApiCall(){
    let errorRandom = true
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if (errorRandom != true)
            
        resolve({
             id: "1",
            name: "mi producto",
            descripcion: "Excelente producto blabla",
            stock: 9,
        });
        else{
            reject("Error en la api")
        }
        }, 5000);
    })        
    }

console.log("app iniciada")
let promiseApi = ApiCall()
promiseApi.then((respuesta)=>{ //ACA VA A IR LO QUE MUESTRE LA FUNCION RESOLVE (ASI QUE LE PODES PONER EL NOMBRE QUE QUIERAS, SIEMPRE VA A MOSTRAR ESO) ES LA RESPUESTA DE LA PROMESA
    console.log("llegó la", respuesta)
}).catch(respuestaConError=>{
    console.log(respuestaConError) //ACA VA LO QUE MUESTRE LA FUNCION REJECT
})
console.log(promiseApi)
console.log("Seguimos trabajando")