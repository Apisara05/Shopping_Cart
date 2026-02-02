import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action"; // ตรวจสอบ path ให้ถูกต้อง

const AddProductForm = () => {
  const dispatch = useDispatch();

  // 1. สร้าง State สำหรับเก็บค่าจาก Form
  const initialState = {
    name: "",
    category: "",
    imageUrl: "",
    price: "",
    quantity: "",
  };
  const [formData, setFormData] = useState(initialState);

  // 2. ฟังก์ชันรับค่าเมื่อมีการพิมพ์ (Handle Input Change)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // 3. ฟังก์ชันเมื่อกดปุ่ม Add (Handle Submit)
  const handleSubmit = (e) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรช

    // ตรวจสอบว่ากรอกข้อมูลครบไหม (Optional)
    if (!formData.name || !formData.price) {
      alert("Please fill in all fields");
      return;
    }

    // เตรียมข้อมูลสินค้าใหม่ (แปลงตัวเลขจาก String เป็น Number)
    const newProduct = {
      name: formData.name,
      category: formData.category,
      imageUrl: formData.imageUrl,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
    };

    // ส่ง Action ไปยัง Redux
    dispatch(addProduct(newProduct));

    // ล้างค่าในฟอร์มให้ว่าง
    setFormData(initialState);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full">
      <h2 className="text-xl font-bold text-gray-700 mb-6 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Product Name
          </label>
          <input
            type="text"
            name="name" // ต้องตรงกับ key ใน state
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select a category</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Appliances">Appliances</option>
            <option value="Footwear">Footwear</option>
          </select>
        </div>

        {/* Image Url */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">
            Image Url
          </label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleInputChange}
            required
            className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Price & Quantity */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Price
            </label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium mb-1">
              Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit" // เปลี่ยนเป็น submit เพื่อเรียก onSubmit ของ form
          className="w-full bg-[#525CEB] hover:bg-[#434bd1] text-white font-medium py-2 rounded mt-4 transition-colors"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProductForm;
