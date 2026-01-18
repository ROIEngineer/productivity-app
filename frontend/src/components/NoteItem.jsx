function NoteItem({ note, onEdit, onDelete }) {
  return (
    <li>
      <p>{note.content}</p>
      <small>{new Date(note.updated_at).toLocaleString()}</small>
      <div>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note.id)}>Delete</button>
      </div>
    </li>
  );
}

export default NoteItem;
