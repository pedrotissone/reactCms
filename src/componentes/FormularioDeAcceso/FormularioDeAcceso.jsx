import React from "react";
import { useNavigate } from "react-router-dom"
import { cartContext } from "../../context/cartContext" 
import { useState, useContext} from "react";
import { app } from "../../services/firestore";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import { Button, Container, TextField } from "@mui/material";
import "./FormularioDeAcceso.css"



function FormularioDeAcceso() {

	const navigate = useNavigate()	

	const auth = getAuth(app)
	
	const {setUser} = useContext(cartContext)

	const [userName, setUserName] = useState("")

	const [password, setPassword] = useState("")

	function handleUserNameChange(event) {
		setUserName(event.target.value)
	}

	function handlePasswordChange(event) {
		setPassword(event.target.value)
	}

	async function handleSubmit(event) {
		try {
			event.preventDefault()
			await signInWithEmailAndPassword(auth, userName, password)
			console.log("Te logeaste con exito "+ auth.currentUser.email)
			setUser(true)
			navigate("/")
		} catch (error) {
			console.error("usuario o contraseña no valida")
		}							
	}
	

	return(
		<>
		{/* <div className="formDiv" onSubmit={handleSubmit}>
			<form className="formularioDeAcceso">
				<input className="formUser" type="text" placeholder="pepe@pepe.com" onChange={handleUserNameChange}/>
				<input className="formPassword" type="password" placeholder="123456" onChange={handlePasswordChange}/>
				<button className="formButton" type="submit">CONFIRMAR</button>
			</form>
		</div> */}

		<Container maxWidth="sm" sx={{display: "flex", flexDirection: "column"}} component="form" onSubmit={handleSubmit}>				
		<TextField sx={{mb: 2}}
		id="email"
		label="Email"
		type="email"
		placeholder="pepe@pepe.com"
		value={userName}
		onChange={(e) => setUserName(e.target.value)}
		required		
		 />
		 <TextField sx={{mb: 2}}
		 id="password"
		 label="Password"
		 type="password"
		 placeholder="123456"
		 value={password}
		 onChange={(e) => setPassword(e.target.value)}
		 required
		 />

		 <Button type="submit" variant="contained" sx={{backgroundColor: "rgb(32, 144, 144)", color: "rgb(234, 221, 221)", mb: 5}}>Confirmar</Button>
		 </Container>

		</>
	)
}

export default FormularioDeAcceso;