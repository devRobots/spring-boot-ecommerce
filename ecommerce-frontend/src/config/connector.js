import React, { useReducer } from "react";
import axiosClient from "./axios";

// context
import userContext from "./context";

// reducer
import Reducer from "./reducer";

// type tags
import { POST_USER, GET_CATEGORIES, GET_PRODUCTS } from "./values";

const Context = props => {
  const initialState = {
    user: null,
    categories: [],
    products: []
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

  // functions
  const addUser = async user => {
    const res = await axiosClient.post("/users/add", user);

    dispatch({
      type: POST_USER,
      payload: res.data
    });
  };
  const getCategories = async () => {
    const res = await axiosClient.get("/categories/all");
    
    dispatch({
      type: GET_CATEGORIES,
      payload: res.data
    });
  };
  const getProducts = async () => {
    const res = await axiosClient.get("/products/all");
    
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data
    });
  };

  return (
    <userContext.Provider
      value={{
        user: state.user,
        categories: state.categories,
        products: state.products,
        addUser,
        getCategories,
        getProducts
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
