import { GET_PRODUCTS, POST_USER } from "./values";

export default (state, action) => {
  switch (action.type) {
    case POST_USER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        user: action.payload
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};
