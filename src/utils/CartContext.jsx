import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("glowe-cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  // Simpan keranjang ke localStorage
  useEffect(() => {
    localStorage.setItem(
      "glowe-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  // Tambah produk ke keranjang
  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + 1,
              }
            : item
        );
      }

      return [
        ...prev,
        {
          ...product,
          qty: 1,
        },
      ];
    });
  };

  // Ubah jumlah produk
  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(1, qty),
            }
          : item
      )
    );
  };

  // Hapus satu produk
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev.filter(
        (item) => item.id !== id
      )
    );
  };

  // Kosongkan seluruh keranjang setelah checkout
  const clearCart = () => {
    setCart([]);
  };

  // Total jumlah barang
  const totalQty = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQty,
        removeFromCart,
        clearCart,
        totalQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () =>
  useContext(CartContext);