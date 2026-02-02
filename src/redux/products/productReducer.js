import { ADD_PRODUCT, ADD_QUANTITY, REMOVE_QUANTITY } from "./actionType";
import { initialSate } from "./initialState";

const nextId = (items) => {
  return items.reduce((id, item) => Math.max(id, item.id), 0) + 1;
};
const productReducer = (state = initialSate, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      //ต้องสร้าง arrey ใหม่ เพิ่มสินค้าใหม่
      return [
        ...state,
        {
          id: nextId(state),
          ...action.payload,
          price: parseFloat(action.payload.price),
          quantity: parseInt(action.payload.quantity),
        },
      ];
    case ADD_QUANTITY:
      // วนลูปด้วย map
      return state.map((product) => {
        //กรณีที่ id ตรงกัน
        if (product.id === action.payload.productId) {
          return {
            ...product,
            quantity: product.quantity + action.payload.quantity,
          };
        } else {
          return product;
        }
      });
    case REMOVE_QUANTITY:
      // วนลูปด้วย map
      return state.map((product) => {
        //กรณีที่ id ตรงกัน
        if (product.id === action.payload.productId) {
          return {
            ...product,
            //ถ้าต้องการลบที่ละ 1 ใส่เป็น -1 แต่ถ้าต้องการลบเยอะต้องใส่ + action.payload.quantity
            quantity: product.quantity - 1,
          };
        } else {
          return product;
        }
      });
    default:
      return state;
  }
};
export default productReducer;
