/* Modelo producto en lista de carrito */

import { Box, Card, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

const ListCard  = () => {
    return (
        <Card 
        sx={{ maxHeight: "70px", minWidth: "100%", display: "inline-flex", justifyContent: "space-between", bgcolor: "#ebebeb" }}
        >
            {/* Contenedor principal */}
            <Box 
            sx={{ display: "flex" }}
            >
                {/* Imagen de producto */}
                <CardMedia
                    component="img"
                    height="100%"
                    image="https://i.pinimg.com/236x/42/22/d1/4222d117cdf30c48b0f96a5ac2366980.jpg"
                    alt="Ropa"
                    sx={{ maxWidth: "70px" }}
                />
                {/* Informacion de producto */}
                <Typography 
                gutterBottom 
                variant="h5" 
                sx={{ lineHeight: "70px", m: 0, px: 3 }}
                >Ropa
                </Typography>
            </Box>
            <Box 
            sx={{ display: "inline-flex" }}
            >
                <Typography 
                variant="h5" 
                color="text.secondary" 
                lineHeight={"70px"}
                >70$
                </Typography>
                {/* Boton para sacar producto del carrito */}
                <CardActions>
                    <IconButton>
                        <ClearIcon 
                        color="disabled" 
                        />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    )
}

export default ListCard