import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FormAdd } from "../components";
import { addTodoAction } from "../store/actions/actionTodo";
import { useHistory } from "react-router-dom";
import Swal from 'sweetalert2'

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const onAddSubmit = e => {
    const dataInput = {
      title,
      description,
      status
    };
    dispatch(addTodoAction(dataInput));
    history.push("/todos");
    Swal.fire({
        position: 'mid-center',
        icon: 'success',
        title: 'One todo has been added!',
        showConfirmButton: false,
        timer: 1500
    })
  };

  return (
    <div data-testid="add-form-page">
      <FormAdd
        title={title}
        description={description}
        status={status}
        setTitle={setTitle}
        setDescription={setDescription}
        setStatus={setStatus}
        onAddSubmit={onAddSubmit}
      />
    </div>
  );
}
