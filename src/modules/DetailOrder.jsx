

export const DetailOrder = () => {

  return (
    <section className="order">
      <div className="container">
        <h2 className="order__title">Доставка</h2>

        <form className="order__form">
          <input
            className="order__input"
            type="text"
            name="name"
            placeholder="Имя"
            value=""

          />
          <input
            className="order__input"
            type="text"
            name="phone"
            placeholder="Телефон"
            value=""

          />
          <input
            className="order__input order__input_address"
            type="text"
            name="address"
            placeholder="Адрес"
            value=""

          />

          <fieldset className="order__payment">
            <h3 className="order__payment-title">Оплата:</h3>

            <label className="order__payment-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="card"


              />
              Картой
            </label>

            <label className="order__payment-label">
              <input
                className="order__radio"
                type="radio"
                name="payment"
                value="cash"


              />
              Наличные
            </label>
          </fieldset>
        </form>
      </div>
    </section>
  );
};
