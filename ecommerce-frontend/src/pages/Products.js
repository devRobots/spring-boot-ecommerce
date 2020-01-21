import React, { useContext, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import Product from "../components/Product";

import Context from "../config/context";

export default function Products() {
  const context = useContext(Context);
  const { products, getProducts } = context;

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Products</h1>
      </Grid.Row>
      <Grid.Row>
        {products.map((product, i) => (
          <Grid.Column>
            <Product product={product} key={i} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}
