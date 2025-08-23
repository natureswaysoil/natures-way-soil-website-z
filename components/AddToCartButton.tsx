import React from "react";
import { useCart } from "@/context/CartContext";

type AddToCartButtonProps = {
  id: string;
  name: string;
  amount: number;
  quantity?: number;
  className?: string;
};

export const AddToCartButton: React.FC<AddToCartButtonProps> = ({
  id,
  name,
  amount,
  quantity = 1,
  className,
}) => {
  const { addToCart } = useCart();

  return (
    <button
      className={className}
      onClick={() => addToCart({ id, name, amount, quantity })}
    >
      Add to Cart
    </button>
  );
};

