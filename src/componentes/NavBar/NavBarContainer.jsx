import NavBarItem from "./NavBarItem"
import "./navBarContainer.css"
import {Link} from "react-router-dom"
import {cartContext} from "../../context/cartContext"
import { useContext } from "react"
import { ImageList, Stack } from "@mui/material"



function NavBarContainer(props) {

  const { user } = useContext(cartContext)  

  return (
    <>    
       {/* <div className="navBar">

        <Link className="navBarLink1" to="/category/Flores preservadas" ><NavBarItem title="CATEGORY 1" img="/img/categoryZapatillas.jpg"/></Link>

        <Link className="navBarLink2" to="/category/Piedras"><NavBarItem title="CATEGORY 2" img="/img/categoryGorras.jpg"/></Link>

        <Link className="navBarLink3" to="/category/Porcelana fria"><NavBarItem title="CATEGORY 3" img="/img/categoryAnteojos.webp"/></Link>        

      </div>
      
      {user && <div className='divCrearNuevoProducto'>
      <Link to={"/CrearNuevoProducto"}><h2 className="crearNuevoProducto">Crear nuevo producto</h2></Link>
      <Link to={"/ModificarPrecioDeProductos"}><h2 className="modificarPrecioDeProductos">Modificar precio de productos</h2></Link>
      </div>} */}

      <Stack sx={{backgroundColor: "rgb(153 148 148)", mb: "2rem"}} direction={{sm:"row", md:"row", lg:"row", xl:"row"}} justifyContent={{xs: "center", sm:"space-around", md: "space-around", lg:"space-around", xl: "space-around"}} alignItems="center" >

        <Link className="navBarLink1" to="/category/Flores preservadas" ><NavBarItem title="CATEGORY 1" img="/img/categoryZapatillas.jpg"/></Link>

        <Link className="navBarLink2" to="/category/Piedras"><NavBarItem title="CATEGORY 2" img="/img/categoryGorras.jpg"/></Link>

        <Link className="navBarLink3" to="/category/Porcelana fria"><NavBarItem title="CATEGORY 3" img="/img/categoryAnteojos.webp"/></Link>

      </Stack>

      {user && <div className='divCrearNuevoProducto'>
      <Link to={"/CrearNuevoProducto"}><h2 className="crearNuevoProducto">Crear nuevo producto</h2></Link>
      <Link to={"/ModificarPrecioDeProductos"}><h2 className="modificarPrecioDeProductos">Modificar precio de productos</h2></Link>
      </div>}

    </>
  )
}

export default NavBarContainer