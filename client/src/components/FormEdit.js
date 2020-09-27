import React from "react";
import { Form, Button } from "react-bootstrap";

export default function FormEdit(props) {
  console.log(props.title)
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
        <h1 className="form-add-text">Edit Todo</h1>
      </div>
      <Form className="form-add">
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ fontSize: "23px" }}>Title</Form.Label>
          <Form.Control
            value={props.title}
            onChange={e => props.setTitle(e.target.value)}
            type="text"
            maxLength="17"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Edit Your Todo's Title Such as Category, etc. ( Max. 17 Character )
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicDescription">
          <Form.Label style={{ fontSize: "23px" }}>Description</Form.Label>
          <Form.Control
            value={props.description}
            onChange={e => props.setDescription(e.target.value)}
            type="Text"
            as="textarea"
            rows="5"
            maxLength="150"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Edit Your Todo's Description. ( Max. 150 Character )
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicName">
          <Form.Label style={{ fontSize: "23px" }}>Status</Form.Label>
          <Form.Control
            value={props.status}
            onChange={e => props.setStatus(e.target.value)}
            type="text"
            maxLength="50"
          />
          <Form.Text style={{ marginLeft: "3px" }} className="text-muted">
            Edit Your Todo's Status Such as Category, etc. ( Max. 50 Character )
          </Form.Text>
        </Form.Group>
        {!check && (
          <Button
            onClick={props.onEditSubmit}
            style={{ height: "40px", fontSize: "20px", fontWeight: "500" }}
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

