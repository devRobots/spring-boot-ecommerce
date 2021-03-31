import React, { useContext } from "react";

import { Container, Header, Image, Label } from "semantic-ui-react";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  const { user } = context;

  const greeting = user ? (
    <div>
      <Label size="massive" color="teal">
        Welcome, {user.email}
      </Label>
    </div>
  ) : (
    <div>
      <Label basic size="large" color="red" pointing prompt>
        Você precisa logar para começar a comprar!
      </Label>
    </div>
  );

  return (
    <Container textAlign="center">
      <Image
        src="https://images-na.ssl-images-amazon.com/images/I/51J6cQ63OJL.png"
        size="large"
        centered
      />
      <Header as="h1" color="teal">
        5DVP
      </Header>
      <Header as="h3">
        Trabalho de conclusão da disciplina de Microsservices Architecture
      </Header>
      {greeting}
    </Container>
  );
}
