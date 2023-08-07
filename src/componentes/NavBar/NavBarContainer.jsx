import NavBarItem from "./NavBarItem"
import "./navBarContainer.css"
import {Link} from "react-router-dom"
import {cartContext} from "../../context/cartContext"
import { useContext } from "react"



function NavBarContainer(props) {

  const { user } = useContext(cartContext)  

  return (
    <>    
       <div className="navBar">

        <Link className="navBarLink1" to="/category/Flores preservadas" ><NavBarItem title="CATEGORY 1" img="/img/categoryZapatillas.jpg"/></Link>

        <Link className="navBarLink2" to="/category/Piedras"><NavBarItem title="CATEGORY 2" img="/img/categoryGorras.jpg"/></Link>

        <Link className="navBarLink3" to="/category/Porcelana fria"><NavBarItem title="CATEGORY 3" img="/img/categoryAnteojos.webp"/></Link>        

      </div>
      
      {user && <div className='divCrearNuevoProducto'>
      <Link to={"/CrearNuevoProducto"}><h2 className="crearNuevoProducto">Crear nuevo producto</h2></Link>
      <Link to={"/ModificarPrecioDeProductos"}><h2 className="modificarPrecioDeProductos">Modificar precio de productos</h2></Link>
      </div>}      
    </>
  )
}

export default NavBarContainer