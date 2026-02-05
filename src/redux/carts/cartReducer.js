import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "./actionType";

import initialState from "./initialState.js";

const nextId = (items) => {
  return items.reduce((id, item) => Math.max(id, item.id), -1) + 1;
};

const findProductInCart = (state, action) => {
  // Cart entries store the original product id in `productId`.
  // When adding a product, action.payload is the product object
  // so compare against `productId` to find existing items.
  return state.find((product) => product.productId === action.payload.id);
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = findProductInCart(state, action);
      if (product) {
        return state.map((p) => {
          if (p.id === product.id) {
            return { ...p, quantity: p.quantity + 1 };
          } else {
            return p;
          }
        });
      } else {
        return [
          ...state,
          {
            ...action.payload,
            id: nextId(state),
            quantity: 1,
            productId: action.payload.id,
          },
        ];
      }
    }
    case REMOVE_FROM_CART:
      return state.filter((product) => product.id != action.payload);

    case INCREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        } else {
          return product;
        }
      });

    case DECREASE_QUANTITY:
      return state.map((product) => {
        if (product.id === action.payload) {
          return {
            ...product,
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

export default cartReducer;
