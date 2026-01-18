import db from "../db/database.js";

export async function getNotes(req, res) {
  try {
    const notes = await db.all(
      "SELECT * FROM notes ORDER BY updated_at DESC"
    );
    res.json(notes);
  } catch {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
}

export async function createNote(req, res) {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  const timestamp = new Date().toISOString();

  try {
    const result = await db.run(
      "INSERT INTO notes (content, updated_at) VALUES (?, ?)",
      [content, timestamp]
    );

    res.status(201).json({
      id: result.lastID,
      content,
      updated_at: timestamp,
    });
  } catch {
    res.status(500).json({ error: "Failed to create note" });
  }
}

export async function updateNote(req, res) {
  const { id } = req.params;
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required" });
  }

  const timestamp = new Date().toISOString();

  try {
    const result = await db.run(
      "UPDATE notes SET content = ?, updated_at = ? WHERE id = ?",
      [content, timestamp, id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.json({
      id: Number(id),
      content,
      updated_at: timestamp,
    });
  } catch {
    res.status(500).json({ error: "Failed to update note" });
  }
}

export async function deleteNote(req, res) {
  const { id } = req.params;

  try {
    const result = await db.run(
      "DELETE FROM notes WHERE id = ?",
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: "Note not found" });
    }

    res.status(204).end();
  } catch {
    res.status(500).json({ error: "Failed to delete note" });
  }
}
