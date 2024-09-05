import products_data from "../data/products.json"
import { CartItem } from "./CartItem";


export const Cart = () => {
  return (
    <section className="cart">
      <div className="container cart__container">
        <h2 className="cart__title">Корзина (6)</h2>
        <ul className="cart__items">
          {products_data.map((item) => (
            <CartItem key={item.id} data={item} />
          ))}
        </ul>
        <div className="cart__summary">
          <h3 className="cart__summary-title">Итого:</h3>
          <p className="cart__summary-total">2200&nbsp;₽</p>
          <button className="cart__order-button">Заказать</button>
        </div>
      </div>
    </section>



  );
};