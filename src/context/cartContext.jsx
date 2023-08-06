//IMPORTANTE: CADA CAMBIO QUE SE REALIZE EN EL CONTEXT SE PROPAGA AUTOMATICAMENTE A TODOS LOS COMOPONENTES QUE CONSUMEN DICHO CONTEXTO, SIN NECESIDAD DE USAR USEEFFECT O NADA.

import { createContext, useState } from "react";
import { app } from "../services/firestore";
import {getAuth, onAuthStateChanged} from "firebase/auth"

 export const cartContext = createContext() //Importamos e inicializamos el context con createContext

 export function CartContextProvider(props){ //Esto SI es un componente (un Provider)
    
    const auth = getAuth(app)  

    const [cart, setCart] = useState([]);

    function addToCart(product, count){       

        let itemAlreadyInCart = cart.findIndex(
            (itemInCart) => itemInCart.id === product.id
        );                   
        
        let newCart = [ ...cart];
        
        if (itemAlreadyInCart !== -1){
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart)
        } else {
            newCart.push({...product, count})            
            setCart(newCart) // otra forma es => setCart([...cart,{...product,count}])            
        }       
    }

    function itemsInCart(){ //Podria también usar el metodo reduce
        let total = 0
        cart.forEach((item) => (total = total + item.count))
        if (total !== 0)
        return total
    }

    function clear(){
        let clearCart = []
        setCart(clearCart)
    }

    function removeItem(id){
        setCart(cart.filter((prod)=> prod.id !== id))
    }
    
    function priceInCart(){
        let totalPrice = 0
        cart.forEach((producto) => totalPrice = totalPrice + (producto.price * producto.count ))
        return totalPrice
    }

    const [user, setUser] = useState(null)

    function checkLogin() {
         onAuthStateChanged(auth, (data) => {
            //  console.log(data)
            if (auth.currentUser != null) {            
                setUser(true)
              } else {            
                setUser(null)
            }
          })          
    }

    
    const value = {                
        itemsInCart,
        addToCart,
        cart,
        clear,
        removeItem,
        priceInCart,
        user,
        setUser,
        checkLogin
        
    }
    //La prop value es fundamental, a esa prop yo le doy un OBJETO con todas las variables que quiero que sean accecibles para mi App
    return(
        <cartContext.Provider value={value}> 
            {props.children}
        </cartContext.Provider> 
    )   

}