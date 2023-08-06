import React, { useContext } from 'react' //Agrego un Hook
import "./cartWidget.css"
import { cartContext } from "../../context/cartContext" //Importo context

function CartWidget(props) {

  const miContext = useContext(cartContext) //Me conecto con el contexto que yo le diga y me trae su value (Su contenido)
  // console.log(miContext)

  return (
    <div>
      <div className="carrito">
        <img src="/img/carritoCompras.svg" alt="carrito de compras" />
        <span className='carritoNumber'>{miContext.itemsInCart()}</span>
      </div>
    </div>
  )
}

export default CartWidget