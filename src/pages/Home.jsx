import React from "react";
import NavBar from "../components/NavBar"; // Import Navbar
import AddProductForm from "../components/AddProductForm";
import ProductItem from "../components/ProductItem";
import { useState } from "react";
import { useSelector } from "react-redux";
const Home = () => {
    const product = useSelector((state) => state.products);
  return (
    <div className="min-h-screen bg-[#1F222B]">
      {" "}
      {/* พื้นหลัง Dark ทั้งหน้า */}
      {/* 1. ใส่ NavBar ไว้บนสุด */}
      
      <div className="p-8 flex justify-center">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side: Product Grid (กินพื้นที่ 2 ส่วน) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {product.map((product) => (
              <ProductItem key={product.id} product={product} />
            ))}
          </div>

          {/* Right Side: Form (กินพื้นที่ 1 ส่วน) */}
          <div className="lg:col-span-1">
            <AddProductForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
