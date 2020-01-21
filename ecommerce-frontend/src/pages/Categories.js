import React, { useContext, useState, useEffect } from "react";

import { Grid, Header, Button } from "semantic-ui-react";

import Category from "../components/Category";
import Pagination from "../components/Pagination";
import AddCategoryForm from "../components/AddCategoryForm";

import Context from "../config/context";

export default function Categories() {
  const context = useContext(Context);
  const { categories, getCategories } = context;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);

  useEffect(() => {
    getCategories();
  }, []);

  // Get current categories
  const indexOfLastCategory = currentPage * cardsPerPage;
  const indexOfFirstCategory = indexOfLastCategory - cardsPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const views = categories ? (
    currentCategories.map(category => (
      <Grid.Column key={category.id}>
        <Category category={category} />
      </Grid.Column>
    ))
  ) : (
    <Header>Nothing here!</Header>
  );

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pagination =
    categories.length > cardsPerPage ? (
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={categories.length}
        paginate={paginate}
      />
    ) : null;
  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <Grid.Column>
          <h1>Recent Categories</h1>
        </Grid.Column>
        <Grid.Column />
        <Grid.Column>
          <AddCategoryForm />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>{views}</Grid.Row>
      <Grid.Row centered>{pagination}</Grid.Row>
    </Grid>
  );
}
