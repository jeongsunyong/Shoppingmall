import { useState } from "react";
import CartPage from "./pages/CartPage";
import ProductPage from "./pages/ProductPage";
import "./App.css";

const PRODUCT_CATALOG = [
  // 오디오
  {
    id: 1,
    name: "갤럭시 버즈3 프로",
    price: 289000,
    emoji: "🎧",
    category: "오디오",
    image: "images/buzPro3.webp",
  },
  {
    id: 2,
    name: "갤럭시 버즈2 프로",
    price: 199000,
    emoji: "🎧",
    category: "오디오",
    image: "images/buzPro2.webp",
  },
  {
    id: 3,
    name: "갤럭시 버즈 FE",
    price: 139000,
    emoji: "🎧",
    category: "오디오",
    image: "images/buzFE.webp",
  },
  {
    id: 4,
    name: "갤럭시 버즈 라이브",
    price: 99000,
    emoji: "🎧",
    category: "오디오",
    image: "images/buzlive.jpeg",
  },
  {
    id: 5,
    name: "갤럭시 스마트태그2",
    price: 39900,
    emoji: "🔊",
    category: "오디오",
    image: "images/smartTag2.jpeg",
  },
  {
    id: 6,
    name: "사운드바 Q990C",
    price: 1590000,
    emoji: "📶",
    category: "오디오",
    image: "images/soundbarQ990C.jpeg",
  },

  // 워치
  {
    id: 7,
    name: "갤럭시 워치7",
    price: 369000,
    emoji: "⌚",
    category: "워치",
    image: "images/galaxywatch7.jpeg",
  },
  {
    id: 8,
    name: "갤럭시 워치 Ultra",
    price: 899000,
    emoji: "⌚",
    category: "워치",
    image: "images/galaxywatchultra.jpeg",
  },
  {
    id: 9,
    name: "갤럭시 워치4 클래식",
    price: 299000,
    emoji: "⌚",
    category: "워치",
    image: "images/galaxywatch4classic.jpeg",
  },

  // 스마트폰
  {
    id: 10,
    name: "갤럭시 S24 울트라",
    price: 1699000,
    emoji: "📱",
    category: "스마트폰",
    image: "images/galaxyS24Ultra.jpeg",
  },
  {
    id: 11,
    name: "갤럭시 S24+",
    price: 1350000,
    emoji: "📱",
    category: "스마트폰",
    image: "images/galaxyS24Plus.jpeg",
  },
  {
    id: 12,
    name: "갤럭시 Z 플립6",
    price: 1452000,
    emoji: "📱",
    category: "스마트폰",
    image: "images/galaxyZFlip6.jpeg",
  },
  {
    id: 13,
    name: "갤럭시 Z 폴드6",
    price: 2149000,
    emoji: "📱",
    category: "스마트폰",
    image: "images/galaxyZFold6.jpeg",
  },

  // PC·태블릿
  {
    id: 14,
    name: "갤럭시 북4 프로 16\"",
    price: 2299000,
    emoji: "💻",
    category: "PC·태블릿",
    image: "images/galaxyBookPro4.jpeg",
  },
  {
    id: 15,
    name: "갤럭시 북4 Ultra",
    price: 3499000,
    emoji: "💻",
    category: "PC·태블릿",
    image: "images/galaxyBookUltra4.jpeg",
  },
  {
    id: 16,
    name: "갤럭시 탭 S9 울트라",
    price: 1580000,
    emoji: "📱",
    category: "PC·태블릿",
    image: "images/galaxyTabUltraS9.jpeg",
  },
  {
    id: 17,
    name: "갤럭시 탭 S9 FE+",
    price: 699000,
    emoji: "📱",
    category: "PC·태블릿",
    image: "images/galaxyTabFEPlusS9.jpeg",
  },
  {
    id: 18,
    name: "삼성 블루투스 키보드",
    price: 199000,
    emoji: "⌨️",
    category: "PC·태블릿",
    image: "images/samsungBluetoothKeyboard.jpeg",
  },

  // 디스플레이
  {
    id: 19,
    name: "오디세이 G9 모니터",
    price: 1990000,
    emoji: "🖥️",
    category: "디스플레이",
    image: "images/OdysseyG9Monitor.jpeg",
  },
  {
    id: 20,
    name: "스마트 모니터 M8 32\"",
    price: 890000,
    emoji: "🖥️",
    category: "디스플레이",
    image: "images/SmartMonitorM8.jpeg",
  },

  // 스토리지·기타
  {
    id: 21,
    name: "포터블 SSD T9 2TB",
    price: 289000,
    emoji: "💾",
    category: "스토리지·기타",
    image: "images/PortableSSDT92TB.jpeg",
  },
  {
    id: 22,
    name: "삼성 45W PD 고속충전기",
    price: 39000,
    emoji: "🔌",
    category: "스토리지·기타",
    image: "images/Samsung45WPDCharger.jpeg",
  },
];


function App() {
  const [view, setView] = useState("products");
  const [cartItems, setCartItems] = useState([]);

  const addOneToCart = (id) => {
    setCartItems((prev) => {
      const product = PRODUCT_CATALOG.find((p) => p.id === id);
      if (!product) return prev;

      const existing = prev.find((i) => i.id === id);
      if (!existing) {
        return [...prev, { ...product, quantity: 1, checked: true }];
      }
      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1, checked: true }
          : item
      );
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  };

  const cartCount = cartItems.reduce((sum, i) => sum + i.quantity, 0);

return (
  <div className="app-root">
    <nav className="top-nav">
      <div className="top-nav-inner">
        <div className="top-logo">My Shop</div>
        <div className="top-buttons">
          <button
            className={`nav-btn ${view === "products" ? "active" : ""}`}
            onClick={() => setView("products")}
          >
            상품 목록
          </button>
          <button
            className={`nav-btn ${view === "cart" ? "active" : ""}`}
            onClick={() => setView("cart")}
          >
            장바구니 ({cartCount})
          </button>
        </div>
      </div>
    </nav>

    <div className="page-root">
      {view === "products" ? (
        <ProductPage
          products={PRODUCT_CATALOG}
          cartItems={cartItems}
          onAddOne={addOneToCart}
          onRemove={removeFromCart}
          goToCart={() => setView("cart")}
        />
      ) : (
        <CartPage items={cartItems} setItems={setCartItems} />
      )}
    </div>
  </div>
);

}

export default App;
