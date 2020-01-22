import React, { useContext, useState } from "react";

import { Redirect } from "react-router-dom";

import { Grid, Card, Header, Button, Form } from "semantic-ui-react";

import Home from "./Home";

import Context from "../config/context";

export default function Signin() {
  const context = useContext(Context);
  const { user, addUser } = context;

  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");

  const handleChange1 = (e, { value }) => setName({ value });
  const handleChange2 = (e, { value }) => setPicture({ value });

  const handleSubmit = () => {
    const username = name.value
      .replace(".com", "")
      .replace(".co", "")
      .replace(".", "");

    const user = {
      username: username,
      email: name.value,
      password: picture.value,
      is_admin: false
    };

    addUser(user);
  };

  const view = user ? (
    <Redirect to="/" />
  ) : (
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
          <Button color="teal" fluid type="submit">
            Sign in
          </Button>
        </Form>
      </Card.Content>
    </Card>
  );

  return view;
}
