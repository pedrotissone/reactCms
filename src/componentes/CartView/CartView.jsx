import React, { useContext } from 'react'
import { cartContext } from "../../context/cartContext"
import { createOrder, exportArrayToFirestore } from '../../services/firestore'; //El exportArrayToFirestone solo lo use UNA VEZ para traer a firestore todos los productos automaticamente
import { useNavigate } from 'react-router-dom';
import MyButton from '../MyButton/MyButton';
import CartForm from './CartForm';
import "./cartView.css"

function CartView() {
    const {cart, removeItem, clear, priceInCart} = useContext(cartContext);
    const navigate = useNavigate()
    if (cart.length === 0) return <h2><center>El carrito de compras está vacío</center></h2>

    //Esto era para traer a firestore los productos automaticamente, solo lo use una vez para eso

    // function handleExport(){
    //   exportArrayToFirestore()
    // }

  async function handleCheckout(evt, data){

    const order = {
      buyer: data,
      items: cart,
      total: priceInCart(),
      date: new Date(),
    }
    const orderId = await createOrder(order)
    navigate(`/thankyou/${orderId}`)
  }

  return (
    <>
    <table className='tableCartTemplate'>
              <tr>
                <th>PRODUCTOS</th>
                <th>CANTIDAD</th>
                <th>PRECIO</th>
                <th></th>
              </tr>
              
        {cart.map((item)=>(
            <tr key={item.id}>              
              
              <td>{item.title}</td>             
              
                
                <td>{item.count}</td>             
              
                
                <td>${item.price}</td>             

            
                <td><MyButton onClick={()=> removeItem(item.id)}>Eliminar</MyButton></td>
            </tr>
        ))}
        </table>
        
        <div className="vaciarCarritoButton">
          <MyButton onClick={clear}>Vaciar Carrito</MyButton>       
          {/* <button onClick={handleExport}>borrenme pls</button> Esto era para traer a firestore los productos automaticamente */}
        </div>
        <h2 className='formInformation'><center>Completando el formulario nosotros nos pondremos en contacto para arreglar los detalles de la compra</center></h2>
        <div className='cartViewForm'>
        <CartForm onSubmit={handleCheckout}/>
        </div>
        
    </>
  )
}

export default CartView