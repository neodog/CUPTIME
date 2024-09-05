import { Product } from "./Product";
import products_data from "../data/products.json"



export const Products = () => (
    <section className="products">
        <div className="container">
            <h2 className="products__title">Чай</h2>
            <ul className="products__list">

                {products_data.map((product_item) => (<Product key={product_item.id} data={product_item} />))}



            </ul>
        </div>
    </section>
)