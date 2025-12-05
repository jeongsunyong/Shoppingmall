export default function SummaryPanel({ total }) {
  const shipping = total > 0 ? 0 : 0;

  const handleCheckout = () => {
    if (total <= 0) {
      alert("결제할 상품이 없습니다.");
      return;
    }

    alert("잔액이 부족합니다 😅");
  };

  return (
    <div className="card summary">
      <div className="summary-title">주문 요약</div>

      <div className="summary-row">
        <span>상품 금액</span>
        <span>{total.toLocaleString()}원</span>
      </div>
      <div className="summary-row">
        <span>배송비</span>
        <span>
          {shipping.toLocaleString()}원
          <span className="summary-badge">무료배송 적용</span>
        </span>
      </div>

      <hr className="summary-divider" />

      <div className="summary-row">
        <span>총 결제 금액</span>
        <span className="summary-highlight">
          {total.toLocaleString()}원
        </span>
      </div>

      <div className="summary-point">
        {(total * 0.1).toLocaleString()}P 적립 예정
      </div>

      <button className="btn-primary" onClick={handleCheckout}>
        {total.toLocaleString()}원 결제하기
      </button>
    </div>
  );
}
