import { ADD_PRODUCT,ADD_QUANTITY,REMOVE_QUANTITY } from "./actionType";

export const addProduct =( product )=>{
    // object ที่ส่งไป
    return { type:ADD_PRODUCT, payload: product };
};

//
export const addQuantity =(productId, quantity)=>{
    return {type: ADD_QUANTITY, payload:{productId,quantity }};
}

export const removeQuantity = (productId) =>{
    return {type: REMOVE_QUANTITY}
}