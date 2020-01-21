import React, { useContext, useState, useEffect } from "react";

import { Grid, Header, Button } from "semantic-ui-react";

import Product from "../components/Product";
import Pagination from "../components/Pagination";
import AddProductForm from "../components/AddProductForm";

import Context from "../config/context";

export default function Products() {
  const context = useContext(Context);
  const { products, getProducts } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    getProducts();
  }, []);

  // Get current products
  const indexOfLastProduct = currentPage * cardsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - cardsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const views = products ? (
    currentProducts.map(product => (
      <Grid.Column key={product.id}>
        <Product product={product} />
      </Grid.Column>
    ))
  ) : (
    <Header>Nothing here!</Header>
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pagination =
    products.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={products.length}
        paginate={paginate}
      />
    ) : null;

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>Recent Products</h1>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column>
          <AddProductForm />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>{views}</Grid.Row>
      <Grid.Row centered>{pagination}</Grid.Row>
    </Grid>
  );
}
