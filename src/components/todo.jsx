import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, toggleTodo } from "../redux/todoSlice";
import { AddIcon, DeleteIcon, CompleteIcon } from "./items";

const Todo = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText("");
    }
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "30px",
        borderRadius: "12px",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
        width: "100%",
        maxWidth: "500px",
        margin: "50px auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        textAlign: "center",
        height: "400px", // set your desired height
        overflowY: "auto", // vertical scrollbar if needed
      }}
    >
      <h2
        style={{
          marginBottom: "25px",
          // color: "#333",
          fontFamily: "'Montserrat', sans-serif",
          color: "#4B0082",
        }}
      >
        Todo List
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "25px",
        }}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAdd();
            }
          }}
          placeholder="Add new task"
          style={{
            padding: "10px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            flexGrow: 1,
          }}
        />
        <AddIcon onClick={handleAdd} />
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#f9f9f9",
              padding: "12px 15px",
              borderRadius: "8px",
              marginBottom: "12px",
              cursor: "pointer",
              fontSize: "16px",
              userSelect: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                flexGrow: 1,
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              <CompleteIcon completed={todo.completed} />
              <span
                style={{
                  wordBreak: "break-word",
                  opacity: todo.completed ? 0.5 : 1,
                  textDecoration: todo.completed ? "line-through" : "none",
                  color: todo.completed ? "#888" : "#333",
                }}
              >
                {todo.text}
              </span>
            </div>

            <DeleteIcon
              onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteTodo(todo.id));
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
