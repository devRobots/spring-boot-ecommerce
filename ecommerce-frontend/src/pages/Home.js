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
        You need to login to go shopping
      </Label>
    </div>
  );

  return (
    <Container textAlign="center">
      <Image
        src="http://www.perfiltic.com/img/logo.png"
        size="large"
        centered
      />
      <Header as="h1" color="teal">
        eCommerce Application
      </Header>
      <Header as="h3">
        A simple eCommerce Application made with Spring Boot and React for
        PerfilTIC.com
      </Header>
      {greeting}
    </Container>
  );
}
