import React, { useReducer } from "react";
import axiosClient from "./axios";

// context
import userContext from "./context";

// reducer
import Reducer from "./reducer";

// type tags
import {
  POST_USER,
  GET_USER,
  POST_CATEGORY,
  GET_CATEGORIES,
  GET_PRODUCTS,
  POST_PRODUCTS
} from "./values";

const Context = props => {
  const initialState = {
    user: null,
    products: [],
    categories: []
  };

  // Dispatch to execute actions
  const [state, dispatch] = useReducer(Reducer, initialState);

  // POST Methods
  const addUser = async user => {
    const res = await axiosClient.post("/users/add", user);

    dispatch({
      type: POST_USER,
      payload: res.data
    });
  };
  const addCategory = async category => {
    const res = await axiosClient.post("/categories/add", category);
    
    dispatch({
      type: POST_CATEGORY,
      payload: res.data
    });
  };
  const addProduct = async product => {
    const res = await axiosClient.post("/products/add", product);

    dispatch({
      type: POST_PRODUCTS,
      payload: res.data
    });
  };
  
  // GET Methods
  const getUser = async () => {
    const res = await axiosClient.get("/users/get");

    dispatch({
      type: GET_USER,
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
        addCategory,
        addProduct,
        getUser,
        getCategories,
        getProducts
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default Context;
