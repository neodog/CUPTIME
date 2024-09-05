import { Footer } from "../modules/Footer"
import { Header } from "../modules/Header"
import { Cart } from "../modules/Cart"
import { DetailOrder } from "../modules/DetailOrder";


export const Order = () => {
    return (
        <>
            <Header />

            <Cart />
            <DetailOrder />
            <Footer />
        </>

    );
}