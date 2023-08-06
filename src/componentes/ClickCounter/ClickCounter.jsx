import React from 'react'
import "./clickCounter.css"
import MyButton from "../MyButton/MyButton"


// let stock = 10 //AHORA LE PASO EL STOCK COMO PROP PARA QUE SEA DINAMICO

function ClickCounter(props) {
    let [count, setCount] = React.useState(1) //Le doy 1 como valor inicial al estado del componente

    function handleClickMas(){
        if (count < props.stock){
            setCount(count + 1)
        }        
    }

    function handleClickMenos(){
        if (count > 1){
            setCount(count -1)
        }        
    }
      
   

  return (
  
    <div className='clickCounterDiv'>
        <div className='clickCounterButtons'>
        <MyButton onClick={handleClickMenos} className='clickCounterMenos'>-</MyButton>
        <div className='clickCounter'>{count}</div>
        <MyButton onClick={handleClickMas} className='clickCounterMas'>+</MyButton>
        </div>
 
        {/* <button className='clickCounterButtonAgregarAlCarrito' onClick={()=> props.handleAddToCart(count)}>Quiero esto!</button> */}
        <button className='clickCounterButtonAgregarAlCarrito' onClick={()=> props.sendMessage(count)}>Quiero esto!</button>
    
    </div>


  )
}

export default ClickCounter