
import "./header.css"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useContext } from "react";
import { app } from "../../services/firestore";
import { getAuth, signOut } from "firebase/auth"
import { getStorage, ref } from "firebase/storage"
import { cartContext } from "../../context/cartContext";


function Header(props) {

  //          S T O R A G E

  const storage = getStorage() // get the storage instance

  const storageRef = ref(storage) // storage reference root


  //          S T O R A G E


  const navigate = useNavigate()

  const auth = getAuth(app)

  const { user, setUser, checkLogin } = useContext(cartContext)

  async function handleSignOut() {
    try {
      await signOut(auth)
      console.log("Cerraste session!")
      setUser(null)
      navigate("/")

    } catch (error) {
      console.error("Se produjo un error  " + error)
    }
  }

  useEffect(() => {
    checkLogin()
  }, [])


  return (
    <div className="headerDivContainer">

      <div className="headerAccessDiv">
        {
          user == null ?

            <Link to="/Formulario">
              <p className="headerAccess">Acceso</p>
            </Link>
            :
            <div>
              <p className="headerAccessName">Bienvenido Pepe</p>
              <button className="headerSignOutButton" type="button" onClick={handleSignOut} >Cerrar Sesión</button>
            </div>
        }
      </div>

      <div className="headerTitleDiv">
        <div className="headerTitle">
          <Link className="headerLink" to="/">
            <picture>
              <img className="headerLogo" src="/img/logoEcommerce1.svg" alt="Logo de ecommerce"/>
            </picture>
          </Link>
        </div>
      </div>

    </div>
  )
}


export default Header

