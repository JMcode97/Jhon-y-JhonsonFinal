import Header from "../sections/header"
import Footer from "../sections/footer"
import { Box } from "@mui/system"
import { Button, Checkbox, Container, FormControlLabel, FormGroup, TextField, Typography } from "@mui/material"
import ListCard from "../cards/listCard"

const Checkout = () => {
    return (
        <>
            <Header />
            <Box sx={{ bgcolor: "#ebebeb", minHeight: "100vh", display: "flex", justifyContent: "center" }}>
                <Box className="productList" sx={{ bgcolor: "#f9f9f9", minHeight: "100%", width: "45%", p: 4 }}>
                    <Typography variant="h4" mb={5}>Lista de compra</Typography>
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <ListCard />
                    <hr />
                </Box>
                <Box className="Payment" sx={{ bgcolor: "#ebebeb", minHeight: "100%", width: "45%", p: 4 }}>
                    <Typography variant="h4" mb={5}>Pago</Typography>
                    <Container sx={{ display: "flex", flexDirection: "column" }}>
                        <TextField id="user" label="Correo electronico" variant="outlined" margin="normal" />
                        <Typography variant="body2" color="GrayText">Ingresa tu correo para hacer seguimiento de tu compra</Typography>
                        <FormGroup sx={{ width: "16%" }}>
                            <FormControlLabel control={<Checkbox />} label="Tarjeta" />
                            <FormControlLabel control={<Checkbox />} label="Efectivo" />
                        </FormGroup>
                        <Button variant="contained" sx={{ mt: 2, bgcolor: "#283618", width: "40%", p: 2 }}>Confirmar</Button>
                    </Container>
                </Box>
            </Box>
            <Footer />
        </>
    )
}

export default Checkout