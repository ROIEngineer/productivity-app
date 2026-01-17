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
