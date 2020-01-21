import React from "react";

import { Form, Modal, Button, Header, Dropdown } from "semantic-ui-react";

export default function Detail(props) {
  return (
    <Modal trigger={<Button fluid>Show product</Button>}>
      <Modal.Content>
        <Form>
          <Form.Input name="name" label="Name" value={props.product.name} />
          <Form.Input
            name="description"
            label="Description"
            value={props.product.description}
          />
          <Form.Input
            name="category"
            label="Category"
            value={props.product.category_id}
          />
          <Form.Group widths="equal">
            <Form.Input
              name="price"
              label="Price"
              value={props.product.price}
            />
            <Form.Input
              name="weight"
              label="Weight"
              value={props.product.weight}
            />
          </Form.Group>
          <Button primary fluid label="Comprar" />
        </Form>
      </Modal.Content>
    </Modal>
  );
}
