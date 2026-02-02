import React from "react";
import { useSelector, useDispatch } from "react-redux";

function NavBar() {
  const dispatch = useDispatch();

  // 1. ดึงข้อมูลสินค้าจาก Store (สมมติว่า state ชื่อ carts ตามโครงสร้าง Redux ทั่วไป)
  const carts = useSelector((state) => state.carts);

  // 2. คำนวณจำนวนสินค้าทั้งหมดในตะกร้า (Sum quantity)
  // ถ้าไม่มี carts ให้เป็น 0
  const cartCount = carts
    ? carts.reduce((total, item) => total + item.quantity, 0)
    : 0;

  const handlePageChange = (pageType) => {
    dispatch({ type: pageType });
  };

  return (
    <nav className="bg-[#1a1f3d] text-white py-4 px-8 flex justify-between items-center sticky top-0 z-50 shadow-md">
      {/* Logo: กดแล้วกลับหน้า Home ได้ด้วย */}
      <div
        className="text-2xl font-bold tracking-wide cursor-pointer"
        onClick={() => handlePageChange("HOME")}
      >
        ShoppingCart
      </div>

      {/* Right Menu */}
      <div className="flex items-center gap-6">
        {/* Home Link: เปลี่ยนจาก <a> เป็นปุ่มเพื่อให้กดแล้วไม่ refresh หน้า */}
        <button
          onClick={() => handlePageChange("HOME")}
          className="hover:text-gray-300 transition-colors font-medium focus:outline-none"
        >
          Home
        </button>

        {/* Cart Icon with Badge */}
        <div
          className="relative cursor-pointer hover:text-gray-200 transition-colors"
          onClick={() => handlePageChange("CART")} // กดแล้วไปหน้า Cart
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>

          {/* Badge แสดงตัวเลขจำนวนสินค้า */}
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center border-2 border-[#1a1f3d]">
            {cartCount}
          </span>
        </div>

        {/* User Avatar */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-400">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
