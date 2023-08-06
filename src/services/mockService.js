//                                  -----------------------BACK-END---------------------------
//Vamos a trbajar sin errores por eso quito el if y el reject de los parametros de la promesa

import products from "../data/data";

function getItems(idCategory){    
    return new Promise((resolve) => {
        if (idCategory === undefined){        
        setTimeout(()=>{            
        resolve(products); //esta promise me trae mis productos de data.js cuando resuelve           
        }, 2000);
        } else{
            setTimeout(()=>{
            let itemsRequested = products.filter( (item) => item.category === idCategory)                
            resolve(itemsRequested); //esta promise me trae mis productos de data.js cuando resuelve           
            }, 2000);
        }
    })        
}
//Exporto funcion (named export != default)
export function getSingleProduct(idParam){ //Aca hago lo mismo pero devuelvo solo 1 producto    
    return new Promise((resolve) => {
        let itemRequested = products.find( (item) => item.id === Number(idParam) ) //Hay que parsearlo a numero porque estamos comparando la ruta url que es un string con el id que es un numero
        setTimeout(()=>{            
        resolve(itemRequested); //esta promise me trae mis productos de data.js cuando resuelve           
        }, 2000);
    })        
}

    export default getItems;