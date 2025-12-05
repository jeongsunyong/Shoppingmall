export default function Header({ items, toggleAll, deleteSelected }) {
  const selectedCount = items.filter((i) => i.checked).length;

  return (
    <header className="cart-header">
      <h1 className="cart-header-title">장바구니</h1>
      <div className="cart-header-actions">
        <button type="button" className="btn-outline" onClick={toggleAll}>
          전체 선택 ({selectedCount}/{items.length})
        </button>
        <span className="link-danger" onClick={deleteSelected}>
          선택 삭제
        </span>
      </div>
    </header>
  );
}
