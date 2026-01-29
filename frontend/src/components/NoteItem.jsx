function NoteItem({ note, onEdit, onDelete }) {
  return (
    <li style={{ 
      borderBottom: '1px solid var(--border)',
      paddingBottom: '1rem'
    }}>
      <p style={{ margin: '0 0 0.5rem 0' }}>{note.content}</p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <small style={{ color: 'var(--muted)', fontSize: '0.85em' }}>
          {new Date(note.updated_at).toLocaleString()}
        </small>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => onEdit(note)} style={{ fontSize: '0.85em' }}>Edit</button>
          <button className="delete" onClick={() => onDelete(note.id)} style={{ fontSize: '0.85em' }}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default NoteItem;
