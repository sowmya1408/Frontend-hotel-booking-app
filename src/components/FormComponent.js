import React from "react";
import { Form, Button } from "react-bootstrap";

const FormComponent = ({ handleChange,handleSelect, rooms,handleSubmit, customerselect }) => {
  return (
    <div>
      <Form className="form" onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicName">
          <Form.Label>Fullname</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Enter FullName"
            value={customerselect.name}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={customerselect.email}
            onChange={(e) => handleChange(e)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPhonenumber">
          <Form.Label>Phonenumber</Form.Label>
          <Form.Control
            name="phonenumber"
            type="text"
            placeholder="Enter phonenumber"
            value={customerselect.phonenumber}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassportnumber">
          <Form.Label>Passport Number</Form.Label>
          <Form.Control
            name="passportnumber"
            type="text"
            placeholder="Enter passportnumber"
            value={customerselect.passportnumber}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassportnumber">
          <Form.Label>Book date</Form.Label>
          <Form.Control
            name="bookeddate"
            type="date"
            placeholder="select date"
            value={customerselect.bookeddate}
            onChange={(e) => handleChange(e)}
          />
        </Form.Group>
        <Form.Group controlId="selectroom">
          <Form.Label>Select room</Form.Label>
          <Form.Control
          name='rooms'
            multiple
            as="select"
            custom
            value={rooms}
            onChange={(e) => handleSelect(e)}
          >
            <option value="5f7c6f5ac9b5430d58715c9e">LUXURY DOUBLE ROOM</option>
            <option value="5f7c6fa9c9b5430d58715c9f">DELUX DOUBLE ROOM</option>
            <option value="5f7c6fefc9b5430d58715ca0">LUXURY SINGLE ROOM</option>
            <option value="5f7c7019c9b5430d58715ca1">DELUX SINGLE ROOM</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default FormComponent;
