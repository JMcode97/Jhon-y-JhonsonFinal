/* Contenedor de productos */

import ProductCard from "../cards/productCard"
import useApi from "../../hooks/useApi"
import { Grid } from "@mui/material"

const CardsContainer = ({ peticion }) => {

    // Hook para conectar a BD y obtener items(ropa)
    const [items] = useApi(peticion)

    return (
        <Grid 
        container 
        spacing={2} 
        columns={8} 
        sx={{p: 4, m: 0, minHeight: "100vh", bgcolor: "#ebebeb" }}
        >
            {/* Recorrer el array para renderizar una carta por cada producto */}
            {
                items?.map(i => (
                    <Grid 
                    item 
                    sm={1}
                    key={i.id}
                    >
                        <ProductCard
                            img={i.img}
                            model={i.model}
                            price={i.price}
                        />
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default CardsContainer