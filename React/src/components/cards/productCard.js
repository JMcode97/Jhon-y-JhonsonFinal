import { Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";

export default function ProductCard({ img, name, price }) {

    return (
        <Card >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    image="https://uvn-brightspot.s3.amazonaws.com/assets/vixes/t/tops-tejidos-tendencia-2020-shein.jpg"
                    alt="Ropa"
                />
                <CardContent sx={{ py: 0, height: "55px" }}>
                    <Typography gutterBottom variant="h6" m={0}>
                        Ropa
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        30$
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions  sx={{ p: 0 }}>
                <Button size="small" sx={{m: "0 auto" }}>
                    Añadir
                </Button>
            </CardActions>
        </Card>
    )
}



