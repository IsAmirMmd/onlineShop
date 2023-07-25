const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index < 0) updatedCart.push({ ...action.payload, quantity: 1 });
      else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity++;
        updatedCart[index] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
        off: state.off + (action.payload.price - action.payload.offPrice),
      };
    }
    case "DECREMENT_AMOUNT": {
      const updatedCart = [...state.cart];
      const index = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (action.payload.quantity === 1) {
        const newUpdatedCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: newUpdatedCart,
          total: state.total - action.payload.offPrice,
          off: state.off - (action.payload.price - action.payload.offPrice),
        };
      } else {
        const updatedItem = { ...updatedCart[index] };
        updatedItem.quantity--;
        updatedCart[index] = updatedItem;
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total - action.payload.offPrice,
        off: state.off - (action.payload.price - action.payload.offPrice),
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
