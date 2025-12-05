import { useState } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductPage({
  products,
  cartItems,
  onAddOne,
  onRemove,
  goToCart,
}) {
  const [selectedCategory, setSelectedCategory] = useState("전체");

  const categories = [
    "전체",
    "오디오",
    "워치",
    "스마트폰",
    "PC·태블릿",
    "디스플레이",
    "스토리지·기타",
  ];

  const filteredProducts =
    selectedCategory === "전체"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="product-page">
      <header className="product-header">
        <div>
          <h1 className="page-title">오늘의 추천 상품</h1>
          <p className="page-subtitle">
            카테고리를 선택해서 원하는 삼성전자 제품을 골라보세요.
          </p>
        </div>
        <button className="btn-outline" onClick={goToCart}>
          장바구니 바로가기
        </button>
      </header>

      {/* 카테고리 필터 */}
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={
              "category-chip" +
              (selectedCategory === cat ? " active" : "")
            }
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <section className="product-grid">
        {filteredProducts.map((p) => {
          const cartItem = cartItems.find((c) => c.id === p.id);
          const inCart = !!cartItem;
          const quantity = cartItem ? cartItem.quantity : 0;

          return (
            <ProductCard
              key={p.id}
              product={p}
              inCart={inCart}
              quantity={quantity}
              onAddOne={onAddOne}
              onRemove={onRemove}
            />
          );
        })}
      </section>
    </div>
  );
}
