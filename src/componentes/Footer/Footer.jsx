import React from "react";
import "./footer.css"
import { BiLogoInstagramAlt, BiSolidMap, BiSolidCopyright } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"

function Footer() {

    function handleClickInstagram() {
        window.open("https://www.instagram.com/aegina.tocados/", "_blank");
    }

    function handleClickWhatsapp() {
        window.open("https://wa.me/541166142146", "_blank")
    }

    return(
        <>
            <div className="footerTextDiv">
                <div className="react-icons">
                    < BiSolidMap  size={17} style={{color:"whitesmoke"}}/>
                </div>
            <p className="footerText">Ciudad Autónoma de Buenos Aires, Argentina</p>
            </div>            

            <div className="footerTextDiv">
            < FaWhatsapp size={17} style={{color:"whitesmoke"}}/>
            <p className="footerText" onClick={handleClickWhatsapp}>+54 9 11 6614-2146</p>
            </div>
            
            <div className="footerTextDiv">
            < BiLogoInstagramAlt size={17} style={{color:"whitesmoke"}}/>
            <p className="footerText" onClick={handleClickInstagram}> I N S T A G R A M</p>
            </div>            
            <div className="footerTextDiv">
            <p className="footerText">Aegina Head Pieces Copyright 2023</p>
            < BiSolidCopyright size={17} style={{color:"whitesmoke"}}/>
            </div>
            
        </>
    )
}

export default Footer;