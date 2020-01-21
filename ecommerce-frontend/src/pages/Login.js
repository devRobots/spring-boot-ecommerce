import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Grid, Card, Header } from "semantic-ui-react";

import LoginForm from "../components/auth/LoginForm";

import Context from "../config/context";

export default function Login() {
  return (
    <Grid verticalAlign="middle" columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Header textAlign="center">¡Hello again!</Header>
              <LoginForm />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
