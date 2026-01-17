import express from "express";
import cors from "cors";


const app = express();
const PORT = 3000;

let todos = [];
let nextId = 1;

app.use(cors());
app.use(express.json());

// GET todos endpoint
app.get("/todos", (req, res) => {
  res.json(todos);
});

// POST todos endpoint
app.post("/todos", (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({ error: "Title is required"});
  }

  const newTodo = {
    id: nextId++,
    title,
    completed: false,
  };

  todos.push(newTodo);

  res.status(201).json(newTodo);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
