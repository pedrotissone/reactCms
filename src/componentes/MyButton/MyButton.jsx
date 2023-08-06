import "./mybutton.css"
// import React, {useState, useEffect} from "react" //Importo el Hook State para poder usarlo en el componente
 //Importo el Hook para manipular el ciclo de vida del componente (useEffect)

//NOTA: Si vos importas react no nesecitas el destructure {useState} sino que usas el metodo de react React.useState()

// function GetDataFromDataBase(){
//     console.log("obtengo data")
// }
// console.log("Esto va a aparecer en cada render (Cambio de estado del componente)")

function MyButton(props) {
    // let colorBtn = props.color //Asi no va tengo que usar la syntaxis del useState para lograr el cambio de color
    // let [colorBtn, setColorBtn ] = useState(props.color) //Aca le doy el valor INICIAL al estado
    // console.log(useState())

    // function handleClick(){
    //     // colorBtn = "grey" //Para cambiar el color tengo que usar la funcion setColorBtn
    //     setColorBtn("yellow")       
    // }

    //HOOK PARA MANIPULAR EL CICLO DE VIDA DEL COMPONENTE

    // useEffect(
    //     ()=> {
    //         GetDataFromDataBase()
    //     },
    //     [] //Si el array esta vacio significa que solo se va a usar la funcion cuando se mota el componente.
    // )

    // useEffect( //No tiene array, se ejecuta el codigo en cada render (osea cambio de estado o props)
    //     ()=>{
    //         console.log("Efecto sin array se ejecuta en cada render")
    //     });

    // useEffect(
    //     ()=>{
    //         console.log("Solo me ejecuto cuando cambia el estado de colorBtn")
    //     }, [colorBtn]
    // );
    
    return (
        <button style={{width: "6rem", height: "2.5rem", borderRadius: "8px", cursor: "pointer"}} 
        onClick={props.onClick}>{props.text}{props.children}</button>
    )

}

export default MyButton;