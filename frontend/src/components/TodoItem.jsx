function TodoItem({ todo, onDelete, onToggle, onEdit }) {
  return (
    <li style={{ 
      display: 'flex', 
      gap: '0.5rem', 
      alignItems: 'center',
      padding: '0.5rem 0'
    }}>
      <input
        type="checkbox"
        checked={!!todo.completed}
        onChange={() => onToggle(todo)}
      />

      <span style={{ 
        flex: 1,
        textDecoration: todo.completed ? "line-through" : "none",
        opacity: todo.completed ? 0.6 : 1
      }}>
        {todo.title}
      </span>

      <button onClick={() => onEdit(todo)} style={{ fontSize: '0.9em' }}>Edit</button>
      <button className="delete" onClick={() => onDelete(todo.id)} style={{ fontSize: '0.9em' }}>Delete</button>
    </li>
  );
}

export default TodoItem;
