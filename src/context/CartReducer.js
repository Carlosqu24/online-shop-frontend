export default function cartReducer(state, action) {

      switch (action.type) {
            case 'ADD_CART_ITEM':
            
                  return {
                        cart: [...state.cart, action.payload]
                  };
            case 'ADD_ITEM_QUANTITY':
                  const mapped = state.cart.map(item => {
                        if(item._id == action.payload) item.quantity = item.quantity + 1
      
                        return item
                  });

                  return {
                        cart: mapped
                  }
            case 'SUBSTRACT_ITEM_QUANTITY':
                  const mappedCart = state.cart.map(item => {
                        if(item._id == action.payload) item.quantity == 1 ? item.quantity = 1 : item.quantity = item.quantity - 1;
      
                        return item
                  });
      
                  return {
                        cart: mappedCart
                  }
            case 'DELETE_CART_ITEM':
                  
                  return {
                        cart: state.cart.filter(item => item._id != action.payload)
                  };
            case 'DELETE_ALL_CART_ITEMS':

                  return {
                        cart: []
                  }
      }
}