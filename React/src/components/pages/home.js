/* Pagina de inicio */

import CardsContainer from "../sections/cardsContainer"
import Header from "../sections/header"
import Footer from "../sections/footer"

const Home = () => {
    return (
        <>
        <Header />
        <CardsContainer peticion="items"/>
        <Footer />
        </>
    )
}

export default Home