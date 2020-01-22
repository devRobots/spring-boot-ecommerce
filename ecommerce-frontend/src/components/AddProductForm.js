import React, { useContext, useState, useEffect } from "react";

import { Form, Modal, Button, Header, Dropdown } from "semantic-ui-react";

import Context from "../config/context";

export default function AddProductForm() {
  const context = useContext(Context);
  const { categories, getCategories, addProduct } = context;

  useEffect(() => {
    getCategories();
  }, []);

  const listCategories = categories.map(category => ({
    key: category.id,
    text: category.name,
    value: category.id
  }));

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [weight, setWeight] = useState("");
  const [picture1, setPicture1] = useState("");
  const [picture2, setPicture2] = useState("");
  const [picture3, setPicture3] = useState("");

  const handleChange1 = (e, { value }) => setName({ value });
  const handleChange2 = (e, { value }) => setDescription({ value });
  const handleChange3 = (e, { value }) => setCategory({ value });
  const handleChange4 = (e, { value }) => setPrice({ value });
  const handleChange5 = (e, { value }) => setWeight({ value });
  const handleChange6 = (e, { value }) => setPicture1({ value });
  const handleChange7 = (e, { value }) => setPicture2({ value });
  const handleChange8 = (e, { value }) => setPicture3({ value });

  const handleSubmit = () => {
    const pictures = [picture1.value, picture2.value, picture3.value];

    const product = {
      name: name.value,
      description: description.value,
      category_id: parseInt(category.value),
      price: parseFloat(price.value),
      weight: parseFloat(weight.value),
      picture1: pictures[0],
      picture2: pictures[1],
      picture3: pictures[2]
    };

    addProduct(product);
  };

  return (
    <Modal
      trigger={
        <Button primary fluid>
          Add new Product
        </Button>
      }
    >
      <Modal.Header>Add new Product</Modal.Header>
      <Modal.Content>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            name="name"
            label="Name"
            placeholder="Product name"
            onChange={handleChange1}
            value={name.value}
          />
          <Form.Input
            name="description"
            label="Description"
            placeholder="Product description (Optional)"
            onChange={handleChange2}
            value={description.value}
          />
          <Form.Field>
            <Header as="h5">Category</Header>
            <Dropdown
              name="category"
              placeholder="Category"
              fluid
              selection
              options={listCategories}
              onChange={handleChange3}
              value={category.value}
            />
          </Form.Field>
          <Form.Group widths="equal">
            <Form.Input
              name="price"
              label="Price"
              placeholder="Price (USD)"
              onChange={handleChange4}
              value={price.value}
            />
            <Form.Input
              name="weight"
              label="Weight"
              placeholder="Weigth (Kg)"
              onChange={handleChange5}
              value={weight.value}
            />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              name="picture1"
              label="Image 1"
              placeholder="Image 1 URL"
              onChange={handleChange6}
              value={picture1.value}
            />
            <Form.Input
              name="picture2"
              label="Image 2"
              placeholder="Image 2 URL"
              onChange={handleChange7}
              value={picture2.value}
            />
            <Form.Input
              name="picture3"
              label="Image 3"
              placeholder="Image 3 URL"
              onChange={handleChange8}
              value={picture3.value}
            />
          </Form.Group>
          <Button type="submit">Add</Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
