export default function CartItem({ item, toggleCheck, changeQuantity }) {
  const handleMinus = () => changeQuantity(item.id, -1);
  const handlePlus = () => changeQuantity(item.id, +1);

  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <input
          type="checkbox"
          className="checkbox"
          checked={item.checked}
          onChange={() => toggleCheck(item.id)}
        />

        <div className="item-thumbnail">
          {item.image ? (
            <img
              src={item.image}
              alt={item.name}
              className="cart-thumb-img"
            />
          ) : (
            <span>{item.emoji}</span>
          )}
        </div>

        <div className="cart-item-info">
          <div className="cart-item-title">{item.name}</div>
          <div className="cart-item-price-unit">
            {item.price.toLocaleString()}원
          </div>
        </div>
      </div>

      <div className="cart-item-right">
        <div className="quantity-control">
          <button className="quantity-btn" onClick={handleMinus}>
            -
          </button>
          <div className="quantity-value">{item.quantity}</div>
          <button className="quantity-btn" onClick={handlePlus}>
            +
          </button>
        </div>

        <div className="cart-item-total">
          {(item.price * item.quantity).toLocaleString()}원
        </div>
      </div>
    </div>
  );
}
