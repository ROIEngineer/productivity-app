import { useEffect, useState } from "react";
import NoteItem from "./NoteItem";

function NotesList() {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/notes")
      .then((res) => res.json())
      .then(setNotes);
  }, []);

  async function addNote(e) {
    e.preventDefault();
    if (!content.trim()) return;

    const res = await fetch("http://localhost:3000/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content }),
    });

    const note = await res.json();
    setNotes((prev) => [note, ...prev]);
    setContent("");
  }

  async function editNote(note) {
    const newContent = prompt("Edit note", note.content);
    if (!newContent) return;

    const res = await fetch(
      `http://localhost:3000/notes/${note.id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newContent }),
      }
    );

    const updated = await res.json();

    setNotes((prev) =>
      prev.map((n) => (n.id === updated.id ? updated : n))
    );
  }

  async function deleteNote(id) {
    await fetch(`http://localhost:3000/notes/${id}`, {
      method: "DELETE",
    });

    setNotes((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <section>
      <h2 style={{ margin: '0 0 1rem 0' }}>Notes</h2>

      <form onSubmit={addNote}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write a note..."
        />
        <button type="submit">Add Note</button>
      </form>

      <ul style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onEdit={editNote}
            onDelete={deleteNote}
          />
        ))}
      </ul>
    </section>
  );
}

export default NotesList;
