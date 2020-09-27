import React, { useEffect } from "react";
import { Card } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getTodos } from "../store/actions/actionTodo";

export default function Todos() {
    const dispatch = useDispatch();
    const { todos } = useSelector(state => state.reducerTodo);

    useEffect(() => {
        dispatch(getTodos());
    }, [dispatch]);

    return (
        <div className="container-todos" data-testid="todos-page">
            <div className="todos-title">
                <h1 className="todos-text">Your Todos</h1>
            </div>
                <div className="todos-card">
                    {todos.map(e => {
                        return (
                            <div key={e.id}>
                                <Card todo={e} key={e.id} />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}
