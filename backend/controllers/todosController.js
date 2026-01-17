import db from "../db/database.js";

export async function getTodos(req, res) {
  try {
    const todos = await db.all("SELECT * FROM todos");
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch todos" });
  }
}

export async function createTodo(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  try {
    const result = await db.run(
      "INSERT INTO todos (title, completed) VALUES (?, ?)",
      [title, 0]
    );

    const newTodo = {
      id: result.lastID,
      title,
      completed: 0,
    };

    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "Failed to create todo" });
  }
}

export async function deleteTodo(req, res) {
  const { id } = req.params;

  try {
    const result = await db.run(
      "DELETE FROM todos WHERE id = ?",
      [id]
    );

    if (result.changes === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: "Failed to delete todo" });
  }
}

export async function updateTodo(req, res) {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const existing = await db.get(
      "SELECT * FROM todos WHERE id = ?",
      [id]
    );

    if (!existing) {
      return res.status(404).json({ error: "Todo not found" });
    }

    const updatedTitle = title ?? existing.title;
    const updatedCompleted = completed ?? existing.completed;

    await db.run(
      "UPDATE todos SET title = ?, completed = ? WHERE id = ?",
      [updatedTitle, updatedCompleted, id]
    );

    res.json({
      id,
      title: updatedTitle,
      completed: updatedCompleted,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update todo" });
  }
}
