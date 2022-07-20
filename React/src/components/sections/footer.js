/* Pie de pagina */

import { Box, IconButton, Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PinterestIcon from '@mui/icons-material/Pinterest';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


const Footer = () => {


    // Estilos generales de los links
    const Enlaces = { color: "#fefae0", textDecoration: "none", cursor: "pointer" }

    return (
        //Contenedor principal footer
        <Box 
        sx={{ bgcolor: "#283618", color: "#fefae0", p: 2 }} 
        >
            <Container 
            sx={{ display: "flex", justifyContent: "space-between" }}
            >
                {/* Informacion footer lado izquierdo (enlaces) */}
                <Box  
                sx={{ left: 0, right: 0, textAlign: "center" }}
                >
                    <Box>
                        <Typography 
                        component={Link} 
                        to="/" 
                        sx={Enlaces}
                        >Quienes somos
                        </Typography>
                    </Box>
                    <Box>
                        <Link 
                        path="/" 
                        sx={Enlaces}
                        >Contáctenos
                        </Link>
                    </Box>
                    <Box>
                        <Link 
                        path="/" 
                        sx={Enlaces}
                        >J&J VIP
                        </Link>
                    </Box>
                    <Box>
                        <Link 
                        path="/" 
                        sx={Enlaces}
                        >Guía de tallas
                        </Link>
                    </Box>
                    <Box>
                        <Link 
                        path="/" 
                        sx={Enlaces}
                        >Formas de pago
                        </Link>
                    </Box>
                    <Box>
                        <Link 
                        path="/" 
                        sx={Enlaces}
                        >Devolución
                        </Link>
                    </Box>
                </Box>
                {/* Iconos de redes sociales lado derecho */}
                <Box>
                    <IconButton 
                    component={Link} 
                    to="/" 
                    sx={Enlaces}
                    >
                    <FacebookIcon></FacebookIcon>
                    </IconButton>
                    <IconButton 
                    component={Link} 
                    to="/" 
                    sx={Enlaces}
                    >
                    <InstagramIcon></InstagramIcon>
                    </IconButton>
                    <IconButton 
                    component={Link} 
                    to="/" 
                    sx={Enlaces}
                    >
                    <PinterestIcon></PinterestIcon>
                    </IconButton>
                </Box>
            </Container>
            {/* Marca registrada footer */}
            <Box 
            sx={{ width: "100%", textAlign: "center" }} 
            >
            <Typography>Jhon&Jhonson &reg; 2022 </Typography>
            </Box>
        </Box>
    )
}

export default Footer