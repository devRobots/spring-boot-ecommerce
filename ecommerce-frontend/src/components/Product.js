import React from "react";
import { Card, Image } from "semantic-ui-react";

export default function Product(props) {
  console.log(props.product.pictures);

  const pic = props.product.pictures
    ? props.product.pictures[0]
    : "https://react.semantic-ui.com/images/avatar/large/matthew.png";
  return (
    <div>
      <Card>
        <Image
          src={pic}
          wrapped
          ui={false}
        />
        <Card.Content>
          <Card.Header>{props.product.name}</Card.Header>
          <Card.Meta>
            <span className="date">Peso: {props.product.weight} - Precio: {props.product.price}</span>
          </Card.Meta>
          <Card.Description>
            {props.product.description}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}
