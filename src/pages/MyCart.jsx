import React from 'react'
import{ useSelector } from 'react-redux';
import CartItem from '../components/CartItem.jsx';
function MyCart() {
  const carts = useSelector((state) => state.carts);

    return (
      <div className="bg-[#1F222B] min-h-screen py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-white mb-6">Shopping Cart</h1>

          {/* Layout แบบ Grid: ซ้าย 2 ส่วน, ขวา 1 ส่วน (บนจอกว้าง) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Column ซ้าย: รายการสินค้า */}
            <div className="lg:col-span-2 space-y-4">
              {carts.length > 0 ? (
                carts.map((item) => <CartItem key={item.id} item={item} />)
              ) : (
                <div className="bg-white p-8 rounded-lg text-center text-gray-500">
                  Your cart is empty.
                </div>
              )}
            </div>

            {/* Column ขวา: สรุปยอดเงิน */}
            <div className="w-full lg:w-1/3 h-fit sticky top-24"></div>
          </div>
        </div>
      </div>
    );
};


export default MyCart;