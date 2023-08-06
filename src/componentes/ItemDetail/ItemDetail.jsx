import React from 'react'
import "./itemDetail.css"
import {useNavigate} from "react-router-dom"
import { FaWhatsapp } from "react-icons/fa"



function ItemDetail(product) {

  const navigate = useNavigate()

  const navigateBack = () => {
    navigate(-1)
  }  

  function sendMessage() {        
    const ownerPhoneNumber = '541166142146'; // Reemplaza con el número de teléfono del dueño del eCommerce
    const message = `¡Hola! Estoy interesado en el producto ${product.title}, que aparece aquí: ${window.location.href}`;
    const url = `https://wa.me/${ownerPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
};


  return (
    <div className='itemDetailBody'>      

      <div className='itemDetailDivContainer'>
        <img className='itemDetailImg' src={product.img} alt={product.description} />
        <h2 className='itemDetailTitle'>{product.title}</h2>
        <p className='itemDetailDescription'>{product.description}</p>
        <h2 className='itemDetailPrice'>$ {product.price}.-</h2>

        <div className='itemDetailDiv'> 

          <div className='itemDetailCounter'>             
              
              <button className='itemDetailButtonMessage' onClick={sendMessage}>Quiero esto! <FaWhatsapp/></button>
              <button className='itemDetailButtonVolver' onClick={navigateBack}>Volver</button>

          </div>

        </div>

      </div>

    </div>


  )
}

export default ItemDetail;