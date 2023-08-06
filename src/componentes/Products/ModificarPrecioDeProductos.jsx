import React from "react";
import { useState, useEffect } from "react";
import { DB, getItems } from "../../services/firestore";
import { collection, doc, updateDoc } from "firebase/firestore";

function ModificarPrecioDeProductos() {

    // const updatedProducts = []

    const [allProducts, setAllProducts] = useState([]) //Me traigo los productos a un estado para poderlos usar y actualizar después

    async function traerProductos() {
        const respuesta = await getItems()
        setAllProducts(respuesta)        
    }

    useEffect(
        () => {
            traerProductos()            
        }, []
    )    

    const [category, setCategory] = useState("")

    const [porcentaje, setPorcentaje] = useState(0)

    const handleCategory = (e) => {
        setCategory(e.target.value)
    }

    const handlePorcentaje = (e) => {
        setPorcentaje(parseInt(e.target.value))
    }

    const actualizarPrecios = (selecCategory) => {             
        if (selecCategory === "Todos") {
            allProducts.forEach( async (product) => {
                const nuevoPrecio = Math.floor((product.price * porcentaje) / 100)           
                // updatedProducts.push({...product, price: nuevoPrecio + product.price})
                const collectionRef = doc(DB, "products", product.id)                
                await updateDoc(collectionRef, {price: nuevoPrecio + product.price})                
            })

            alert("Se realizó exitosamente la modificación de precios")            

        } else {
            allProducts.forEach( async (product) => {
                if (category && product.category !== selecCategory) {
                    return;
                }

                const nuevoPrecio = Math.floor((product.price * porcentaje) / 100)           
                // updatedProducts.push({...product, price: nuevoPrecio + product.price})
                const collectionRef = doc(DB, "products", product.id)                
                await updateDoc(collectionRef, {price: nuevoPrecio + product.price})                
            });

            alert("Se realizó exitosamente la modificación de precios")
            
        }        
    }


    const submitHandler = (e) => {
        e.preventDefault()
        actualizarPrecios(category)
        // console.log(allProducts)
        // console.log(updatedProducts)              
    }    


    return(
        <>

        <h3 className="titleForm">Modificar precio de Productos</h3>
        <div className="crearNuevoProductoDiv">
            <form className="crearNuevoProductoForm" onSubmit={submitHandler}>
            
            <label className="crearNuevoProductoLabel">Seleccione la categoria del producto</label>           
           
            <label className="crearNuevoProductoLabel" htmlFor="Flores preservadas">Flores preservadas</label>
            <input type="radio" id="Flores preservadas" name="category" value="Flores preservadas" checked={category === "Flores preservadas"} onChange={handleCategory}></input>           
           
            <label className="crearNuevoProductoLabel" htmlFor="Piedras">Piedras</label>
            <input type="radio" id="Piedras" name="category" value="Piedras" checked={category === "Piedras"} onChange={handleCategory}></input>          
           
            <label className="crearNuevoProductoLabel" htmlFor="Porcelana fria">Porcelana fria</label>
            <input type="radio" id="Porcelana fria" name="category" value="Porcelana fria" checked={category === "Porcelana fria"} onChange={handleCategory}></input>

            <label className="crearNuevoProductoLabel" htmlFor="Todos">Todos</label>
            <input type="radio" id="Todos" name="category" value="Todos" checked={category === "Todos"} onChange={handleCategory}></input>

            <label className="crearNuevoProductoLabel" htmlFor="porcentaje">Indique el porcentaje de aumento</label>
            <input className="crearNuevoProductoInputPrice" type="number" id="porcentaje" placeholder="Ejemplo: 10 significa un 10% de aumento" onChange={handlePorcentaje}></input>

            <button className="crearNuevoProductoButton">Confirmar</button>

            </form>          
        </div>
        </>       

    )
}

export default ModificarPrecioDeProductos;