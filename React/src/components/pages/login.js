/* Pagina de login */

import Header from "../sections/header"
import Footer from "../sections/footer"
import "../../styles/styles.css"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Container } from "@mui/system"
import { useRef } from "react"


const Login = () => {

    // Obtener los values de los inputs
    const refEmail = useRef(null)
    const refPassword = useRef(null)


    // Guardar values en un objeto
    const handleLogin = () => {
        const data = {
            "email": refEmail.current.value,
            "password": refPassword.current.value
        }
        console.log(data)
    }
    
    return (
        <>
            <Header />
            <Box 
            className="loginContainer" 
            sx={{bgcolor: "#ebebeb", minHeight: "100vh", textAlign: "center", pt: 12}}
            >
                <Container 
                sx={{display: "flex", flexDirection: "column", width: "30%"}}
                >
                    <Typography 
                    variant="h4" 
                    mb={5} 
                    color="#858585"
                    >Inicia sesión
                    </Typography>
                    {/* inputs */}
                    <TextField
                    inputRef={refEmail}
                    label="Correo electronico" 
                    variant="outlined" 
                    margin="normal" 
                    />

                    <TextField
                    inputRef={refPassword} 
                    id="password" 
                    label="Contraseña" 
                    variant="outlined" 
                    margin="normal" 
                    />
                    {/* Enviar datos */}
                    <Button 
                    onClick={handleLogin} 
                    variant="contained" 
                    size="medium" 
                    sx={{ m: 5, bgcolor: "#283618" , marginX: "auto"}}
                    >Entrar
                    </Button>
                </Container>
            </Box>
            <Footer />
        </>
    )
}

export default Login