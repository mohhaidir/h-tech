import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormAdd(props) {
  let check = false;
  if (
    (!props.title && props.description) ||
    (props.title && !props.description) ||
    (!props.title && !props.description)
  ) {
    check = true;
  }
  return (
    <div>
      <div className="form-add-title">
        <h1 className="form-add-text">Add Todo</h1>
      </div>
      <Form className="form-add">
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ fontSize: "23px" }}>Title</Form.Label>
          <Form.Control
            onChange={e => props.setTitle(e.target.value)}
            type="text"
            placeholder="Enter Todo's Title"
            maxlength="17"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Required Your Todo's Name Such as Category, etc. ( Max. 17 Character
            )
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label style={{ fontSize: "23px" }}>Description</Form.Label>
          <Form.Control
            onChange={e => props.setDescription(e.target.value)}
            type="Text"
            placeholder="Enter Todo's Description"
            as="textarea"
            rows="5"
            maxlength="150"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Required Your Todo's Description. ( Max. 150 Character )
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ fontSize: "23px" }}>Status</Form.Label>
          <Form.Control
            onChange={e => props.setStatus(e.target.value)}
            type="Text"
            placeholder="Enter Todo's Status"
            rows="5"
            maxlength="50"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Required Your Todo's Status. ( Max. 50 Character )
          </Form.Text>
        </Form.Group>
        {!check && (
          <Button
            style={{ height: "40px", fontSize: "20px", fontWeight: "500" }}
            onClick={e => props.onAddSubmit(e)}
            variant="info"
            type="submit"
            size="sm"
            block
          >
            Submit
          </Button>
        )}
        {check && (
          <Button
            style={{ height: "40px", fontSize: "20px", fontWeight: "500" }}
            variant="info"
            type="submit"
            size="sm"
            block
            disabled
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
}