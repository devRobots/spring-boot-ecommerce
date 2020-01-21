import React from "react";

import "semantic-ui-css/semantic.min.css";
import { Button, Form } from "semantic-ui-react";

export default function SigninForm() {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="yourmail@mail.com" type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="*****" type="password" />
        </Form.Field>
        <Button type="submit" fluid>
          Sign in
        </Button>
      </Form>
    </div>
  );
}
