import React from 'react'
import {useParams} from "react-router-dom"
import "./thankyou.css"

function Thankyou() {
    const idOrder = useParams().idOrder
  return (
    <div className='thankYouDiv'>
        <h1 className='thankYouAgradecimiento'>El pedido fue realizado con éxito</h1>
        <h3 className='thankYouCodigo'>El id del mismo es: <span className='thankYouOrder'>{idOrder}</span></h3>

    </div>
  )
}

export default Thankyou