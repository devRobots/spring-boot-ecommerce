import React, { useContext, useState } from "react";

import { Grid, Card, Header, Button, Form } from "semantic-ui-react";

import Context from "../config/context";

export default function Signin() {
  const context = useContext(Context);
  const { addUser } = context;

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  const handleChange1 = (e, { value }) => setName({ value });
  const handleChange2 = (e, { value }) => setPicture({ value });

  const handleSubmit = () => {
    const user = {
      email: name.value,
      password: picture.value
    };

    addUser(user);
  };
  return (
    <Grid verticalAlign="middle" columns={3} centered>
      <Grid.Row>
        <Grid.Column>
          <Card fluid>
            <Card.Content>
              <Header textAlign="center">¡Welcome to eCommerce!</Header>
              <Form onSubmit={handleSubmit}>
                <Form.Input
                  name="name"
                  label="Email"
                  placeholder="yourmail@mail.com"
                  onChange={handleChange1}
                  value={name.value}
                />
                <Form.Input
                  name="image"
                  label="Password"
                  placeholder="*****"
                  type="password"
                  onChange={handleChange2}
                  value={picture.value}
                />
                <Button primary type="submit">Sign in</Button>
              </Form>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
