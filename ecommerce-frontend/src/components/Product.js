import React, {useContext} from "react";
import { Card, Image, Button } from "semantic-ui-react";

import Detail from "./Detail";

import Context from "../config/context";

export default function Product(props) {
  const context = useContext(Context);
  const { user, addUser } = context;



  console.log(props.product.pictures);

  const pic = props.product.pictures
    ? props.product.pictures[0]
    : "https://react.semantic-ui.com/images/avatar/large/matthew.png";
  
  const extra = user ? (
    <Card.Content extra>
      <Detail product={props.product} />
    </Card.Content>
  ) : null;
  
  return (
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
        {extra}
      </Card>
  );
}
