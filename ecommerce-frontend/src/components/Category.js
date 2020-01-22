import React from "react";
import { Card, Image, Label } from "semantic-ui-react";

export default function Category(props) {
  const pic = props.category.picture
    ? props.category.picture
    : "https://react.semantic-ui.com/images/avatar/large/matthew.png";

  return (
    <Card color="teal">
      <Image src={pic} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.category.name}</Card.Header>
      </Card.Content>
    </Card>
  );
}
