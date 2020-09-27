import React, { useState, useEffect } from "react";
import { FormEdit } from "../components";
import { useParams, useHistory } from "react-router-dom";
import { editTodoAction } from "../store/actions/actionTodo";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'

export default function EditTodo() {
    const { id } = useParams();
    const [title, setEditTitle] = useState("");
    const [description, setEditDescription] = useState("");
    const [status, setEditStatus] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:3001/todo/${id}`)
        .then(result => result.json())
        .then(res => {
            setEditTitle(res.result.title);
            setEditDescription(res.result.description);
            setEditStatus(res.result.status);
        });
    }, []);

    const onEditSubmit = () => {
        const newData = {
            title,
            description,
            status
        };
        dispatch(editTodoAction(newData, id));
        Swal.fire({
            position: 'mid-center',
            icon: 'success',
            title: 'Success edit todo!',
            showConfirmButton: false,
            timer: 1500
        })
        history.push("/todos");
    };

    return (
        <div>
        <FormEdit
            title={title}
            description={description}
            status={status}
            setTitle={setEditTitle}
            setDescription={setEditDescription}
            setStatus={setEditStatus}
            onEditSubmit={onEditSubmit}
        />
        </div>
    );
}
