import React from "react";
import { Card, Image, Label } from "semantic-ui-react";

export default function Category(props) {
  return (
    <div>
      <Card color="teal">
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.category.name}</Card.Header>
        </Card.Content>
      </Card>
    </div>
  );
}
