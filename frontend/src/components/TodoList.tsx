import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { useCallback } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const handleDeleteTodo = useCallback(async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3000/todos/${id}`,
        { method: "DELETE" }
      );

      if (!response.ok && response.status !== 204) {
        throw new Error("Failed to delete todo");
      }

      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const handleToggleTodo = useCallback(async (todo) => {
    try {
      const response = await fetch(
        `http://localhost:3000/todos/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            completed: todo.completed ? 0 : 1,
          }),
        }
      );

      const updated = await response.json();

      setTodos((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );
    } catch (err) {
      setError(err.message);
    }
  }, []);

  const handleEditTodo = useCallback(async (todo) => {
    const newTitle = prompt("Edit todo", todo.title);
    if (!newTitle) return;

    try {
      const response = await fetch(
        `http://localhost:3000/todos/${todo.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ title: newTitle }),
        }
      );

      const updated = await response.json();

      setTodos((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );
    } catch (err) {
      setError(err.message);
    }
  }, []);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("http://localhost:3000/todos");

        if (!response.ok) {
          throw new Error("Failed to fetch todos");
        }

        const data = await response.json();
        setTodos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchTodos();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  async function handleAddTodo(e) {
    e.preventDefault();

    if (!newTodo.trim()) return;

    try {
      const response = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTodo }),
      });

      if (!response.ok) {
        throw new Error("Failed to add todo");
      }

      const createdTodo = await response.json();

      setTodos((prev) => [...prev, createdTodo]);
      setNewTodo("");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div>
      <h2>Todos</h2>

      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new todo"
        />
        <button type="submit">Add</button>
      </form>

      {todos.length === 0 ? (
        <p>No todos yet</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} onToggle={handleToggleTodo} onEdit={handleEditTodo} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default TodoList;
