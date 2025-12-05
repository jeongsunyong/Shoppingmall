export default function ProductCard({
  product,
  inCart,
  quantity,
  onAddOne,
  onRemove,
}) {
  const { id, name, price, image } = product;

  return (
    <article className="product-card">
      <div className="product-thumb">
        <img src={image} alt={name} />
      </div>

      <div className="product-main">
        <div className="product-title">{name}</div>
        <div className="product-price">{price.toLocaleString()}원</div>

        {inCart && (
          <div className="product-cart-info">
            장바구니에 {quantity}개 담김
          </div>
        )}
      </div>

      <button
        className="product-btn primary"
        onClick={() => onAddOne(id)}
      >
        장바구니 담기
      </button>

      {inCart && (
        <button
          className="product-remove"
          onClick={() => onRemove(id)}
        >
          장바구니에서 제거
        </button>
      )}
    </article>
  );
}
