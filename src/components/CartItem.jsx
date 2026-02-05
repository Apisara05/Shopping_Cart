import React from "react";
import { useDispatch } from "react-redux";
// ตรวจสอบชื่อ action ของคุณให้ตรงกับไฟล์ action.js นะครับ
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../redux/carts/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white text-gray-800 rounded-lg p-4 flex items-center gap-4 shadow-sm">
      {/* Product Image - แก้เป็น imageUrl ตาม initialState */}
      <img
        src={item.imageUrl}
        alt={item.name}
        className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md bg-gray-100"
      />

      {/* Product Details */}
      <div className="flex-1">
        <h3 className="text-lg font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">Price: ${item.price}</p>
        <p className="text-sm text-gray-500">
          Category: <span className="text-blue-500">{item.category}</span>
        </p>
      </div>

      {/* Quantity & Actions */}
      <div className="flex flex-col items-end gap-4">
        <div className="flex items-center border border-gray-200 rounded overflow-hidden">
          <button
            onClick={() => dispatch(decreaseQuantity(item.id))}
            disabled={item.quantity <= 1}
            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-gray-400 disabled:opacity-30 transition-colors"
          >
            &minus;
          </button>
          <span className="px-4 py-1 text-sm font-medium border-x border-gray-100">
            {item.quantity}
          </span>
          <button
            onClick={() => dispatch(increaseQuantity(item.id))}
            className="px-3 py-1 bg-gray-50 hover:bg-gray-200 text-gray-400 transition-colors"
          >
            &#43;
          </button>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-gray-400">
            ${(item.price * item.quantity).toLocaleString()}
          </span>
          <button
            onClick={() => dispatch(removeFromCart(item.id))}
            className="text-gray-400 hover:text-red-500 text-xl leading-none"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
