import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Grid, Card, Header } from "semantic-ui-react";

import SigninForm from "../components/auth/SigninForm";

import Context from "../config/context";

export default function Signin() {
  return (
    <Grid verticalAlign="middle" columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Header textAlign="center">¡Welcome to eCommerce!</Header>
              <SigninForm />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
