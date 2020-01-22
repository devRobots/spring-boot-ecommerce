import React, { useContext } from "react";

import { Container, Header, Image, Label, Button } from "semantic-ui-react";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  const { user } = context;

  console.log(user);

  const greeting = user ? (
    <div>
      <Label size="massive" color="teal">
        Welcome, {user.email}
      </Label>
    </div>
  ) : null;

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
