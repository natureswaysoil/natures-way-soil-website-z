import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function CartBar() {
  const { cart, handleCheckout } = useContext(CartContext);

  if (!cart.length) return null;

  return (
    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
      <button
        onClick={handleCheckout}
        style={{
          background: '#144135',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '1rem 2rem',
          fontWeight: 700,
          fontSize: '1.1rem',
        }}
      >
        Checkout ({cart.length} items)
      </button>
    </div>
  );
}