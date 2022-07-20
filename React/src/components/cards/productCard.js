/* Modelo de producto */

import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ img, model, price }) => {

    return (
        <Card>
            {/* Contenedor principal */}
            <CardActionArea>
                {/* Imagen de producto */}
                <CardMedia
                    component="img"
                    height="210"
                    image={img}
                    alt="Ropa"
                />
                {/* Informacion de producto */}
                <CardContent 
                sx={{ py: 0, height: "55px" }}
                >
                    <Typography 
                    gutterBottom 
                    variant="h6" 
                    m={0}
                    >{model}
                    </Typography>

                    <Typography 
                    variant="subtitle1" 
                    color="text.secondary"
                    >{price}$
                    </Typography>
                </CardContent>
            </CardActionArea>
            {/* Boton de producto */}
            <CardActions  
            sx={{ p: 0 }}
            >
                <Button 
                size="small" 
                sx={{m: "0 auto" }}
                >Añadir
                </Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard