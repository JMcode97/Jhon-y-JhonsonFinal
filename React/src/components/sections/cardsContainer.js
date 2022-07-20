import { Grid } from "@mui/material"
import ProductCard from "../cards/productCard"

export default function CardsContainer() {
    return (
        <Grid container gap={4} sx={{ p: 3, justifyContent: "center", bgcolor: "#ebebeb", minHeight: "100vh"}}>
            <Grid item xs={2}>
                <ProductCard />
            </Grid>
        </Grid>
    )
}