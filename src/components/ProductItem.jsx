import React from "react";

const ProductItem = ({ product }) => {
  // กำหนดค่า Default เผื่อกรณีข้อมูลไม่ครบ หรือยังไม่ได้ส่ง props มา
  const {
    name = "Laptop",
    description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga",
    price = 1200,
    stock = 10,
    category = "Electronics",
    imageUrl = "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
  } = product || {};

  return (
    // Card Container
    <div className="w-full bg-[#1F222B] rounded-2xl overflow-hidden shadow-lg border border-gray-800 transition-transform hover:scale-105 duration-300">
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <img
          className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
          src={imageUrl}
          alt={name}
        />

        {/* Badge */}
        <span className="absolute top-3 right-3 bg-[#EE46BC] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-sm">
          {category}
        </span>
      </div>

      {/* Content Section */}
      <div className="p-5">
        {/* Title */}
        <h2 className="text-gray-100 text-xl font-bold mb-2 truncate">
          {name}
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-5 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Info Row (Availability & Price) */}
        <div className="flex justify-between items-center mb-5 text-sm">
          <span className="text-gray-300">
            Available:{" "}
            <span className={stock > 0 ? "text-green-400" : "text-red-400"}>
              {stock}
            </span>
          </span>
          <span className="text-gray-100 font-bold text-lg">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
