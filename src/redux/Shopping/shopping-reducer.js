import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Socks on sale",
      description:
        "Comfortable Nike socks for men",
      price: 50.0,
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/17f774fb-a2ba-46cb-b6bf-7a798594f5ee/everyday-cushioned-training-ankle-socks-M8n3Xm.png",
    },
    {
      id: 2,
      title: "White T-shirt",
      description:
        "Nice white t-shirts for men",
      price: 150.00,
      image:
        "https://i.pinimg.com/564x/c1/1d/16/c11d164de692594acf53c9a855093139.jpg",
    },
    {
      id: 3,
      title: "Air Force 1",
      description:
        "The best shoe ever created.",
      price: 900.0,
      image:
        "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e777c881-5b62-4250-92a6-362967f54cca/air-force-1-07-sko-QxRXZV.png",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
