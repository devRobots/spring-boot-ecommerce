import React, { useContext, useState, useEffect } from "react";

import { Grid, Card, Segment } from "semantic-ui-react";

import Product from "../components/Product";
import Pagination from "../components/Pagination";
import AddProductForm from "../components/AddProductForm";

import Context from "../config/context";

export default function Products() {
  const context = useContext(Context);
  const { user, products, getProducts } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);

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

  const views =
    products.length > 0 ? (
      currentProducts.map(product => <Product product={product} />)
    ) : (
      <Card>
        <Card.Content>
          <h2>Nothing here!</h2>
        </Card.Content>
      </Card>
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

  const add = user ? user.admin ? <AddProductForm /> : null : null;

  return (
    <div>
      <Segment>
        <Grid>
          <Grid.Column floated="left" width={5}>
            <h1>Recent Products</h1>
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            {add}
          </Grid.Column>
        </Grid>
      </Segment>
      <Card.Group fluid itemsPerRow="3">
        {views}
      </Card.Group>
      <br />
      <center>{pagination}</center>
    </div>
  );
}
