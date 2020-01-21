import React from "react";

import { Button } from "semantic-ui-react";

export default function Pagination({ cardsPerPage, totalCards, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Button.Group className="pagination">
      {pageNumbers.map(number => (
        <Button onClick={() => paginate(number)} className="page-link">
          {number}
        </Button>
      ))}
    </Button.Group>
  );
}
