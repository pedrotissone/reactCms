import React, { useState, useContext } from 'react'
import "./productCard.css"
import {Link} from "react-router-dom"
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { doc, deleteDoc } from "firebase/firestore"
import {DB, app, createDoc} from "../../services/firestore"
import { cartContext } from '../../context/cartContext'


//RENDERING CONDICIONAL DE LA PROPIEDAD DESCUENTO USANDO OPERADOR &&

function ProductCard( {title, img, description, price, id, discount, category} ) {
  
  const storage = getStorage(app) // get the storage instance
  
  const urlDetail = `/detail/${id}`;

  function aplicarCreateDoc() {
    createDoc(cardTitle, cardDescription, cardPrice, cardImg, id)
    setGuardarEdicion("Actualizar cambios")    
  }
  

  //ESTADOS PARA MODIFICAR EDICION

  const {user} = useContext(cartContext) //Si este estado es true podes editar los productos 

  const [editing, setEditing] = useState(false) //Cambia a true cuando hago click en "editar" y me aparecen los inputs para edicion

  const [cardTitle, setCardTitle] = useState(title)

  const [cardDescription, setCardDescription] = useState(description)

  const [cardPrice, SetCardPrice] = useState(price)

  const [cardImg, setCardImg] = useState(img)

  const [guardarEdicion, setGuardarEdicion] = useState("Guardar")


  //FUNCIONES PARA MODIFICAR EDICION

  const handleChangeDescription = (event) => {
    setCardDescription(event.target.value)    
  }

  const handleChangeTitle = (event) => {
    setCardTitle(event.target.value)    
  }

  const handleChangePrice = (event) => {
    SetCardPrice(parseInt(event.target.value))    
  }

  const handleChangeImg =  async (e) => {           
    const archivo = e.target.files[0]; //Referencia al archivo (le pongo el 0 porque solo voy a cargar uno sino me devuelve un array de files)
    const nombreArchivo = cardTitle + Math.floor(Math.random() * 1000) //Agrego el random porque Storage me pisa una imagen anterior con la nueva si tiene el mismo nombre     
    const archivoPath = ref(storage, nombreArchivo) // El path donde se guarda el archivo en el storage
    await uploadBytes(archivoPath, archivo) // metodo para subir el archivo (Antes solo subia el archivoPath y no me aparecia la imagen por eso le agrege otro argumento que es el archivo)
    const archivoURL = await getDownloadURL(archivoPath) // obtengo el URL de la imagen para descargarla
    setCardImg(archivoURL)
    console.log("Se subio la imagen al Storage") 
}

const handleDelete = async () => {
  await deleteDoc(doc(DB, "products", id))
  alert("Producto eliminado con éxito")
  window.location.reload()
} 

  
  if (editing === false) {
  return (    
    <div className='productCardDiv'>
            <div className='productCard'>
              <picture className='productCardImgContainter'>
              <Link to={urlDetail}> <img className='productCardImg' src={img} alt={"Tocado de novia de " + category}/></Link>
              </picture>              
              
              <h2 className='productCardTitle'>{title}</h2>
              <p className='productCardDescription'>{description}</p>
              {/* {discount && <small>Descuento: {discount}</small>} */}
              <div className='productCardFooter'>
                <p className='productCardFooterPrice'>$ {price}.-</p>
               <Link to={urlDetail}> <button className="productCardFooterButton">Detalle</button></Link>
               {user && <button onClick={() => setEditing(true)} className="productCardFooterButton">Editar</button>}            
              </div>              
                           
            </div>
    </div>
  )
  } else {
    return(      
      <div className='productCardDiv'>
            <div className='productCard'>              
              <input className='editProductCardImg' type='file' onChange={handleChangeImg}/>
              <input className='editProductCardTitle' type='text' value={cardTitle} onChange={handleChangeTitle}/>
              <input className='editProductCardDescription'type='text' value={cardDescription} onChange={handleChangeDescription}/>
              {/* {discount && <small>Descuento: {discount}</small>} */}
              <div className='productCardFooter'>
                <input className='editProductCardFooterPrice'type='number' value={cardPrice} onChange={handleChangePrice}/>
               <Link to={urlDetail}> <button className="productCardFooterButton">Detalle</button></Link>

               <div className='volverYGuardarEdicionDiv'>
               <button className='productCardFooterButton' onClick={() => setEditing(false)}>Volver</button>
               {guardarEdicion === "Guardar" ? <button onClick={() => aplicarCreateDoc() } className="productCardFooterButton">{guardarEdicion}</button> : <button className='productCardFooterButton' onClick={ () => window.location.reload()}>{guardarEdicion}</button>}
               </div>
               
               <button className='productCardFooterButton' style={{backgroundColor: "red", color: "black"}} onClick={handleDelete}>Eliminar</button>             
              </div>              
                           
            </div>
    </div>    
  )}
}

export default ProductCard