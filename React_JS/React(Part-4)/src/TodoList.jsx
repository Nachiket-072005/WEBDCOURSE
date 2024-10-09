import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
  let [todos, setTodos] = useState([
    { task: "Sample Task", id: uuidv4(), isDone: false },
  ]);
  let [newTodo, setNewTodo] = useState("");

  let addTask = () => {
    setTodos((prevVal) => {
      return [...prevVal, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };

  let updateTodoVal = (e) => {
    setNewTodo(e.target.value);
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((prevTodos) => prevTodos.id != id)
    );
  };
  let markDone = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return { ...todo, isDone: true };
      })
    );
  };

  //   let markDoneOne = (id) => {
  //     setTodos((prevTodos) =>
  //       prevTodos.map((todo) => {
  //         if (todo.id === id) {
  //           return { ...todo, task: todo.task.strike() };
  //         }
  //         return todo;
  //       })
  //     );
  //   };

  let markDoneOne = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isDone: true }; // Toggle completed status
        }
        return todo;
      })
    );
  };

  return (
    <div>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="add a task"
        value={newTodo}
        onChange={updateTodoVal}
      />{" "}
      &nbsp; <button onClick={addTask}>Add</button>
      <h4>Tasks to be done</h4>
      <hr />
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.isDone ? "line-through" : "none",
              }}
            >
              {todo.task}
            </span>{" "}
            &nbsp; <button onClick={() => deleteTodo(todo.id)}>Delete</button>{" "}
            &nbsp;
            <button onClick={() => markDoneOne(todo.id)}>Mark as Done!</button>
          </li>
        ))}
      </ul>
      <hr />
      <button onClick={markDone}>Mark All as Done!</button>
    </div>
  );
}
