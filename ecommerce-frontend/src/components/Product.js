import React, { useContext } from "react";
import { Card, Image, Header, Label, Grid } from "semantic-ui-react";

import Detail from "./Detail";

import Context from "../config/context";

export default function Product(props) {
  const context = useContext(Context);
  const { user } = context;

  const pic = props.product.picture1
    ? props.product.picture1
    : "https://react.semantic-ui.com/images/avatar/large/matthew.png";

  const extra = user ? (
    <Card.Content extra>
      <Detail product={props.product} />
    </Card.Content>
  ) : null;

  return (
    <Card>
      <Image src={pic} wrapped ui={false} />
      <Label color="teal" size="large" attached="top left">
        Comida
      </Label>
      <Card.Content>
        <Card.Header>
          <Header floated="left">{props.product.name}</Header>
          <Header floated="right" color="teal">
            ${props.product.price}
          </Header>
        </Card.Header>
        <Card.Description>{props.product.description}</Card.Description>
      </Card.Content>
      {extra}
    </Card>
  );
}
