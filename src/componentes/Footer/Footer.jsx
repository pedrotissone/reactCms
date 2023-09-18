import React from "react";
import "./footer.css"
import { BiLogoInstagramAlt, BiSolidMap, BiSolidCopyright } from "react-icons/bi"
import { FaWhatsapp } from "react-icons/fa"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import { Box, Stack } from "@mui/material";

function Footer() {

    function handleClickInstagram() {
        window.open("https://www.instagram.com/tiza90/", "_blank");
    }

    function handleClickWhatsapp() {
        window.open("https://wa.me/541163566348", "_blank")
    }

    return(
        <>
            {/* <div className="footerTextDiv">
                <div className="react-icons">
                    < BiSolidMap  size={17} style={{color:"whitesmoke"}}/>
                </div>
            <p className="footerText">Ciudad Autónoma de Buenos Aires, Argentina</p>
            </div>            

            <div className="footerTextDiv">                
            < FaWhatsapp size={17} style={{color:"whitesmoke"}}/>
            <p className="footerText" onClick={handleClickWhatsapp}>+54 9 11 6356-6348</p>
            </div>
            
            <div className="footerTextDiv">
            < BiLogoInstagramAlt size={17} style={{color:"whitesmoke"}}/>
            <p className="footerText" onClick={handleClickInstagram}> I N S T A G R A M</p>
            </div>            
            <div className="footerTextDiv">
            <p className="footerText">React E-Commerce Copyright 2023</p>
            < BiSolidCopyright size={17} style={{color:"whitesmoke"}}/>
            </div> */}

            <Stack direction={{xl:"row", lg:"row"}} justifyContent="space-around" alignItems="center">

                <Box sx={{display:"flex", alignItems: "flex-end"}} marginBottom={2} marginTop={2}>
                <PlaceIcon sx={{color:"whitesmoke"}} fontSize="small"/>
                <span className="footerText">Ciudad Autónoma de Buenos Aires, Argentina</span>
                </Box>

                <Box sx={{display:"flex", alignItems: "flex-end"}}marginBottom={2} marginTop={2}>
                <WhatsAppIcon sx={{color:"whitesmoke"}} fontSize="small"/>
                <span className="footerText" onClick={handleClickWhatsapp}>+54 9 11 6356-6348</span>
                </Box>

                <Box sx={{display:"flex", alignItems: "flex-end"}}marginBottom={2} marginTop={2}>
                <InstagramIcon sx={{color:"whitesmoke"}} fontSize="small"/>
                <span className="footerText" onClick={handleClickInstagram}>@Tiza90</span>
                </Box>

                <Box sx={{display:"flex", alignItems: "flex-end"}}marginBottom={2} marginTop={2}>
                < BiSolidCopyright size={19} style={{color:"whitesmoke"}}/>
                <span className="footerText">React E-Commerce Copyright 2023</span>
                </Box>

            </Stack>
            
        </>
    )
}

export default Footer;