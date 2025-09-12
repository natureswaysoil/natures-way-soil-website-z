import React from "react";
import { useCart } from "@/lib/cart";

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
  const { addItem } = useCart();

  return (
    <button
      className={className}
      onClick={() => addItem({ id, name, amount, quantity })}
    >
      Add to Cart
    </button>
  );
};

