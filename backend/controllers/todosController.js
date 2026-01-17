let todos = [];
let nextId = 1;

export function getTodos(req, res) {
  res.json(todos);
}

export function createTodo(req, res) {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }

  const newTodo = {
    id: nextId++,
    title,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
}
