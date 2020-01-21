import React from "react";

import {
  Container,
  Header,
  Button,
  Image,
  Grid,
  Segment,
  Divider
} from "semantic-ui-react";

export default function Home() {
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
      <Segment>
        <Grid columns={2}>
          <Grid.Column>
            <Button primary>Categories</Button>
          </Grid.Column>
          <Grid.Column>
            <Button primary>Products</Button>
          </Grid.Column>
        </Grid>

        <Divider vertical>And</Divider>
      </Segment>
    </Container>
  );
}
