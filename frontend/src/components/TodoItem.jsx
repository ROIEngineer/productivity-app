function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <li style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={() => onToggle(todo)}
      />

      {todo.title}

      <button onClick={() => onEdit(todo)}>Edit</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
