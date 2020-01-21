import React, { useContext, useEffect } from "react";

import { Grid } from "semantic-ui-react";

import Category from "../components/Category";

import Context from "../config/context";

export default function Categories() {
  const context = useContext(Context);
  const { categories, getCategories } = context;

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Recent Categories</h1>
      </Grid.Row>
      <Grid.Row>
        {categories.map(category => (
          <Grid.Column>
            <Category category={category} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  );
}
