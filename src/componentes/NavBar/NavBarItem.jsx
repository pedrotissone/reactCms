import "./navBarItem.css"

function NavBarItem(props) { // Este componente va a representar las cards de los diferentes tipos de tocado (flores, piedra y porcelana)
  return (
    
    <div className="navBarDiv">
        <img className="navBarImg" src={props.img} alt={"Tocados de novia de " + props.title}/>
        <p className="categoryTitle">{props.title} </p>        
    </div>
  )
}

export default NavBarItem

//LAS PROPS DEL COMPONENTE SE ESCRIBEN ACA, CON EL NOMBRE CON EL QUE LAS VAS A TENER QUE LLAMAR (En este caso: img, title).