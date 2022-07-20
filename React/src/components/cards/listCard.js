import { Box, Button, Card, CardActions, CardMedia, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';

export default function ListCard() {
    return (
        <Card sx={{ maxHeight: "70px", minWidth: "100%", display: "inline-flex", justifyContent: "space-between", bgcolor: "#ebebeb" }}>
            <Box sx={{ display: "flex" }}>
                <CardMedia
                    component="img"
                    height="100%"
                    image="https://i.pinimg.com/236x/42/22/d1/4222d117cdf30c48b0f96a5ac2366980.jpg"
                    alt="Ropa"
                    sx={{ maxWidth: "70px" }}
                />
                <Typography gutterBottom variant="h5" sx={{ lineHeight: "70px", m: 0, px: 3 }}>
                    Ropa
                </Typography>
            </Box>
            <Box sx={{ display: "inline-flex" }}>
                <Typography variant="h5" color="text.secondary" lineHeight={"70px"}>
                    70$
                </Typography>
                <CardActions>
                    <IconButton>
                        <ClearIcon color="disabled" />
                    </IconButton>
                </CardActions>
            </Box>
        </Card>
    )
}