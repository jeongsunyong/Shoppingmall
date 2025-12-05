import Header from "../components/Header";
import CartItem from "../components/CartItem";
import SummaryPanel from "../components/SummaryPanel";

export default function CartPage({ items, setItems }) {
  const toggleCheck = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const changeQuantity = (id, diff) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + diff) }
          : item
      )
    );
  };

  const deleteSelected = () => {
    setItems((prev) => prev.filter((item) => !item.checked));
  };

  const toggleAll = () => {
    const allChecked = items.every((item) => item.checked);
    setItems((prev) =>
      prev.map((item) => ({ ...item, checked: !allChecked }))
    );
  };

  const total = items
    .filter((i) => i.checked)
    .reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <div className="cart-page">
      <Header items={items} toggleAll={toggleAll} deleteSelected={deleteSelected} />

      <div className="layout">
        <div className="left-list">
          {items.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              toggleCheck={toggleCheck}
              changeQuantity={changeQuantity}
            />
          ))}
        </div>

        <SummaryPanel total={total} />
      </div>
    </div>
  );
}
