import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/actions/actionTodo";
import Swal from 'sweetalert2'

export default function CardTodo({ todo }) {
  const dispatch = useDispatch();
  console.log(todo.id)
  const deleteButton = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(deleteTodo(todo.id));
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } 
    }) 
  };

  return (
    <div>
      <Card
        key={todo.id}
        style={{
          width: "18rem",
          height: "21rem",
          marginRight: "20px",
          marginTop: "20px"
        }}
      >
        <Card.Body>
          <Card.Header as="h5" style={{ textAlign: "center" }}>
            {todo.title}
          </Card.Header>
          <Card.Text style={{ margin: "10px" }}>{todo.description}</Card.Text>
          <footer className="blockquote-footer">
            <cite title="Source Title">{todo.status}</cite>
          </footer>
          <div className="button-card">
            <Link to={`/editTodo/${todo.id}`}>
              <Button
                style={{ marginRight: "10px", width: "120px", height: "30px" }}
                variant="outline-info"
                size="sm"
              >
                Edit
              </Button>
            </Link>
            <Button
              style={{ width: "120px" }}
              variant="outline-danger"
              size="sm"
              onClick={deleteButton}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}